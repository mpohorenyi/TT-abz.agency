import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { getUsers } from '../../api/service';
import { User } from '../../types';

import { Card } from '../Card';
import { Preloader } from '../Preloader';

import './Users.scss';

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleShowMoreClick = (): void => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getUsers(currentPage || 1)
      .then((response) => {
        setUsers((prev) => [...prev, ...response.users]);
        setCurrentPage(response.page);
        setTotalPage(response.total_pages);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  return (
    <section className="container users" id="users">
      <h2 className="users__title">Working with GET request</h2>

      {isLoading && <Preloader />}

      {!isLoading && isError && (
        <p className="users__text--error">Something went wrong</p>
      )}

      {!isLoading && !isError && !!users.length && (
        <div className="users__list">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}

      {!isLoading && !isError && !users.length && (
        <p className="users__text">The list of users is empty</p>
      )}

      <button
        type="button"
        className={cn('users__button', {
          'users__button--disable': totalPage === currentPage,
        })}
        disabled={totalPage === currentPage}
        onClick={handleShowMoreClick}
      >
        Show more
      </button>
    </section>
  );
};
