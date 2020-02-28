import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//import TimeInterval from "./components/TimeInterval";
import "./App.css";

import uuid from "uuid";
//import axios from 'axios';

class App extends Component {
  //========== create states to encompass the todos array =======
  state = {
    //=== <create todos array and use uuid library to dynamically generate id====
    todos: [
      {
        id: uuid.v4(),
        title: "Have a quite time",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Take break fast",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Set off to school",
        completed: false
      }
    ]
  };

  //=== <create todos array====
  /* state = {
    todos: []
  };
//======== making an HTTP request using axios api===
/*componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}))
}*/

  //==========Function to check completed box ========
  checkCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //==========Function to addTodo Todolist =======
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  //========== Adding addTodo by making HTTP post =======

  /*addTodo = title => {
     axios.post('https://jsonplaceholder.typicode.com/todos', {
       title,
       completed: false
     })
     .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };*/

  //==========Function to delete Todolist ========
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  /* delTodo = id => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res =>   this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  }));
  };*/

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
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
          <Route path="/About" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
/*render() {
  // console.log(this.state.todos)
  return (
  <Router>
    <div className="App">
  
            <Header />
            <Main />
        <Route exact path='/' render={props => (
        <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
       <Todos todos={this.state.todos}checkCompleted={this.checkCompleted} delTodo={this.delTodo}
        />*
        </React.Fragment>
        )}/>
        <Route path='/About' component={About}></Route>
      </div>
  
    </Router>
  );
}
}*/
