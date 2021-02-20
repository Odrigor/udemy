import React, { Component } from 'react';

class EventOnClick extends Component {
    
    handleClick(e) {
        alert('Hola, hemos detectado tu click al boton, estamos trabajado para entregarte la respuesta que buscas, por favor no esperes.')
    }
    
    render() { 
        return (
            <div>
                <h4>Eventos : </h4>
                <button onClick={this.handleClick}>Hi there!!!</button>
            </div>
        );
    }
}
 
export default EventOnClick;