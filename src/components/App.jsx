import React from 'react';
import FriendList from './FriendList/FriendList.jsx';
import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import friends from './assets/friends.json';
import user from './assets/user.json';
import data from './assets/data.json';
import transactions from './assets/transactions.json';

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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendItem={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
