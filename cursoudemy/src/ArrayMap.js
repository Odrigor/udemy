import React, { Component } from 'react';

class ArrayMap extends Component {
    render() {
        const numbers = [1,1,4,3,5,2]

        return (
            <div>
                {numbers.map( (n,i) => { return <p key={i}> soy el numero {n}</p>})}
            </div>
        );
    }
}
 
export default ArrayMap;