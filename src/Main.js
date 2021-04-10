import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import HomePage from "./components/pages/HomePage";
import uuid from "uuid";
import "./App.css";
import { EditTodo } from "./components/EditTodo";
import CompletedTodos from "./components/CompletedTodos";



class Main extends Component {

    state = {
        todos: window.localStorage.getItem('mytodos') ? JSON.parse(window.localStorage.getItem('mytodos')) :
            {
                todo: [],
                firstName: "",
                avarta: "",
                email: "stbugyei@yahoo.co.uk",
            },
        user: window.localStorage.getItem('appUsers') ? JSON.parse(window.localStorage.getItem('appUsers')) : [],
        curTime: null,
        curDate: null,
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

    //========== Function to add email to todos =======
    addEmail = userEmail => {
        const CurrentUserEmail = Object.assign(this.state.todos, { email: userEmail })
        this.setState({ CurrentUserEmail })
        window.localStorage.setItem("mytodos", JSON.stringify(CurrentUserEmail));
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
        let presentDay = ('0' + dateNow.getDate()).substr(-2);
        let formatedDateNow = dateNow.getFullYear() + "-" + monthNumber[dateNow.getMonth()] + "-" + presentDay;
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

    //========== Email notification template ==========
    emailTemplate =
        `<div>
            <p>Hello ${this.state.todos.firstName},</p>
            <p>You have a due schedule on your Todolist.</p>
                <p>Kind regards,</p>
                <p>STBUGYEI &#128578;</p>
        </div>`

    //========== Email notification function ==========
    sendEmailWithSendInBlue = () => {

        const url = 'https://api.sendinblue.com/v3/smtp/email';
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': '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'
            },
            body: JSON.stringify({
                sender: { name: 'Todolist', email: 'stbugyei@yahoo.co.uk' },
                to: [{ email: this.state.todos.email, name: this.state.todos.firstName }],
                textContent: (this.emailTemplate).replace(/\s+/g, " ").trim(),
                subject: 'A due schedule'
            })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

    }


    //========== Function to create notification  ==========
    createNotification = () => {
        let allTrue = this.state.todos.todo.some(ticked => ticked.notified === false && ticked.date === this.state.curDate && ticked.time === this.state.curTime)
        let img = this.state.todos.avarta;
        let text = 'Hello! Your schedule"' + this.trancateText(this.dueTitle()) + '" is due.';
        let vibration = [100, 50, 100];

        if (allTrue === true) {
            if (Notification.permission === 'granted') {
                // navigator.serviceWorker.ready.then(function (registration) {
                navigator.serviceWorker.getRegistration().then(function (registration) {
                    const options = { body: text, icon: img, vibrate: vibration };
                    registration.showNotification('TodoList', options);
                });

                this.sendEmailWithSendInBlue();

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

    redirectToTodos = () => {
        const { history } = this.props;
        let myName = this.state.todos.firstName
        let myEmail = this.state.todos.email
        if ((myName !== null || myName !== "") || (myEmail !== null || myEmail !== "")) {
            if (history) {
                history.push("/todos");
            }
        } if( (myName === null || myName === "") || (myEmail === null || myEmail === "") ) {
            if (history) {
                history.push("/");
            }
        }
    }

    interval = 0;

    componentDidMount() {
        this.interval = setInterval(() => this.dateHandle(), 1000);
        this.interval = setInterval(() => this.timeHandle(), 1000);
        this.interval = setInterval(() => this.alertUser(), 1000);
        this.interval = setInterval(() => this.createNotification(), 1000);
        this.redirectToTodos()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <>
                <div className="todo_wrapper">
                    <Header firstName={this.state.todos.firstName} todos={this.state.todos.todo} avarta={this.state.todos.avarta} logOut={this.logOut} />

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

                    <Route exact path="/">
                        <HomePage firstName={this.state.todos.firstName} addName={this.addName} addAvatar={this.addAvatar} addEmail={this.addEmail}/>
                    </Route>

                </div>
            </>
        );
    }
}

export default withRouter(Main);
