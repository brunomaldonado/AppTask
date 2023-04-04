import React from 'react'
import searchKeyword from '../../assets/searchKeyword.svg';

import './TodosNoFound.css'

function TodosNoFound() {

  return (
    <div className={`search_container`}>
      <img src={searchKeyword} alt="" />
      <span>We didn't find anything.</span>
      <p>Try a different keywords.</p>
      {/* <p>Start writing something fabolous.</p> */}
    </div>
  )
}

export { TodosNoFound }