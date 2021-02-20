import React, { Component } from 'react';

class Froms extends Component {

    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const email = document.getElementById('name').value;

        console.log( {name, email} );
    }

    render() { 
        return (
            <div>
                <h4>Formularios : </h4>
                <form>
                    <p>
                        <label htmlFor='name'>Nombre : </label>
                        <input id='name' name='userName' placeholder='Introduce el nombre '/>
                    </p>
                    <p>
                        <label htmlFor='twitter'> Twitter : </label>
                        <input id="twitter" name="TwitterAccount" placeholder="Twitter" ref={inputElement => this.inputName = inputElement}/>
                    </p>
                    <button onClick={this.handleClick}> Enviar </button>
                </form>
            </div>
        );
    }
}
 
export default Froms;