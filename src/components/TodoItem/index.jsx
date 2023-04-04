// import React from 'react'
import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import './TodoItem.css'

import check from '../../assets/chekbox.png';
import { TodoContext } from '../../TodoContext';

// const ItemProps =  { 
//   title: title,
//   body: body,
//   handleDeleteClick: false,
//   onComplete: false,
// }

function TodoItem(props) {
  // const [newTitle, setNewTitle] = React.useState(props.title)
  const [showModal, setShowModal] = React.useState(false);
  // const [newTaskTitle, setNewTaskTitle] = React.useState(props.title);
  // const [newTaskDescription, setNewTaskDescription] = React.useState(props.body);

  const { 
    onClickDeleteTask,
    onClickEditTask,
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
          <p>{props.body}</p>
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
                    <p>{props.body}</p>
                  </div>
                  <div 
                    className='container_buttons container_buttons__portal'
                  >
                    <button className='edit'
                      onClick={() => (onClickEditTask(props.title), setShowModal(false))}
                    ></button>
                  </div>
                </li> 
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
            </div>,
          </div>,
          document.getElementById('root-modal')
        )}
    </>
  )
}

export { TodoItem }

