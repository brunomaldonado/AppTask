import React from 'react'
import './TodoList.css'

function todoList(props) {
  return (
    <main>
      <ul className="container_list">
        {props.children}
      </ul>
    </main>
  )
}

export default todoList