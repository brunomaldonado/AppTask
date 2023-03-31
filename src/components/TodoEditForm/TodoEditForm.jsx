import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'

import './TodoEditForm.css'

const TodoEditForm = () => {
  // const item = task.task;
  // const [newTaskTitle, setNewTaskTitle] = useState(task.title);
  // const [newTaskDescription, setNewTaskDescription] = useState(item.body);

  const { 
    setOpenEditModal,
    onChangeTaskTitle,
    onChangeTaskBody,
    taskTitleValue,
    taskBodyValue,
    onClickTaskUpdate,
  } = useContext(TodoContext)

  // const onChangeTitle = (event) => {
  //   setNewTaskTitle(event.target.value);
  // }
  // const onChangeDescription = (event) => {
  //   setNewTaskDescription(event.target.value);
  // }

  const onCancel = (event) => {
    setOpenEditModal(false)
    document.querySelector('.newTasks').style.zIndex = '99';
  }

  const onSubmit = (event) => {
    // console.log('onSubmit')
    event.preventDefault();
    // if(newTaskTitle.length <= 0 && newTaskDescription.length <= 0) return;
    // // onClickAddTask(newTaskTitle, newTaskDescription)
    // setOpenEditModal(false)
    // // editTask(newTaskTitle, newTaskDescription);
    // document.querySelector('.newTasks').style.zIndex = '99';
  }


  return (
    <form onSubmit={onSubmit} className="form" >
      <h1 className="form_title">Edit Task</h1>
      <label className='form_label'>Title</label>
      <input
        value={taskTitleValue}
        onChange={onChangeTaskTitle} 
        type="text" 
        placeholder='Never stop to learn ' 
        className='form_input'
        required
      />
      <label className='form_description'>Description</label>
      <textarea 
        value={taskBodyValue}
        onChange={onChangeTaskBody}
        className="form_texarea"
        placeholder='Write anybody text about the task or challenge that you need to completed...'
        required
      />
      <div className="form_buttons">
        <button className='calcel_button' type='button' onClick={onCancel}>Cancel</button>
        <button className='save_button' type='submit' onClick={onClickTaskUpdate}>Save</button>
      </div>
    </form>
  )
}

export default TodoEditForm