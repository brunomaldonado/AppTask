
import React from 'react'
import './EmptyTodos.css'

import empty from '../../assets/drafts.svg'
// import check from '../../assets/chekbox.png';

function EmptyTodos() {
  return (
    <div className='empty_container'>
      <img src={empty} alt="" />
      <span>Nothing in Tasks</span>
      <p>¡Add your first task!</p>
      <p>Start writing something fabolous.</p>
    </div>
  )
}

export {EmptyTodos}