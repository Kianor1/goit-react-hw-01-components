import React from 'react';
import s from './FriendList.module.css';
import friends from '../assets/friends.json';
const FriendList = () => {
  return (
    <ul className={s.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.list_item}>
          <span
            className={s.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img className={s.avatar} src={avatar} alt="avatar" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
