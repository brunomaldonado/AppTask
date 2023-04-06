import React, { useContext, useEffect, useState } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext'; 

import './layout.css';
import { AddModal } from '../components/AddModal';
import { TodoForm } from '../components/TodoForm';
import EditModal from '../components/EditModal/EditModal';
import TodoEditForm from '../components/TodoEditForm';

import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos'

function Layout() {
// const Layout = () => {
  // https://www3.cinecalidad3.io/series?page=50
  //hoy voy a mejorar, yo puedo hacerlo, yo soy un ganador, Dios esta conmigo, hoy sera un excelente dia.

  const { 
    error, 
    loading, 
    searchedTaskList,
    onClickCompleteTask,
    onClickDeleteTask,
    openModal,
    setOpenModal,
    openEditModal,
    setOpenEditModal,
    totalTask,
    isShownE,
    isShownN,
    dateTime,
    date
  } = useContext(TodoContext);
  

  return (
    <React.Fragment>
      <div className="cont">
        <TodoCounter/>
        <TodoSearch />

        <TodoList>
          {/* {(!loading && !error && !searchedTaskList.length) ? <EmptyTodos/> : <TodosNoFound/>} */}
          {/* {loading && <p style={{fontWeight: 'bold', fontSize: '1.5em', letterSpacing: '0.25em'}}>Loading...</p>} */}
          {loading && [1,2,3,4,5,6,7,8].map((n) => <TodosLoading key={n}/>)
          // <div className={`skeleton_loading ${hideLoading ? 'hide_skeletonLoading' : ''}`} />
          // console.log('Loadsdsdsdsdsdsing')
          }
            {/* Loading           
              <div className="loading_dots">
                <span className="loading_dot"></span>
                <span className="loading_dot"></span>
                <span className="loading_dot"></span>
              </div> */}
          {/* {(!loading && !searchedTaskList.length) && <EmptyTodos/>} */}
          {(!loading && totalTask == 0) && (<EmptyTodos/>)}

          {searchedTaskList.map(task => (
            <TodoItem 
              key={task.title} 
              imageUrl={task.imageUrl}  
              title={task.title} 
              description={task.description} 
              completed={task.completed}
              date={task.date}
              // dateToStart={() => dateTime(task.date)}
              onComplete={() => onClickCompleteTask(task.title)}
              onDelete={() => onClickDeleteTask(task.title)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <AddModal>
            {/* <p>{searchedTaskList[0]?.title}</p> */}
            <TodoForm/>
          </AddModal>
        )} 

        {!!openEditModal && (
          <EditModal>
            <TodoEditForm/>
          </EditModal>
        )} 

        {/* <CreateTodoButton
          setOpenModal = {setOpenModal}
        /> */}
      </div>
    </React.Fragment>
  )
}

export { Layout }