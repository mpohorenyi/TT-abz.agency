import React from 'react';
// import cn from 'classnames';

import './Button.scss';

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <a href="title" className="button">
      <p className="button__text">{title}</p>
    </a>
  );
};
