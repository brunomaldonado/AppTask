import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
  // const onClickButton = (msg) => {
  //   alert(msg)
  // }
  const onClickButton = () => {
    props.setOpenModal(true)
    document.querySelector('.newTasks').style.zIndex = '-99';
    // props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
  }

  return (
    <div className="button_addTask">
      <button 
        className='newTasks'
        onClick={onClickButton}
      > 
      
      </button>

      {/* <span 
        className='newTasks'
        onClick={onClickButton}
      > 
      
      </span> */}
    </div>
  )
}

export { CreateTodoButton }