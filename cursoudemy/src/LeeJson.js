import React, { Component } from 'react';
import cars from './data/cars.json'


class CarItem extends Component {
    render() { 
        const { car } = this.props
        return (
            <li>
                <p><strong>Nombre : {car.name}</strong></p>
                <p><strong>Marca : {car.company}</strong></p>
            </li>
        );
    }
}
 




class LeeJson extends Component {
    render() { 
        return (
            <div>
                <ul>
                    {
                        cars.map(car => {
                            return(
                                <CarItem key={car.id} car={car}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default LeeJson;