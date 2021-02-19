import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Hello(props) {
    return <h2>{props.title}</h2>
}

class Text extends Component {
  render() { 
    return ( 
      <div>
        <p>{this.props.txt}</p>
        <p>{this.props.Numb}</p>
      </div>
     );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Run motherFucker"/>
      </header>
      <Text txt="esto esta mal xd" Numb='8'/>
    </div>
  );
}

export default App;
