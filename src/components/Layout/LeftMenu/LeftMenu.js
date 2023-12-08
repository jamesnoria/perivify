import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './LeftMenu.scss';

export function LeftMenu() {
  const { pathname } = useLocation();

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  return (
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
          onClick={() => console.log('subir cancion')}
        />

        <Menu.Item
          name="Nueva album"
          icon="plus"
          link
          onClick={() => console.log('subir album')}
        />

        <Menu.Item
          name="Nueva artista"
          icon="plus"
          link
          onClick={() => console.log('subir artista')}
        />
      </Menu>
    </div>
  );
}
