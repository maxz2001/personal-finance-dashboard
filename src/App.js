import React, { useState } from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import Summary from './Summary';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// Register required components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.type === 'income') {
      setIncome(income + transaction.amount);
    } else {
      setExpenses(expenses + transaction.amount);
    }
  };

  const data = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        label: 'Income',
        data: transactions.filter((t) => t.type === 'income').map((t) => t.amount),
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
      },
      {
        label: 'Expenses',
        data: transactions.filter((t) => t.type === 'expense').map((t) => t.amount),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
      },
    ],
  };

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Summary income={income} expenses={expenses} />
      <div>
        <h2>Monthly Trends</h2>
        <Line data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default App;
