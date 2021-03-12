import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import HomePage from "./components/pages/HomePage";
import uuid from "uuid";
import "./App.css";


class App extends Component {

  state = {
    //=== <create todos array and use uuid library to dynamically generate id in localstorage ====
    todos: window.localStorage.getItem('mytodos') ? JSON.parse(window.localStorage.getItem('mytodos')) : [],

    firstName: ""
  };


  //==========Function to check completed box ========
  checkCompleted = id => {
    const completedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    this.setState({
      todos: completedTodo
    });

    window.localStorage.setItem("mytodos", JSON.stringify(completedTodo));
  };


  //==========Function to addTodo Todolist =======
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    const updatedNewTodo = [...this.state.todos, newTodo]
    this.setState({
      todos: updatedNewTodo
    });
    window.localStorage.setItem("mytodos", JSON.stringify(updatedNewTodo));
  };


  //==========Function to delete Todolist ========

  delTodo = id => {
    const filteredId = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: filteredId
    });

    window.localStorage.setItem("mytodos", JSON.stringify(filteredId));
  };


  //==========Function to update the firstname state ========

  updateFirstNameState = () => {
    let savedFirstName = JSON.parse(window.localStorage.getItem('firstName'))
    if (this.state.firstName !== savedFirstName) {
      this.setState({ firstName: savedFirstName })
    }
  }

  componentDidMount() {
    setInterval(() => this.updateFirstNameState(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.updateFirstNameState())
  }


  render() {

    return (
      <Router>
        <div className="todo_wrapper">
          <Header firstName={this.state.firstName} todos={this.state.todos}/>
          <Route
            exact
            path="/todos"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  checkCompleted={this.checkCompleted}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />

          <Route>
            {(this.state.firstName !== null && this.state.firstName !== "") ?
              <Redirect to="/todos" /> : <Route exact path="/" component={HomePage} />
            }
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
