import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
        <div>
          <ExpenseDate date={props.date}/>
        </div>
        <div className='expense-item_description'>
            <h2>{props.title}</h2>
            </div>
            <div className='expense-item_price'>{props.amount}</div>
    </Card>
    </li>
  )
}

export default ExpenseItem