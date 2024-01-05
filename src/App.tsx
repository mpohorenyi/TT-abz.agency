import React from 'react';

import './App.scss';

import { Banner } from './components/Banner';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <List />
      <Form />
      <Button title="users" />
    </div>
  );
};

export default App;
