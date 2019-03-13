import React, { Component } from 'react'
import { Link } from "react-router-dom";
import candyImage from './candyImage.jpg'
import './candies.css'

export default class CandyList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="addCandyButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/candies/new")
                        }
                        }>
                        Add New Candy
                    </button>
                </div>
                <h1>Candy Types</h1>
                <article className="candies">
                    {
                        this.props.candies.map(candy =>
                            <div key={candy.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={candyImage} alt="" className="icon--candy" />
                                        <Link className="nav-link" to={`/candies/${candy.id}`}>{candy.name}</Link>
                                        {/* {candy.name} */}
                                        <span> of type </span>
                                        {
                                            this.props.candyTypes
                                                .find(candyType => candyType.id === candy.typeId)
                                                .name
                                        }

                                        <br></br>
                                        <a href="#"
                                            onClick={() => this.props.deleteCandy(candy.id)}
                                            className="card-link">Remove From Inventory</a>
                                    </h5>
                                </div>
                            </div>

                        )
                    }
                </article>
            </React.Fragment>
        )
    }
}

