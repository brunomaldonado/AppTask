import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  const { setSearchValue, setOpenModal,  } = useContext(TodoContext)

  const onClickButton = (event) => {
    // Array.from(document.getElementById('searchForm')).forEach(
    //   input => (input.value = '')
    // )
    setOpenModal(true)
    document.querySelector('.newTasks').style.zIndex = '-99';
    setSearchValue("");
    document.querySelector(".clear_keyboard").style.visibility = 'hidden';
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