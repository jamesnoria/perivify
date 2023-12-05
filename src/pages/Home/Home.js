import React from 'react';
import { Button } from 'semantic-ui-react';
import { Auth } from '../../api';

const auth = new Auth();

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button secondary onClick={auth.logout}>
        Cerrar sesion
      </Button>
    </div>
  );
}
