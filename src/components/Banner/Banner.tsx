import React from 'react';

import { Button } from '../Button';
import './Banner.scss';

export const Banner: React.FC = () => {
  return (
    <div className="page__banner banner">
      <h1 className="banner__title">Test assignment for front-end developer</h1>

      <p className="banner__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they&apos;ll be building web interfaces with accessibility
        in mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>

      <Button title="Sing up" href="registration" />
    </div>
  );
};
