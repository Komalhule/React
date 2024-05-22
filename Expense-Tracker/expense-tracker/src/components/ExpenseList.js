import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Groceries', cost: 100 },
    { id: 3, name: 'Rent', cost: 800 },
  ];

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
