import React from 'react';

import './App.scss';

import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Users } from './components/Users';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Users />
      <Form />
    </>
  );
};

export default App;
