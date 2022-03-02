import logo from './logo.svg';
import './App.css'; 
import Home from './components/Home';
import Navbar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {
  state ={
    bootcamp: 'Rookies'
  }
  render(){
    return (
      <div className="App">
         <Navbar />
        <Home bootcamp={this.state.bootcamp}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
