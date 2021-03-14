import React, { Component } from 'react'

export class ProgressIndicator extends Component {

    state = {
        totalTodos: "0",
        todosCompleted: "0",
        printTodosCompleted: "0"
    };


    getStyle = () => {
        if (this.state.todosCompleted) {
            return {
                width: (this.state.todosCompleted) + '%',
                padding: '10px',
                opacity: '1',
                // dataDone: this.state.todosCompleted
            };
        }
    };


    dataProgress = () => {
        let todos = this.props.todos.length
        if (todos !== null && todos !== undefined) {
            this.setState({ totalTodos: todos })
        }
    }

    completedTodos = () => {
        let todos = this.props.todos
        let selectedItem = [];
        if (todos !== null && todos !== undefined) {
            todos.forEach(itm => {
                if (itm.completed) {
                    selectedItem.push(itm)
                }
                if (selectedItem.length !== null && selectedItem !== undefined) {
                    let percentageLength = parseInt(((selectedItem.length) / (this.state.totalTodos) * 100))

                    this.setState({ todosCompleted: percentageLength })
                    this.setState({ printTodosCompleted: selectedItem.length })
                }
            })
        }

    }

    resetTodosCompleted = () => {
        if (this.state.totalTodos === 0) {
            let m = parseInt(0)
            this.setState({ todosCompleted: m })
            this.setState({ printTodosCompleted: m })
        }
    }

    componentDidMount() {
        setInterval(() => { this.dataProgress(); this.completedTodos(); this.resetTodosCompleted() }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.dataProgress(), this.completedTodos(), this.resetTodosCompleted())
    }


    render() {

        return (
            <div className="progress">
                <span style={{ position: 'absolute', right: '0', top: '0', padding: '4px', color: 'indigo', textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)' }}>{this.state.printTodosCompleted} of {this.state.totalTodos} completed</span>
                <div className="progress-done" style={this.getStyle()}>{this.state.todosCompleted}%</div>
            </div>
        )
    }
}

export default ProgressIndicator
