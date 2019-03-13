import React, { Component } from "react"
import candyImage from './candyImage.jpg'
import './candies.css'





export default class CandyDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const candy = this.props.candies.find(c => c.id === parseInt(this.props.match.params.candyId)) || {}
            // console.log(candy)
        return (
            <section className="candies">
                <div key={candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        <img src={candyImage} className="icon--candy" />
                            {candy.name}</h4>
                            <br></br>

                        <a href="#"
                            onClick={() => this.props.deleteCandy(candy.id)
                                            .then(() => this.props.history.push("/candies"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}