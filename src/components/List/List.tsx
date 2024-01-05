import React from 'react';

import { Card } from '../Card';

import './List.scss';

const users = [1, 2, 3];

export const List: React.FC = () => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user} />
      ))}
    </div>
  );
};
