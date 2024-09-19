import React from 'react';

function Summary({ income, expenses }) {
  const balance = income - expenses;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expenses: ${expenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
