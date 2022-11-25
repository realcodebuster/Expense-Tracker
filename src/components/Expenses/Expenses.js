import {React, useState} from 'react'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div className='expenses'>
      <div>
        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
    </div>
    </div>
  )
}

export default Expenses