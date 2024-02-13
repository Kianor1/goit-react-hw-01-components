import React from 'react';
import s from './Profile.module.css';
import user from '../assets/user.json';

const Profile = ({ data }) => {
  const { avatar, username, location, tag, stats } = user;
  return (
    <div className={s.profileItem}>
      <div className="description">
        <img src={avatar} alt={tag} className={s.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
