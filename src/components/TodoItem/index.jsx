// import React from 'react'
import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom';

import './TodoItem.css'

import circlecheck from '../../assets/circlecheck.png';
import { TodoContext } from '../../TodoContext';

function TodoItem(props) {
  // const [newTitle, setNewTitle] = React.useState(props.title)
  const [showModal, setShowModal] = React.useState(false);
  const [selectDate, setSelectDate] = useState(new Date("04/01/2022 12:00:00").getDate());

  const { 
    onClickDeleteTask,
    onClickEditTask,
    isDisabled,
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
      <li className={`container_item`}>
        <div className="container_check">
           <img 
            src={circlecheck} 
            alt="" 
          />
          <button 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={props.onComplete}
          >
          </button>
        </div>
        <div className={`container_description ${props.completed && 'container_item--active'}`}>
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
          className='container_buttons'
          // onClick={handleDeleteClick}
        >
          <button type='button' className={`edit ${props.completed && 'disabled'}`}
            // onClick={editTask}
            // onClick={() => editTask(props.title)}
            onClick={() => onClickEditTask(props.title)}
            // disabled={isDisabled}
          ></button>
          <button 
            type='button'
            className={`trash`}
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
                <p className="modal_title">Are you sure you want to remove this ITEM?</p>
                {/* <p>{props.title}</p>
                <p>{props.body}</p> */}
                <li className={`container_item container_item__portal ${props.completed && 'container_item--active'}`}>
                  <div className="container_check">
                    <img 
                      // src={props.imageUrl} 
                      src={circlecheck} 
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
                    {/* <button type='button' className={`edit`} */}
                    <button type='button' className={`edit ${props.completed && 'disabled'}`}
                      onClick={() => (onClickEditTask(props.title), setShowModal(false))}
                    >
                    </button>
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

