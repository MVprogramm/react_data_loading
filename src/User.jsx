import React from 'react';
import './user.scss';

const User = ({ data }) => {
  const { name, location, avatar_url: avatarUrl } = data;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;