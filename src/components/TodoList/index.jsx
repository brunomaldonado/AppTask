import React from 'react'
import './TodoList.css'

function todoList(props) {
  return (
    <section>
      <ul className="container_list">
        {props.children}
      </ul>
    </section>
  )
}

export default todoList