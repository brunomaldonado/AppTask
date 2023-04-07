// import React from 'react'
import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom';

// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import './TodoItem.css'

import check from '../../assets/chekbox.png';
import { TodoContext } from '../../TodoContext';

// const today = dayjs();
// const yesterday = dayjs().subtract(1, 'day');
// const todayStartOfTheDay = today.startOf('day');

// const tomorrow = dayjs().add(1, 'day');
// const todayEndOfTheDay = today.endOf('day');

function TodoItem(props) {
  // const [newTitle, setNewTitle] = React.useState(props.title)
  const [showModal, setShowModal] = React.useState(false);
  const [selectDate, setSelectDate] = useState(new Date("04/01/2022 12:00:00").getDate());

  // const [newTaskTitle, setNewTaskTitle] = React.useState(props.title);
  // const [newTaskDescription, setNewTaskDescription] = React.useState(props.body);

  const { 
    onClickDeleteTask,
    onClickEditTask,
    // date,
  } = useContext(TodoContext) 

  function removeModal() {
    // console.log('remove modal')
    // const modal = document.querySelector('.modal_wrapper');
    // if (modal) {
    //   modal.remove();
    // };
    document.querySelector('.newTasks').style.zIndex = '99';
    setShowModal(false);
  };

  function closeModal(event) {
    if (event.target.className === 'modal_wrapper') {
      removeModal();
    };
  }

  const handleDeleteClick = () => {
    setShowModal(true)
    document.querySelector('.newTasks').style.zIndex = '-99';
  }

  // const handleDeleteClick = () => {
  //   setShowModal(false)
  //   // setDeleteTask(props.title);
  //   // console.log("delete item", props.title)
  //   // console.log("delete item", props.body)
  //   onClickDeleteTask(props.title);
  //   document.querySelector('.newTasks').style.zIndex = '99';
  // }

  const handleCancelClick = () => {
    setShowModal(false)
    // setDeleteTask(props.title);
    // console.log("delete item", props.title)
    // console.log("delete item", props.body)
    document.querySelector('.newTasks').style.zIndex = '99';
  }

  return (
    <>
      <li className={`container_item ${props.completed && 'container_item--active'}`}>
        <div className="container_check">
          <img 
            // src={props.imageUrl} 
            src={check} 
            alt="" 
            onClick={props.onComplete} 
          />
          <button className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}></button>
        </div>
        <div className={`container_description`}>
          <p>{props.title}</p>
          <p>{props.description}</p>
          {/* <div className="container_date">
            <span id="start">{props.dateToStart}</span>
            <span id="end">{props.dateToEnd}</span>
          </div> */}

          <div className="container_date">
            <div className="container_start">
              <label className="label_start">start</label>
              <span id="start">{props.dateToStart}</span>
            </div>
            <div className="container_end">
              <label className='label_end'>end</label>
              <span className='end'>{props.dateToEnd}</span>
            </div>
          </div>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={today}
              shouldDisableMonth={isInCurrentMonth}
              views={['year', 'month', 'day', 'hours', 'minutes']}
            />
          <DateTimePicker
            defaultValue={yesterday}
            disablePast
            views={['year', 'month', 'day', 'hours', 'minutes']}
          />
        </LocalizationProvider> */}

        </div>
        <div 
          className='container_buttons'
          // onClick={handleDeleteClick}
        >
          <button className='edit'
            // onClick={editTask}
            // onClick={() => editTask(props.title)}
            onClick={() => onClickEditTask(props.title)}
          ></button>
          <button 
            className='trash'
            // onClick={() => onClickDeleteTask(props.title)}
            onClick={handleDeleteClick}
          >
          </button>
        </div>
      </li> 
      {showModal &&
        ReactDOM.createPortal(
          <div className="backdground">
            <div className="modal_wrapper"
            onClick={closeModal}
            >
              <div className="modal_content modal_portal ">
                <p className="modal_title">Are you sure you want to remove this TODO?</p>
                {/* <p>{props.title}</p>
                <p>{props.body}</p> */}
                <li className={`container_item container_item__portal ${props.completed && 'container_item--active'}`}>
                  <div className="container_check">
                    <img 
                      // src={props.imageUrl} 
                      src={check} 
                      alt="" 
                      // onClick={props.onComplete} 
                    />
                    <button className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}></button>
                  </div>
                  <div className={`container_description`}>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                    {/* <div className="container_date">
                      <span id="start">{props.dateToStart}</span>
                      <span id="end">{props.dateToEnd}</span>
                    </div> */}
                    <div className="container_date">
                      <div className="container_start">
                        <label className="label_start">start</label>
                        <span id="start">{props.dateToStart}</span>
                      </div>
                      <div className="container_end">
                        <label className='label_end'>end</label>
                        <span className='end'>{props.dateToEnd}</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className='container_buttons container_buttons__portal'
                  >
                    <button className='edit'
                      onClick={() => (onClickEditTask(props.title), setShowModal(false))}
                    ></button>
                  </div>
                </li> 
                <div className="form_buttons">
                  <button 
                    className='button_cancel'
                    // onClick={() => setShowModal(false)}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>     
                  <button 
                    className='button_delete'
                    onClick={() => (onClickDeleteTask(props.title), setShowModal(false))}
                  >
                    Remove
                  </button>   
                </div>       
              </div>
            </div>,
          </div>,
          document.getElementById('root-modal')
        )}
    </>
  )
}

export { TodoItem }

