import React,{useState} from "react";
import './ExpenseForm.css';
export const ExpenseForm = (props) => {
  const[enterTitle,setEnterTitle]=useState('');
  const[enterDate,setEnterDate]=useState('');
  const[enterAmount,setEnterAmount]=useState('');

  const titleChangeHandler = (event) =>{
    setEnterTitle(event.target.value);
  console.log(event.target.value) ;}

  const amountChangeHandler = (event) =>{
    setEnterAmount(event.target.value) ;
    console.log(event.target.value) ;}

  const dateChangeHandler = (event) =>{
    setEnterDate(event.target.value) ;
    console.log(event.target.value) ;}

  const submitHandler = (event) =>{
    event.preventDefault();
    const Data={
      title:enterTitle,
      date:new Date(enterDate),
      amount:+enterAmount
    }
    
    console.log(Data);
    props.onSaveExpenseData(Data);
    setEnterTitle('');
    setEnterDate('');
    setEnterAmount('');
  }
    
  
    return(
      <form onSubmit={submitHandler}>
        <h1>Expense Tracker</h1>
        <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' value={enterTitle} onChange={titleChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' value={enterDate} min='2019-01-14' step='2023-06-1' onChange={dateChangeHandler}/>
              </div>
              </div>
              <div className='new-expense__actions'>
                <button>cancel</button>
                  <button type='submit'>Add Expense</button>
              </div>
        
      </form>
    );
}