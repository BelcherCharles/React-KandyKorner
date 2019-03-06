import React, { Component } from 'react'

class CandyList extends Component {
    render() {
        return (
            <article>
                <h1>Candy Types</h1>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            {candy.name}
                             <span> of type </span>
                            {
                                this.props.candyTypes
                                    .find(candyType => candyType.id === candy.typeId)
                                    .name
                            }


                        </div>
                    )
                }
            </article>
        )
    }
}




export default CandyList