import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className="loading_container">
      <span className='loading_completedIcon'></span>
      <div className='loading_paragraphs'>
        <p className='loading_textTitle'></p>
        <p className='loading_text'></p>
        <p className='loading_text'></p>
        <p className='loading_text'></p>
        <p className='loading_text'></p>
        <p className='loading_text'></p>
        <p className='loading_text'></p>
      </div>
      <div className='loading_icons'>
        <span className='loading_editIcon'></span>
        <span className='loading_deleteIcon'></span>
      </div>
    </div>
  )
}

export {TodosLoading}