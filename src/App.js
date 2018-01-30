import React, { Component } from 'react';
import './App.css';
import Articles from './components/Articles';
import MenuBar from './components/MenuBar';
require('dotenv').config();

class App extends Component {
  render() {    
    return (
      <div className="App">
        <MenuBar />
        <Articles />
      </div>
    );
  }
}

export default App;
