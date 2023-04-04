import React, { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosNoFound } from '../../components/TodosNoFound';
import { EmptyTodos } from '../../components/EmptyTodos'

// import erase from '../../assets/ios_close.png';

import './TodoSearch.css'

function TodoSearch() {
  const { loading, searchValue, setSearchValue, setOpenModal, searchedTaskList, error, totalTask } = useContext(TodoContext);

  const ref = useRef(null)

  const onSearchValueInput = (event) => {
    setSearchValue(event.target.value);
    // let inputValue = setSearchValue(event.target.value);
    let inputValue = event.target.value;
    // console.log("writing keyboard", event.target.value);
    // console.log("writing inputValue", inputValue.length);

    if (!setSearchValue(event.target.value)) {
      document.querySelector(".clear_keyboard").style.visibility = 'visible'
    } 
    if(inputValue.length <=  0) {
      document.querySelector(".clear_keyboard").style.visibility = 'hidden';
    }
  }

  const onClickButton = (event) => {
    // Array.from(document.getElementById('searchForm')).forEach(
    //   input => (input.value = '')
    // )
    setOpenModal(true)
    document.querySelector('.newTasks').style.zIndex = '-99';
    // console.log("click add new task", searchValue)
    // setSearchValue(event.target.value).reset();
    setSearchValue("");
    document.querySelector(".clear_keyboard").style.visibility = 'hidden';

  }


  const clearKeyboard = (event) => {
    // console.log('clear keyboard')
    event.preventDefault();
    setSearchValue("");
    document.querySelector(".clear_keyboard").style.visibility = 'hidden';
    const input = document.getElementById('inputData')
    input.focus();
  }

  return (
    <>
    <form action="#" id="searchForm">
      <input 
        ref={ref}
        id="inputData"
        type="text" 
        className='search' 
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueInput} 
        // onInput={onSearchValueInput} 
      />
      <span className='searchForm_button'>
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
      </span>
      {/* <img className='erase_keyboard' src={erase} alt="erase_keyboard" /> */}
      <span className='clear_keyboard'
        ref={ref}
        onClick={clearKeyboard}
      >
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
      </span>
      {/* <button className='erase_keyboard'></button> */}
      {/* <CreateTodoButton 
        setOpenModal = {setOpenModal}
      /> */}

      <div className="button_addTask">
        <button type='submit'
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
    </form>
    {(!loading && !error && !searchedTaskList.length && totalTask != 0) && (<TodosNoFound/> )}
    {/* <p>{searchValue}</p> */}
    </>
  )     
}

export { TodoSearch, }