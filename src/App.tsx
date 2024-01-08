import React from 'react';

import './App.scss';

import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <List />
      <Form />
    </>
  );
};

export default App;
