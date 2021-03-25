import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = (props) => {

  const history = useHistory();

  const { todo, checkCompleted, delTodo, askNotificationPermission } = props


  if (!(todo && Object.keys(todo).length)) {
    return (
      <div className="todo_item" style={{ position: 'relative', margin: '0px', boxShadow: 'initial' }}>

        <p style={{ textAlign: 'left', padding: '15px 15px 25px', color: 'indigo', fontSize: '18px' }}>Hello <span role="img" aria-label="hugging face">😎</span>, You Don't Have Any Schedule Now.</p>

        <div style={{ margin: ' 0px 15px 35px', }} onClick={() => history.push("/addtodos")}>
          <button className="btn-add1" style={{ width: '100%', height: 'initial', borderRadius: 'initial', padding: '8px 0px', margin: '0px', fontSize: '18px' }} > Click Here To Add Schedule  <i className="fas fa-plus"></i></button>
        </div>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FHelsinki&amp;src=ZW4uZmlubmlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style={{ border: "solid 2px #777", width: "100%", height: "100%", frameborder: "0" }} scrolling="no" title="googlecalendar"></iframe>

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
        <h3 className="schedule">My Current Schedule</h3>

        {Notification.permission === 'denied' || Notification.permission === 'default' ? <button className="btn-add" style={{ fontSize: '25px' }} onClick={() => askNotificationPermission()}><i className="far fa-bell"></i></button> : ''}

        <button className="btn-add" style={{ fontSize: '21px' }} onClick={() => history.push("/todos/completed")}><i className="fas fa-list"></i></button>

        <button className="btn-add btn-add__mobile1" style={{ fontSize: '25px' }} onClick={() => history.push("/addtodos")}><i className="fas fa-plus"></i></button>

        <button className="btn-add__mobile" style={{ fontSize: '21px' }} onClick={() => history.push("/addtodos")}><i className="fas fa-plus"></i></button>
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

export default withRouter(Todos)

