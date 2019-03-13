import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from '../authentication/login'
import CandyForm from '../CandyList/candyForm'
import CandyList from '../CandyList/candyList'
import CandyDetail from '../CandyList/CandyDetail'
import StoreLocations from '../StoreList/storeLocations'
import StoreDetail from '../StoreList/storeDetail'
import EmployeeList from '../EmployeeList/employeeList'
import EmployeeDetail from '../EmployeeList/employeeDetail'
import EmployeeForm from '../EmployeeList/employeeForm'
import candyAPIManager from '../../modules/candyAPIManager'


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    addCandy = candy =>
        candyAPIManager.postCandy(candy)
            .then(() => candyAPIManager.getAllCandies())
            .then(candies =>
                this.setState({
                    candies: candies
                })
            )

    deleteCandy = id => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/candies`))
            .then(e => e.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }

    addEmployee = employee =>
        candyAPIManager.postEmployee(employee)
            .then(() => candyAPIManager.getAllEmployees())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );

    fireEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    componentDidMount() {
        const newState = {};
        candyAPIManager.getAllEmployees()
            .then(parsedEmployees => {
                newState.employees = parsedEmployees;
                return candyAPIManager.getAllLocations();
            })
            .then(parsedStores => {
                newState.stores = parsedStores;
                return candyAPIManager.getAllCandies();
            })
            .then(parsedCandies => {
                newState.candies = parsedCandies;
                return fetch("http://localhost:5002/CandyTypes")
            })
            .then(types => types.json())
            .then(parsedTypes => {
                newState.candyTypes = parsedTypes
                this.setState(newState)
            })
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" component={Login}
                />
                <Route exact path="/locations" render={(props) => {
                    return <StoreLocations stores={this.state.stores} />
                }} />
                <Route path="/:locationId(\d+)" render={(props) => {
                    return <StoreDetail {...props} stores={this.state.stores} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    if(this.isAuthenticated()) {
                    return <CandyList {...props}  candies={this.state.candies} candyTypes={this.state.candyTypes}/>
                }   else {
                    return <Redirect to="/" />
                }
            }} />
                <Route path="/candies/new" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <CandyForm {...props}
                        addCandy={this.addCandy}
                        candies={this.state.candies}
                        candyTypes={this.state.candyTypes} />
                }   else {
                    return <Redirect to="/" />
                }
            }} />
                <Route path="/candies/:candyId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <CandyDetail {...props} deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }   else {
                    return <Redirect to="/" />
                }
            }} />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <EmployeeList {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                }   else{
                    return <Redirect to="/" />
                }
            }} />
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees} />
                }   else {
                    return <Redirect to="/" />
                }
            }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <EmployeeDetail {...props} employees={this.state.employees} fireEmployee={this.fireEmployee} />
                }   else {
                    return <Redirect to="/" />
                }
            }} />
                <Route path="/search" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <form type="text" name="title" value={this.state.title}
                        onChange={this.handleChange.bind(this)} />
                }   else {
                    return <Redirect to="/" />
                }
            }} />
            </div>
        );
    }
}

export default ApplicationViews