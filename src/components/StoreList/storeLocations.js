import React, { Component } from 'react'

class StoreLocations extends Component {
    render() {
        return (
            <article>
                <h1>Store List</h1>
                {this.props.stores.map((singleStore) => {
                    return <p key={singleStore.id}>{singleStore.name}
                    {singleStore.address}</p>
                })}
            </article>
        );
    }
}

export default StoreLocations