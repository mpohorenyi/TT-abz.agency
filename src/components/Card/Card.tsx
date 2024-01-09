import React from 'react';

import { User } from '../../types';

import './Card.scss';

type Props = {
  user: User;
};

export const Card: React.FC<Props> = ({ user }) => {
  return (
    <div className="card">
      <img src={user.photo} alt="user photo" className="card__image" />

      <p className="card__text">{user.name}</p>

      <div className="card__details">
        <p className="card__text">{user.position}</p>
        <p className="card__text">{user.email}</p>
        <p className="card__text">{user.phone}</p>
      </div>
    </div>
  );
};
