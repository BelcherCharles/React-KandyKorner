import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './employees.css'

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Hire Employee
                    </button>
                </div>
                    <h2>Employee List</h2>
                        <article className="employees">
                    {
                        this.props.employees.map(employee =>
                            // console.log(employee)
                            <div key={employee.id} className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <img src={employee.image} className="icon--employee" />
                                        <Link className="nav-link" to={`/employees/${employee.id}`}>{employee.name}</Link>

                                    </h4>
                                </div>
                            </div>
                        )
                    }
                </article>
            </React.Fragment>
        );
    }
}

