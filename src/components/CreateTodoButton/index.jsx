import React, { useContext } from 'react'
// import { TodoContext } from '../../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  // const { searchValue } = useContext(TodoContext)

  const onClickButton = () => {
    props.setOpenModal(true)
    document.querySelector('.newTasks').style.zIndex = '-99';
    // props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);

    // console.log("searchValue", searchValue.current.value)
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