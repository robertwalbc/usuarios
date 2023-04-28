'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IUsers } from './Users.types';

function Users({ users }: IUsers) {
  const router = useRouter();

  return (
    <ul className='list-group'>
        {
          users.map((user) => (
            <li key={user.id}
            className='list-group-item d-flex justify-content-between 
            align-items-center list-group-item-action'
            onClick={() => { router.push(`/users/${user.id}`); }}>
              <div>
                <h4>{user.id}. {user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
              </div>
              <img
              src={user.avatar}
              alt={user.email} 
              style={ {borderRadius: '50%'} }/>
            </li>
          ))
        }
    </ul>
  );
}

export default Users;
