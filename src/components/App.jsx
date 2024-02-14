import React from 'react';
import FriendList from './FriendList/FriendList.jsx';
import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
