import { React, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 4),
  },
  {
    id: 'e2',
    title: 'New Tv',
    amount: 194,
    date: new Date(2021, 1, 14),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.12,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'New desk',
    amount: 494.12,
    date: new Date(2022, 7, 4),
  },
]


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
