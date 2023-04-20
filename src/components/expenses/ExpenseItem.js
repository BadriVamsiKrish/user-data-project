import React  from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../ui/Card';
export const ExpenseItems = (props) => {
  
  return(
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>
          {props.title}
        </h2>
      </div>
      <div className='expense-item__price'>Rs.{props.amount}</div>
      
    </Card>
  )
  
}