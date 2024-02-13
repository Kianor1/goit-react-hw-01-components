import React from 'react';
// import FriendList from './FriendList/FriendList.jsx';
import Profile from './Profile/Profile.jsx';
// import Statistics from './Statistics/Statistics';
// import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      {/* <Statistics />;
      <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};
