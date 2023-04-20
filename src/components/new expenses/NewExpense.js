import React,{useState} from "react";
import './NewExpense.css';
import { ExpenseForm } from "./ExpenseForm";
export const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) =>{
    const newData={...data,id:Math.random().toString()};
    console.log(newData);
    props.onAddExpense(newData);
    setNewForm(<button onClick={addButton}>Add New Expense</button>);
  } 

  const addButton=()=>{
    console.log('hello');
    setNewForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>)
  }

  const [newForm,setNewForm]=useState(<button onClick={addButton}>Add New Expense</button>)

  return(

    <div className="new-expense">
      {newForm}
    </div>

  )
  
}