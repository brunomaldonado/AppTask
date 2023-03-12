import React, { useContext } from 'react';
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
import TodoEditForm from '../components/TodoEditForm/TodoEditForm';

function Layout() {
  // https://www3.cinecalidad3.io/series?page=50
  //hoy voy a mejorar, yo puedo hacerlo, yo soy un ganador, Dios esta conmigo, hoy sera un excelente dia.
  const { 
    error, 
    loading, 
    searchedTaskList,
    toggleCompleteTask,
    toggleDeleteTask,
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

        <TodoList>
          {error && <p style={{fontSize: '1.6em'}}>Error keyboard...!</p>}
          {/* {loading && <p style={{fontWeight: 'bold', fontSize: '1.5em', letterSpacing: '0.25em'}}>Loading...</p>} */}
          {loading && 
            <h1 className="loading">
              Loading
                <div className="loading_dots">
                  <span className="loading_dot"></span>
                  <span className="loading_dot"></span>
                  <span className="loading_dot"></span>
                  {/* <span className="loading_dot"></span> */}
                </div>
            </h1>}
          {(!loading && !searchedTaskList.length) && <p style={{fontSize: '1.6em'}}>¡Add your first task!</p>}

          {searchedTaskList.map(task => (
            <TodoItem 
              key={task.title} 
              imageUrl={task.imageUrl} 
              title={task.title} 
              body={task.body} 
              completed={task.completed}
              onComplete={() => toggleCompleteTask(task.title)}
              onDelete={() => toggleDeleteTask(task.title)}
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

        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />
      </div>
    </React.Fragment>
  )
}

export { Layout }