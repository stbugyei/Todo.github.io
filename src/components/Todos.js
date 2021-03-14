import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = (props) => {

  const history = useHistory();

  const { todo, checkCompleted, delTodo } = props


  if (!(todo && Object.keys(todo).length)) {
    return (
      <div className="loader" style={{ width: "100%", animation: 'fade 1s' }}>

        <h2 style={{ textAlign: 'center', padding: '15px', color: 'indigo' }}>Hello, You Don't Have Any Schedule Yet.<span role="img" aria-label="hugging face">😎</span></h2>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FHelsinki&amp;src=ZW4uZmlubmlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style={{ border: "solid 2px #777", width: "100%", height: "100%", frameborder: "0" }} scrolling="no" title="googlecalendar"></iframe>
        <div style={{ float: 'right' }}>
          <button className="btn-add" onClick={() => history.push("/addtodos")}><i className="fas fa-plus"></i></button>
        </div>


      </div>
    )
  }


  const myNewTodos = todo.map(todo => {
    return (
      <div key={todo.id}>
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
      <div style={{ padding: '10px', marginBottom: '10px', borderBottom: '1px solid #ccc', color: 'indigo', textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)', fontFamily: 'Poppins, sans-serif', display: 'flex', justifyContent: 'space-between' }}>
        <h3 style={{ paddingTop: '7px' }}>My Current Schedule</h3>

        <button className="btn-add btn-add__mobile1" onClick={() => history.push("/addtodos")}><i className="fas fa-plus"></i></button>

        <button className="btn-add__mobile" onClick={() => history.push("/addtodos")}><i className="fas fa-plus"></i></button>
      </div>

      {myNewTodos}
    </>
  )
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default  withRouter(Todos)

