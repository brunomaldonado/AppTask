
import React, { useContext } from 'react'
import './EmptyTodos.css'

import empty from '../../assets/drafts.svg'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../../TodoContext'
// import check from '../../assets/chekbox.png';

function EmptyTodos() {

  const { setOpenModal } = useContext(TodoContext)
  
  return (
    <div className='empty_container'>
      <img src={empty} alt="" />
      <span>Nothing in Tasks</span>
      <p>¡Add your first task!</p>
      <div className='container_button'>
        <span>Click on button</span>
        <div className="click_button">
          <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>
      </div>
      <p>Start writing something fabolous.</p>
    </div>
  )
}

export {EmptyTodos}