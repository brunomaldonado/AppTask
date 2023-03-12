import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

import todos from '../../assets/todos.png';

function TodoCounter() {
  // console.log('totalTask', totalTask, 'completedLists', completedLists)

  const {totalTask, completedLists} = useContext(TodoContext)

  return (
    <div className="header_container">
      <img className='header_logo' src={todos} alt="" />
      <div className="header_top">
        <h1 htmlFor="header_title">Smart task management</h1>
        <h2 className="TodoCounter_title">You have completed lists <strong style={{fontWeight: '800', color: 'green'}}>{completedLists} </strong> of {totalTask} tasks</h2>
      </div>
    </div>
  )
}

export { TodoCounter };
