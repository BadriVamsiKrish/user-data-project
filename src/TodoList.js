import React from 'react'

const TodoList = ({todolist,deleteHandler,Table2,Table1,Table3,setTable1,setTable2,setTable3}) => {
  
    return (
        <div>
          <h1>Orders</h1>{
            console.log(Table2)
          }
            
            <h2>Table1</h2>
            {
              Table1.map((todo,index) =>
              <div key={index}>
                  <h3>{todo}<button onClick={() => deleteHandler(index,Table1,setTable1)}>Delete</button></h3>
              </div>)
            }
            <h2>Table2</h2>
            {
              Table2.map((todo,index) =>
              <div key={index}>
                  <h3>{todo}<button onClick={() => deleteHandler(index,Table2,setTable2)}>Delete</button></h3>
              </div>)
            }
            <h2>Table3</h2>
            {
              Table3.map((todo,index) =>
              <div key={index}>
                  <h3>{todo}<button onClick={() => deleteHandler(index,Table3,setTable3)}>Delete</button></h3>
              </div>)
            }
        </div>
    )
}

export default TodoList;