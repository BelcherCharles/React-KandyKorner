import React, { Component } from "react"

import './employees.css'





export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}
            console.log(employee)
        return (
            <section className="employees">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        <img src={employee.image} className="icon--employee" />
                            {employee.name}</h4>
                            <br></br>

                        <a href="#"
                            onClick={() => this.props.fireEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Fire Employee</a>
                    </div>
                </div>
            </section>
        )
    }
}