import React,{useState} from 'react';
import './Expenses.css';
import { ExpenseItems } from './ExpenseItem';
import { Card } from '../ui/Card';
import {ExpensesFilter} from './ExpensesFilter';
import { ExpensesChart } from './ExpensesChart';
export const Expenses = (props) => {
   const [filteredYear,setFilteredYear]  = useState('2020');
  const filterChangeHandler = selectedYear =>{
       setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let expensesContent=<h2 style={{color:'white'}}>No data is found in that year</h2>;
  if(filteredExpenses.length>0){
    expensesContent=filteredExpenses.map((item)=>
    <ExpenseItems
    key={item.id} 
     title={item.title}
     amount={item.amount}
     date={item.date}
  />)

  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter
       selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      {expensesContent}
    </Card>
  )
  
}