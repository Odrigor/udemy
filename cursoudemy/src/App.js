import React, { Component } from 'react';
import ArrayMap from './ArrayMap'
import LeeJson from './LeeJson'

class ComponenteA extends Component {
  render() { 
    return ( 
      <div>
        soy el componente A
      </div>
     );
  }
}

class ComponenteB extends Component {
  render() { 
    return ( 
      <div>
        soy el componente B
        <ArrayMap/>
      </div>
     );
  }
}


class App extends Component {
  constructor(){
    super()
    this.state = {mostrarA: false}
  }
  render() { 
    return ( 
      <div>
        Conditional Rendering
        {this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>}

        <LeeJson></LeeJson>
      </div>
    );
  }
}
 

export default App;
