import React from "react";
import './UserList.css';
export const UsersList = (props) => {

  return(
    <div className="div">
      <ul>
        {console.log(props.users)}
        {props.users.map((user)=>
        <li className="li" key={user.id}>{user.name}({user.age})
        </li>
        )}
      </ul>
    </div>
  )
  
}