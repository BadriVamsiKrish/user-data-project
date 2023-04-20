import React, { useState } from 'react';
import './App.css';
import {FormInput} from './components/formInput';
import { UsersList } from './components/UserList';

const App = () => {
  const[user,setUser]=useState([]);
  const AddHandler=(Uname,Uage)=>{
    setUser([...user,{name:Uname,age:Uage,id:Math.random().toString()}])
  }
  
  

  return (
    <div>
      <h1>User Data...</h1>
      <FormInput onAdded={AddHandler}/>
      <UsersList users={user}/>
    </div>
  );
};

export default App;