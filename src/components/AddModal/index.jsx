// import React from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../../TodoContext';
import './AddModal.css'

function AddModal({ children }) {
  const { setOpenModal } = useContext(TodoContext);
  
  
  const handleClose = () => {
    setOpenModal(false);
    document.querySelector('.newTasks').style.zIndex = '99';
  }

  function removeModal() {
    // console.log('remove modal')
    // const modal = document.querySelector('.modal_wrapper');
    // if (modal) {
    //   modal.remove();
    // };
    setOpenModal(false);
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
  );
}

export { AddModal };