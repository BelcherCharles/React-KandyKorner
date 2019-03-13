import React, { Component } from "react";
import "./candies.css";

export default class CandyForm extends Component {
    // Set initial state
    state = {
        name: "",
        typeId: "",
    };

    // Update state whenever an input field is edited (USED ALMOST EVERY TIME A FORM IS IN REACT!!!!)
    handleFieldChange = evt => {
        console.log(evt)
        console.log(evt.target.value)
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewCandy = evt => {
        evt.preventDefault();
        if (this.state.candyName === "") {
            window.alert("Please enter a name");
        }
        else if (this.state.candyType = "") {
            window.alert("Please choose a type")
        } else {
            const newCandy = {
                name: this.state.candyName,
                typeId: parseInt(this.state.candyTypeId),
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.
                // employeeId: parseInt(this.state.employeeId)
            };

            console.log(newCandy)

            this.props
                .addCandy(newCandy)
                .then(() => this.props.history.push("/candies"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            placeholder="Candy Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="candyType">Candy Type</label>
                        <select
                            defaultValue=""
                            name="candyType"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select A Candy Type</option>
                            {this.props.candyTypes.map(ct => (
                                <option key={ct.id} id={ct.id} value={ct.id}>
                                    {ct.name}
                                </option>
                            ))}
                        </select>
                        <br></br>
                        <button
                            type="submit"
                            onClick={this.constructCandy}
                            className="btn btn-primary"
                        >
                            Add New Candy
          </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}