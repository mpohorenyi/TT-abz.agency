import React from 'react';

import { ReactComponent as Logo } from '../../static/images/Logo.svg';
import { Button } from '../Button';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="container header">
      <Logo />

      <nav className="header__nav">
        <Button title="Users" href="users" />
        <Button title="Sing up" href="registration" />
      </nav>
    </header>
  );
};
