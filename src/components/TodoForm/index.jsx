import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css'

import task from '../../assets/new.png';

const TodoForm = () => {
  const [titleTask, setTitleTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  
  const { onClickAddTask, setOpenModal, } = useContext(TodoContext);

  // const onChangeLogo = (event) => {
  //   console.log("event", event);
  //   // setNewTaskLogo(event.target.img);
  // }

  const onChangeTitle = (event) => {
    setTitleTask(event.target.value);
  }
  const onChangeDescription = (event) => {
    setNewTaskDescription(event.target.value);
  }

  const onCancel = (event) => {
    setOpenModal(false)
    document.querySelector('.newTasks').style.zIndex = '99';
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(titleTask.length <= 0 && newTaskDescription.length <= 0) return;
    onClickAddTask(titleTask, newTaskDescription)
    setOpenModal(false)
    document.querySelector('.newTasks').style.zIndex = '99';


  }

  return (
    <form onSubmit={onSubmit} className="form" >
      <h1 className="form_title">Write a new Task</h1>
      {/* <img className='form_logo'></img> */}
      {/* <span className='form_top'>
        <img className='form_logo' src={task} alt="" />
      </span> */}
      <label className='form_label'>Title</label>
      <input
        value={titleTask}
        onChange={onChangeTitle} 
        id="inputForm"
        type="text" 
        placeholder='Never stop to learn ' 
        className='form_input'
        required
      />
      <label className='form_description'>Description</label>
      <textarea 
        value={newTaskDescription}
        onChange={onChangeDescription}
        className="form_texarea"
        placeholder='Write anybody text about the task or challenge that you need to completed...'
        required
      />
      <div className="form_buttons">
        <button className='calcel_button' type='button' onClick={onCancel}>Cancel</button>
        <button className='add_button' type='submit' onChange={onSubmit}>Add</button>
      </div>
    </form>
  )
}

export { TodoForm };