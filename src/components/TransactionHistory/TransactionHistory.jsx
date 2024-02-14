import React from 'react';
import s from './TransactionHistory.module.css';
import transactions from '../assets/transactions.json';
const TransactionHistory = () => {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            style={{ backgroundColor: index % 2 === 0 ? '#94eaff' : '#3effc5' }}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
