import React from 'react';
// import cn from 'classnames';

import './Button.scss';

type Props = {
  title: string;
  href: string;
};

export const Button: React.FC<Props> = ({ title, href }) => {
  return (
    <a href={`#${href}`} className="button">
      <p className="button__text">{title}</p>
    </a>
  );
};
