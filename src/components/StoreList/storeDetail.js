import React, { Component } from "react"

// import './employees.css'


export default class StoreDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const store = this.props.stores.find(s => s.id === parseInt(this.props.match.params.store.Id)) || {}
            // console.log(store)
        return (
            <section className="stores">
                <div key={store.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        <img src={store.image} className="icon--employee" />
                            {store.name}</h4>
                            <h5>{store.address}</h5>
                            <br></br>

                        {/* <a href="#"
                            onClick={() => this.props.fireEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Fire Employee</a> */}
                    </div>
                </div>
            </section>
        )
    }
}