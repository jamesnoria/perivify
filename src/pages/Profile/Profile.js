import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { User } from '../../api';
import {
  AvatarUpdate,
  DisplayNameUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm
} from '../../components/Profile';
import './Profile.scss';
import { BasicModal } from '../../components/Shared/BasicModal/BasicModal';

const userController = new User();

export function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [contentModal, setContentModal] = useState(null);

  const { displayName, email } = userController.getMe();

  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal('');
    setContentModal(null);
  };

  const openForm = (type) => {
    if (type === 'displayName') {
      setTitleModal('Actualizar nombre y apellido');
      setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
    }
    if (type === 'email') {
      setTitleModal('Actualizar email');
      setContentModal(<EmailUpdateForm onClose={onCloseModal} />);
    }
    if (type === 'password') {
      setTitleModal('Actualizar contrasena');
      setContentModal(<PasswordUpdateForm onClose={onCloseModal} />);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Configuracion</h1>

        <div className="profile__block">
          <div>
            <AvatarUpdate />
            <span>{displayName}</span>
          </div>
          <Button onClick={() => openForm('displayName')}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Email: {email}</span>
          <Button onClick={() => openForm('email')}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Contrasena: **** **** ****</span>
          <Button onClick={() => openForm('password')}>Actualizar</Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
