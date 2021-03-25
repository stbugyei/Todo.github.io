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

        const { title, date, time } = this.state.todos

        return (

            <form className="form_content" onSubmit={(e) => e.preventDefault()}>

                <h3 style={{ margin: '12px 0px 12px', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>Edit schedule</h3>

                <div className="Search_Submit">
                    {/* <input
                        type="text"
                        name='title'
                        placeholder="Edit schedule here"
                        value={title || ''}
                        onChange={this.onChange}
                    /> */}
                    {/* <div style={{ display: 'flex', justifyContent: 'space-beteween', width: '100%' }}>
                        <span style={{ marginRight: '10px', color: 'indigo', paddingTop:'10px' }}>Date:</span>
                        <input style={{ marginBottom: '15px' }}
                            type="datetime-local"
                            name="date"
                            value={date || ''}
                            onChange={this.onChange}
                        />
                    </div> */}

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div style={{ marginRight: 'auto', marginLeft: '0px' }}>
                            <span style={{ marginRight: '10px', color: 'indigo' }}>Date:</span>
                            <input
                                // type="datetime-local"
                                type="date"
                                name="date"
                                value={date || ''}
                                onChange={this.onChange}
                            />
                        </div>

                        <div style={{ marginRight: '0px', marginLeft: 'auto' }}>
                            <span style={{ marginRight: '10px', color: 'indigo' }}>Time:</span>
                            <input
                                // type="datetime-local"
                                type="time"
                                name="time"
                                value={time || ''}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    <textarea name='title' className="textarea" placeholder="Edit schedule here" cols="50" rows="6" onChange={this.onChange} value={title || ''}></textarea>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'rigth' }}>
                    <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto', marginBottom: '15px', marginTop: '5px' }}>
                        <button className="btn-add btn-add__annex" onClick={(e) => this.handleClick(e)}><i className="fas fa-plus"></i></button>
                    </Link>

                    <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto' }}>
                        <button className="btn-close btn-close__annex" ><i className="fas fa-times"></i></button>
                    </Link>
                </div>

            </form>
        );
    }
}

export default withRouter(EditTodo);
