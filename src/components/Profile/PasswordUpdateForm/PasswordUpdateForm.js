import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './PasswordUpdateForm.data';
import { User } from '../../../api';

const userController = new User();

export function PasswordUpdateForm(props) {
  const { onClose } = props;

  const [showPassword, setShowPassword] = useState(false);

  const onShowHiddenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateUserPassword(
          formValue.password,
          formValue.newPassword
        );
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="contrasena actual"
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHiddenPassword,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        name="newPassword"
        type={showPassword ? 'text' : 'password'}
        placeholder="nueva contrasena actual"
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHiddenPassword,
        }}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword}
      />
      <Form.Input
        name="repeatNewPassword"
        type={showPassword ? 'text' : 'password'}
        placeholder="repetir la nueva contrasena actual"
        icon={{
          name: showPassword ? 'eye slash' : 'eye',
          link: true,
          onClick: onShowHiddenPassword,
        }}
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatNewPassword}
      />

      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Actualizar contrasena
      </Form.Button>
    </Form>
  );
}
