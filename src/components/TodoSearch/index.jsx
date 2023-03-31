import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton';

import './TodoSearch.css'

function TodoSearch() {
  const {searchValue, setSearchValue, setOpenModal} = useContext(TodoContext);
  
  const onSearchValueInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <>
    <form action="#" id="searchForm">
      <input 
        type="text" 
        className='search' 
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueInput} 
      />
      <span className='searchForm_button'></span>
      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />
    </form>
    {/* <p>{searchValue}</p> */}
    </>
  )     
}

export { TodoSearch }