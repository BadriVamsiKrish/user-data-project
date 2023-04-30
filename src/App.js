// import React, { useState } from 'react';
// import './App.css';
// import {FormInput} from './components/formInput';
// import { UsersList } from './components/UserList';

// const App = () => {
//   const[user,setUser]=useState([]);
//   const AddHandler=(Uname,Uage)=>{
//     setUser([...user,{name:Uname,age:Uage,id:Math.random().toString()}])
//   }
  
  

//   return (
//     <div>
//       <h1>User Data...</h1>
//       <FormInput onAdded={AddHandler}/>
//       <UsersList users={user}/>
//     </div>
//   );
// };

// export default App;
import React,{useState,useRef} from 'react'
import TodoList from './TodoList';

const App = () => {
  const table=useRef('null');
  const [taskid,setTaskid] = useState("");
  const [taskprice,setTaskprice] = useState("");
  const [taskdish,setTaskdish] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTaskid(e.target.value)
  }
  const changeHandler1 = e =>{
    setTaskprice(e.target.value)
  }
  const changeHandler2 = e =>{
    setTaskdish(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    const ite=[taskid,taskprice,taskdish,table.current.value];
    var str='';
    for (let i of ite){
      str+=i+'-';

    }
    const newTodos = [...todos,str];
    setTodos(newTodos);
    setTaskid("");
    setTaskprice("");
    setTaskdish("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <label>Unique Id:</label>
              <input size="30" type="text" name="task" value={taskid} onChange={changeHandler} />
              <label>Choose Price:</label>
              <input size="30" type="text" name="task" value={taskprice} onChange={changeHandler1} />
              <label>Choose Dish:</label>
              <input size="30" type="text" name="task" value={taskdish} onChange={changeHandler2} />
              <label>Table:</label>
              <select ref={table} id="table" name="table">
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
              </select>
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App;
