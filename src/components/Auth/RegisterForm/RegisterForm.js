import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import './RegisterForm.scss';
import { Auth } from '../../../api';
import { initialValues, validationSchema } from './RegisterForm.data';

const auth = new Auth();

export function RegisterForm(props) {
  const { openLogin, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHiddenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue.email, formValue.password);
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(formik.errors);

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Peruvify gratis</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo Electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <Form.Input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? 'eye slash' : 'eye'}
              link
              onClick={onShowHiddenPassword}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Form.Input
          name="username"
          type="text"
          placeholder="¿Cómo deberíamos llamarte?"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </Form.Button>
      </Form>

      <div className="register-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Peruvify? <span onClick={openLogin}>Iniciar Sesion</span>
        </p>
      </div>
    </div>
  );
}
