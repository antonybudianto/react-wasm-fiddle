import React, { Component } from 'react';
import Wasm from 'react-wasm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Wasm url="./add.wasm">
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return "An error has occurred";

              const { instance } = data;
              return <div>1 + 2 = {instance.exports.add(1, 2)}</div>;
            }}
          </Wasm>
        </header>
      </div>
    );
  }
}

export default App;
