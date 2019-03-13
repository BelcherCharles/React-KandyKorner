import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class StoreLocations extends Component {
    render() {
        return (
            <article>
                <h1>Store List</h1>
                {this.props.stores.map((singleStore) => {
                    return (
                        <section>
                        <Link className="nav-link" to={`/stores/${singleStore.id}`}>{singleStore.name}</Link>
                        <p>{singleStore.address}</p>
                        </section>

                            )
                        }
                    )
                }
            </article>
        )
    }
}