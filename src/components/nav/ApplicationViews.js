import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from '../CandyList/candyList'
import StoreLocations from '../StoreList/storeLocations'
import EmployeeList from '../EmployeeList/employeeList'


class ApplicationViews extends Component {
    StoreLocations = [
        { id: 1, name: "Store 1", address: "123 Somewhere St" },
        { id: 2, name: "Store 2", address: "45 St. Elsewhere Rd." },
        { id: 3, name: "Store 3", address: "21 Jump Street" }
    ]
    Employees = [
        { id: 1, name: "Freddy K." },
        { id: 2, name: "Jason V." },
        { id: 3, name: "PennyWise" },
        { id: 4, name: "Predator" }
    ]
    CandyTypes = [
        { id: 1, name: "Gummy shits" },
        { id: 2, name: "Suckers for suckers" },
        { id: 3, name: "Sugar-Free Trash" },
        { id: 4, name: "Choco Overload" }
    ]
    Candies = [
        { id: 1, typeId: 1, name: "Gummy Worms" },
        { id: 2, typeId: 1, name: "Gummy Bears" },
        { id: 3, typeId: 1, name: "Sour Patch Kids" },
        { id: 4, typeId: 2, name: "Dum-Dums" },
        { id: 5, typeId: 2, name: "Blow-Pops" },
        { id: 6, typeId: 2, name: "Tootsie-Pops" },
        { id: 7, typeId: 3, name: "Salt-Water Taffy" },
        { id: 8, typeId: 4, name: "Reese's Pieces" },
        { id: 9, typeId: 4, name: "M&Ms" },
        { id: 10, typeId: 4, name: "Hershey Kisses" }
    ]


    state = {
        stores: this.StoreLocations,
        employees: this.Employees,
        candyTypes: this.CandyTypes,
        candies: this.Candies,
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <StoreLocations stores={this.state.stores} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </div>
        );
    }
}

export default ApplicationViews