import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import HomePage from "./components/pages/HomePage";
import uuid from "uuid";
import "./App.css";
import { EditTodo } from "./components/EditTodo";
import CompletedTodos from "./components/CompletedTodos";
//import { dateHandle, timeHandle, GetHoursMinuteSeconds } from "./components/GetTime";
//import GetHoursMinuteSeconds from "./components/GetTime";
//import HourHandle from "./components/HourHandle"


class App extends Component {

  state = {
    todos: window.localStorage.getItem('mytodos') ? JSON.parse(window.localStorage.getItem('mytodos')) :
      {
        todo: [],
        firstName: "",
        avarta: "",
      },
    user: window.localStorage.getItem('appUsers') ? JSON.parse(window.localStorage.getItem('appUsers')) : [],
    curTime: null,
    curDate: null,
    alertFlag: false
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
  addTodo = (title, date, time) => {
    const newTodo = {
      id: uuid.v4(),
      date,
      time,
      title,
      completed: false,
      notified: false
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


  //========== Function to add username to todos FirstName =======
  addName = newUser => {
    const CurrentUser = Object.assign(this.state.todos, { firstName: newUser })
    this.setState({ CurrentUser })
    window.localStorage.setItem("mytodos", JSON.stringify(CurrentUser));
  }

  //========== Function to add username image to todos avatar =======
  addAvatar = event => {
    let file = event.target.files[0];
    let data = new FileReader();
    data.readAsDataURL(file);
    data.onload = () => {
      const userAvarta = Object.assign(this.state.todos, { avarta: data.result })
      this.setState({ avarta: userAvarta })
      window.localStorage.setItem("mytodos", JSON.stringify(userAvarta));
    }
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

  //========== Function for date ========
  dateHandle = () => {
    const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let dateNow = new Date();
    let formatedDateNow = dateNow.getFullYear() + "-" + monthNumber[dateNow.getMonth()] + "-" + dateNow.getDate();
    this.setState({ curDate: formatedDateNow })
  };

  //========== Function for time ========
  timeHandle = () => {
    let currentTime = new Date()
    let currentHours = ('0' + currentTime.getHours()).substr(-2);
    let currentMinutes = ('0' + currentTime.getMinutes()).substr(-2);
    let formatedTime = currentHours + ':' + currentMinutes;
    this.setState({ curTime: formatedTime })
  };

  //========= Due date ========
  dueDate = () => {
    if (this.state.curDate) {
      const setDate = this.state.todos.todo.filter(due => due.date === this.state.curDate);
      return setDate
    }
  }

  //========= Due time ========
  dueTime = () => {
    if (this.state.curTime) {
      const setTime = this.state.todos.todo.filter(due => due.time === this.state.curTime);
      return setTime
    }
  }

  //========== A utility Function to return array of due todos ==========
  dueDateAndDueTime = () => {
    if (this.dueDate() && this.dueTime()) {
      // first compare dueDate with dueTime and remove the duplicate
      let duplicateArr = this.dueDate().filter(dueD => this.dueTime().some(dueT => dueT.id === dueD.id));
      // second create and compare setnotification with duplicateArr
      if (duplicateArr) {
        const setnotification = this.state.todos.todo.filter(due => due.notified === false);
        const finalDuplicateArr = duplicateArr.filter(dueTodo => setnotification.some(dueTodo1 => dueTodo1.id === dueTodo.id))
        return finalDuplicateArr
      }
    }
  }


  //============== Titletext trancating functions =========
  trancateText = (text) => { return (text.substr(0, 60)).trim().concat(' ...') }

  //========== Function to display the title of the due todo ==========
  dueTitle = () => {
    if (this.dueDateAndDueTime()) {
      let setTitle = this.dueDateAndDueTime().map((name => name.title))
      return setTitle + ""
    }
  }

  //========== Function to check if a todo is ready ==========
  alertUser = () => {
    let allTrue = this.state.todos.todo.some(ticked => ticked.notified === false && ticked.date === this.state.curDate && ticked.time === this.state.curTime)
    if (this.state.todos.todo) {
      return allTrue
    }
  }


  // ========== Function to check whether browser supports the promise version of requestPermission() ==========
  checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }
    return true;
  }

  //========== Function to ask notification Permission ==========
  askNotificationPermission = () => {
    function handlePermission(permission) {
      if (Notification.permission === 'denied' || Notification.permission === 'default') {
        console.log('Not enabled')
      } else {
        console.log('notification enabled')
      }
    }

    // check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if (this.checkNotificationPromise()) {
        Notification.requestPermission()
          .then((permission) => {
            handlePermission(permission);
          })
      } else {
        Notification.requestPermission(function (permission) {
          handlePermission(permission);
        });
      }
    }
  }


