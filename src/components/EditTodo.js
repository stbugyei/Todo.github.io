import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";


export class EditTodo extends Component {
    state = {
        todos: ""
    };


    componentDidMount() {
        const { todo, id } = this.props
        const toDo = todo.find((itm) => {
            return itm.id === id
        })
        this.setState({ todos: toDo })
    }

    //========= A function to edit selected todo =========
    handleClick = () => {
        this.props.editTodo(this.state.todos, this.props.id);
    };


    //========= An onChange for setting the todos state =========
    onChange = e => {
        const { name, value } = e.target;
        let editodo = { ...this.state.todos, [name]: value }
        this.setState({ todos: editodo })
    }


    render() {

        const { title } = this.state.todos

        return (

            <form className="form_content" onSubmit={(e) => e.preventDefault()}>

                <h3 style={{ margin: '25px 0px', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>Edit schedule</h3>

                <div className="Search_Submit">
                    <input
                        type="text"
                        name='title'
                        placeholder="+ Edit schedule here"
                        value={title || ''}
                        onChange={this.onChange}
                    />
                </div>

                <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto', marginBottom: '15px', marginTop: '5px' }}>
                    <button className="btn-add btn-add__annex" onClick={(e) => this.handleClick(e)}><i className="fas fa-plus"></i></button>
                </Link>

                <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto' }}>
                    <button className="btn-close btn-close__annex" ><i className="fas fa-times"></i></button>
                </Link>
            </form>
        );
    }
}

export default withRouter(EditTodo);
