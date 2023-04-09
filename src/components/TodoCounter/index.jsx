import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

import todos from '../../assets/todos.png';

function TodoCounter() {
  // console.log('totalTask', totalTask, 'completedLists', completedLists)

  const {totalTask, completedLists} = useContext(TodoContext)



  return (
    <header className="header_container">
      <img className='header_logo' src={todos} alt="" />
      <div className="header_top">
        <h1 className="header_title">Smart task <span className="ellipsis">management</span></h1>
        <div className="content">
          <h2 className="TodoCounter_title">You have completed lists</h2>
          <h2> <strong style={{fontWeight: '800', color: 'green'}}>{completedLists} </strong> of {totalTask} tasks </h2>
        </div>
        
        {/* <span>
          <strong style={{fontWeight: '800', color: 'green'}}>{completedLists} </strong> of {totalTask} tasks
          </span></h2> */}
      </div>
    </header>
  )
}

export { TodoCounter };
