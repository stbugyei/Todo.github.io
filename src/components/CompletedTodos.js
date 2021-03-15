import React from 'react'
import { Link, useHistory } from "react-router-dom";

const CompletedTodos = (props) => {

    const history = useHistory();

    const { todo } = props

    if (!(todo && Object.keys(todo).length)) {
        return (
            <div className="loader" style={{ width: "100%", animation: 'fade 1s' }}>
                <Link to="/todos">
                    <div style={{ padding: '10px', marginBottom: '10px', borderBottom: '1px solid #ccc', color: 'indigo', textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)', fontFamily: 'Poppins, sans-serif', display: 'flex', justifyContent: 'space-between' }}>
                        <h3 className="schedule"><i className="fas fa-angle-double-left"></i> Back To Current Schedule</h3>
                    </div>
                </Link>
                <h2 style={{ textAlign: 'left', padding: '15px' }}>Sorry <span role="img" aria-label="hugging face">😎</span>, You Haven't  Completed Any Schedule.
                </h2>
            </div>
        )
    }

    const FilteredTodos = todo.filter(name => name.completed === true);

    if (!(FilteredTodos && Object.keys(FilteredTodos).length)) {
        return (
            <div className="loader" style={{ width: "100%", animation: 'fade 1s' }}>
                <Link to="/todos">
                    <div style={{ padding: '10px', marginBottom: '10px', borderBottom: '1px solid #ccc', color: 'indigo', textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)', fontFamily: 'Poppins, sans-serif', display: 'flex', justifyContent: 'space-between' }}>
                        <h3 className="schedule"><i className="fas fa-angle-double-left"></i> Back To Current Schedule</h3>
                    </div>
                </Link>
                <h2 style={{ textAlign: 'left', padding: '15px' }}>Sorry <span role="img" aria-label="hugging face">😎</span>, You Haven't  Completed Any Schedule.
                </h2>
            </div>
        )
    }


    const completedCard = FilteredTodos.map(title => {
        return (
            <div className="todo_item" style={{
                backgroundColor: "#e3e9ff",
            }} key={title.id}>
                <div> {title.title}</div>
            </div>
        )
    })

    return (
        <>

            <div style={{ padding: '10px', marginBottom: '10px', borderBottom: '1px solid #ccc', color: 'indigo', textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)', fontFamily: 'Poppins, sans-serif', display: 'flex', justifyContent: 'space-between' }}>
                <h3 className="schedule">My Completed Schedule</h3>

                {/* <Link to="/todos" style={{ padding: '10px', color: 'indigo', textShadow: 'rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 1px 2px', fontSize:'18px', fontWeight: 'bold' }}>
                    <span> <i className="fas fa-angle-double-left"></i> Back To Current Schedule</span>
                </Link> */}

                <button className="btn-completed__mobile" onClick={() => history.push("/todos")}> <i className="fas fa-arrow-left"></i></button>

            </div>

            {completedCard}
        </>
    )
}

export default CompletedTodos
