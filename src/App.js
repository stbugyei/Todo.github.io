import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import HomePage from "./components/pages/HomePage";
import uuid from "uuid";
import "./App.css";
import { EditTodo } from "./components/EditTodo";


class App extends Component {

  state = {
    todos: window.localStorage.getItem('mytodos') ? JSON.parse(window.localStorage.getItem('mytodos')) :
      {
        todo: [],
        firstName: "",
      }
  };


  //==========Function to check completed box ========
  checkCompleted = id => {
    const completedTodo = this.state.todos.todo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    const checkedItem = Object.assign(this.state.todos, { todo: completedTodo })
    this.setState({ todo: checkedItem })

    window.localStorage.setItem("mytodos", JSON.stringify(checkedItem));
  };


  //==========Function to addTodo Todolist =======
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

      const updatedNewTodo = Object.assign(this.state.todos, { todo: [...this.state.todos.todo, newTodo] })
      this.setState(updatedNewTodo)
      window.localStorage.setItem("mytodos", JSON.stringify(updatedNewTodo));
  };

  //==========Function to edit Todo =======
  editTodo = (filteredPost, id) => {
    const targetedTodo = this.state.todos.todo.map((itm) => {
      return itm.id === id ? filteredPost : itm
    })

    const editedItm = Object.assign(this.state.todos, { todo: targetedTodo })
    this.setState({ todo: editedItm })

    window.localStorage.setItem("mytodos", JSON.stringify(editedItm));
  }


  //==========Function to add username =======
  addName = newUser => {
    const user = Object.assign(this.state.todos, { firstName: newUser })
    this.setState({ firstName: user })
    window.localStorage.setItem("mytodos", JSON.stringify(user));
  }


  //======== Logout Function ======
  logOut = () => {
    const user = Object.assign(this.state.todos, { firstName: "" })
    this.setState({ firstName: user })
    window.localStorage.setItem("mytodos", JSON.stringify(user));
  }


  //==========Function to delete Todolist ========
  delTodo = id => {
    const filteredId = this.state.todos.todo.filter(todo => todo.id !== id)
    const removedId = Object.assign(this.state.todos, { todo: filteredId })
    this.setState({ todo: removedId })
    window.localStorage.setItem("mytodos", JSON.stringify(removedId));
  };


  render() {

    return (
      <Router>
        <div className="todo_wrapper">
          <Header firstName={this.state.todos.firstName} todos={this.state.todos.todo} logOut={this.logOut} />
          {(this.state.todos.firstName === null || this.state.todos.firstName === "") ?
            <Route exact path="/">
              <HomePage firstName={this.state.todos.firstName} addName={this.addName} />
            </Route>
            :
            <>
              <Route exact path="/todos">
                <Todos
                  todo={this.state.todos.todo}
                  checkCompleted={this.checkCompleted}
                  delTodo={this.delTodo}
                />
              </Route>

              <Route exact path="/todo/edit/:id" render={(props) => <EditTodo id={props.match.params.id} todo={this.state.todos.todo} editTodo={this.editTodo} {...props} />} />

              <Route exact path="/addtodos">
                <AddTodo addTodo={this.addTodo} />
              </Route>
            </>
          }
        </div>
      </Router>
    );
  }
}

export default App;
