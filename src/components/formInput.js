import React,{useState} from "react";
import './FormInput.css';
import { Invalid } from "./Invalid";
export const FormInput = (props) => {
  const[Isvalid,setIsvalid]=useState('');
  const [name,setName]=useState('');
  const[age,setAge]=useState('');
  const NameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  }
  const Ercheck = (m) =>{
    setIsvalid(m);
  } 
  const addHandler=(event)=>{
    event.preventDefault();
    if ((name.trim().length>0)&&parseFloat(age)>0){
      console.log('yes its valid...');
      console.log({'name':name,'Age':age});
      props.onAdded(name,age);
      setAge('');
      setName('');
    }
    else{
      var newMsg=' negative age is not valid or forgot to enter age';
      if (name.trim().length==0){
        var newMsg='enter the user name properly.'
      }
      console.log('its not valid...');
      setIsvalid(<Invalid  onCheck={Ercheck} msg={newMsg}/>);

    }
  }


  return(<div>
    <form className="InputForm"
    onSubmit={addHandler}>
      <div>
        <label>UserName:</label>
        <input type="text" onChange={NameChangeHandler}value={name}></input>
      </div>
      <div>
        <label>Age:</label>
        <input type="number" onChange={AgeChangeHandler}value={age}></input>
      </div>
      <div>
        <button type="submit">AddUser</button>
      </div>
    </form>
    {Isvalid}
    
    </div>
  )
  
}