  //========== Function to register service-worker  ==========
  registerServiceWorker = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');

      navigator.serviceWorker.register('sw.js')
        .then(function (swReg) {
          console.log('Service Worker is registered', swReg);
        })
        .catch(function (error) {
          console.error('Service Worker Error', error);
        });
    } else { console.warn('Push messaging is not supported'); }
  }


  //========== Function to create notification  ==========
  createNotification = () => {
    let allTrue = this.state.todos.todo.some(ticked => ticked.notified === false && ticked.date === this.state.curDate && ticked.time === this.state.curTime)
    let img = this.state.todos.avarta;
    let text = 'Hello! Your schedule"' + this.trancateText(this.dueTitle()) + '" is due.';
    let vibration = [200, 100, 200, 100, 200, 100, 400];

    if (allTrue === true) {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('TodoList', { body: text, icon: img, vibrate: vibration });
        });

        /*##################### Condition to set the notified flag to true #######################*/
        let notifiedID = this.dueDateAndDueTime()[0].id
        const notifiedValue = this.state.todos.todo.filter(todo => {
          if (todo.id === notifiedID) {
            todo.notified = !todo.notified;
          }
          return todo
        })

        const tempValue = Object.assign(this.state.todos, { todo: notifiedValue })
        this.setState({ todo: tempValue })
        window.localStorage.setItem("mytodos", JSON.stringify(tempValue));

        /*#################### Condition to set the notified flag back to false #####################*/
        //===== This condition is available just in case a user edit an already notified todo =====
        setTimeout(() => {
          const returnOginalValue = this.state.todos.todo.filter(todo => {
            if (todo.id === notifiedID) {
              if (todo.notified === true) {
                todo.notified = !todo.notified;
              }
            }
            return todo
          })
          const originalValue = Object.assign(this.state.todos, { todo: returnOginalValue })
          this.setState({ todo: originalValue })
          window.localStorage.setItem("mytodos", JSON.stringify(originalValue));
        }, 60000);

      }
    }
  }


  interval = 0;

  componentDidMount() {
    this.interval = setInterval(() => this.dateHandle(), 1000);
    this.interval = setInterval(() => this.timeHandle(), 1000);
    this.interval = setInterval(() => this.alertUser(), 1000);
    this.interval = setInterval(() => this.createNotification(), 1000);
    this.registerServiceWorker();
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    return (
      <Router>
        <div className="todo_wrapper">
          <Header firstName={this.state.todos.firstName} todos={this.state.todos.todo} avarta={this.state.todos.avarta} logOut={this.logOut} />
          {(this.state.todos.firstName === null || this.state.todos.firstName === "") ?
            <Route exact path="/">
              <HomePage firstName={this.state.todos.firstName} addName={this.addName} addAvatar={this.addAvatar} />
            </Route>
            :
            <>
              <Route exact path="/todos">
                <Todos
                  todo={this.state.todos.todo}
                  checkCompleted={this.checkCompleted}
                  delTodo={this.delTodo}
                  askNotificationPermission={this.askNotificationPermission}
                />
              </Route>

              <Route exact path="/todos/completed">
                <CompletedTodos todo={this.state.todos.todo} />
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
