import React from 'react'
import User from './User';

const UsersList = ({users}) => {
  return (
    <div className="user-list">
    {users && users.map((user) => <User key={user.id} first_name={user.firstname} last_name={user.lastname} />)}
  </div>
  );
};

export default UsersList