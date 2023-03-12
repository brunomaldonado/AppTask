import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../../TodoContext';

function EditModal ({ children }) {
  const {
    tasks,
    editTask,
    setOpenEditModal,
  } = useContext(TodoContext);

  const handleClose = () => {
    setOpenEditModal(false);
    document.querySelector('.newTasks').style.zIndex = '99';
  }

  function removeModal() {
    // console.log('remove modal')
    // const modal = document.querySelector('.modal_wrapper');
    // if (modal) {
    //   modal.remove();
    // };
    setOpenEditModal(false);
    document.querySelector('.newTasks').style.zIndex = '99';
  };

  function closeModal(event) {
    if (event.target.className === 'modal_wrapper') {
      removeModal();
    };
  }

  return ReactDOM.createPortal(
    <div className="backdground">
      <div className="modal_wrapper"
      onClick={closeModal}
      >
        <div className="modal_content">
          {children}
          <div className="button_close"
            onClick={handleClose}
          >
          </div>
        </div>
      </div>,
    </div>,
    document.getElementById('root-modal')
  )
}

export default EditModal