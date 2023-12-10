import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { BasicModal } from '../../Shared';
import { NewArtistForm } from '../../../components/Artist';
import './LeftMenu.scss';

export function LeftMenu() {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [contentModal, setContentModal] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setTitleModal('');
    setContentModal(null);
  };

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  const openModal = (type) => {
    if (type === 'artist') {
      setTitleModal('Nuevo artista');
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }

    if (type === 'album') {
      setTitleModal('Nuevo album');
      setContentModal(<h2>Formulario nuevo album</h2>);
    }

    if (type === 'song') {
      setTitleModal('Nueva cancion');
      setContentModal(<h2>Formulario nueva cancion</h2>);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          <Menu.Item
            as={Link}
            to="/"
            name="Inicio"
            icon="home"
            active={isCurrentPage('/')}
          />
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage('/artists')}
          />
          <Menu.Item
            as={Link}
            to="/albums"
            name="Albums"
            icon="window maximize outline"
            active={isCurrentPage('/albums')}
          />
        </Menu>

        <Menu secondary vertical fluid>
          <Menu.Item
            name="Nueva cancion"
            icon="plus"
            link
            onClick={() => openModal('song')}
          />

          <Menu.Item
            name="Nueva album"
            icon="plus"
            link
            onClick={() => openModal('album')}
          />

          <Menu.Item
            name="Nueva artista"
            icon="plus"
            link
            onClick={() => openModal('artist')}
          />
        </Menu>
      </div>

      <BasicModal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
