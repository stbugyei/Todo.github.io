import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = (props) => {

  const { todos, checkCompleted, delTodo } = props

  if (!(todos && Object.keys(todos).length)) {
    return (
      <div className="loader" style={{ width: "100%", animation:'fade 1s' }}>

        <h2 style={{ textAlign:'center', padding: '15px', color:'indigo' }}>Hello, Please Create Your Todo List<span role="img" aria-label="hugging face">😎</span></h2>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FHelsinki&amp;src=ZW4uZmlubmlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style={{ border: "solid 2px #777", width: "100%", height: "100%", frameborder: "0" }} scrolling="no" title="googlecalendar"></iframe> 

      </div>
    )
  }


  const myNewTodos = todos.map(todo => {
    return (
      <div key={todo.id} style={{borderBottom:'2px solid indigo'}}>
        <TodoItem
          todo={todo}
          checkCompleted={checkCompleted}
          delTodo={delTodo}
        />
      </div>
    )
  });

  return (
    <>
      {myNewTodos}
    </>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos

