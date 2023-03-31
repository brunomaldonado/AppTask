import React, { useContext, useEffect, useState } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch'
import TodoList from '../components/TodoList'
// import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext'; 

import './layout.css';
import { AddModal } from '../components/AddModal';
import { TodoForm } from '../components/TodoForm';
import EditModal from '../components/EditModal/EditModal';
import TodoEditForm from '../components/TodoEditForm/TodoEditForm';

import { TodosLoading } from '../components/TodosLoading';
import {EmptyTodos} from '../components/EmptyTodos'

// const skeleton = document.querySelector('.skeleton_loading');

// function Layout() {
const Layout = () => {
  const [showLoading, setShowLoading] = useState()

  // const skeleton = () => {
  //   // document.querySelector('.newTasks').style.zIndex = '99';
  //   document.querySelector('.loading_container').style.display = 'none';
  // }


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
    setOpenEditModal
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="cont">
        <TodoCounter/>
        <TodoSearch/>

        {/* <div className="skeleton_loading">
          <TodosLoading/>
          <TodosLoading/>
          <TodosLoading/>
        </div> */}

        <TodoList>
          {error && <p style={{fontSize: '1.6em'}}>Error keyboard...!</p>}
          {/* {loading && <p style={{fontWeight: 'bold', fontSize: '1.5em', letterSpacing: '0.25em'}}>Loading...</p>} */}
          {loading && [1,2,3,4,5,6,7,8].map((x) => <TodosLoading key={x}/>)
          // <TodosLoading/>
          // <div>
          // <TodosLoading/>
          // <TodosLoading/>
          // </div>
          // <div className={`skeleton_loading ${hideLoading ? 'hide_skeletonLoading' : ''}`} />
          // console.log('Loadsdsdsdsdsdsing')
            // <div className="skeleton_loading">
            //   <TodosLoading/>
            //   <TodosLoading/>
            //   <TodosLoading/>
            // </div>
          }
            {/* Loading           
              <div className="loading_dots">
                <span className="loading_dot"></span>
                <span className="loading_dot"></span>
                <span className="loading_dot"></span>
              </div> */}
          {(!loading && !searchedTaskList.length) && <EmptyTodos/>}

          {searchedTaskList.map(task => (
            // <div className={`hide_skeletonLoading`} />,
            <TodoItem 
              key={task.title} 
              imageUrl={task.imageUrl}  
              title={task.title} 
              body={task.body} 
              completed={task.completed}
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