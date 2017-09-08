import React, { Component } from 'react';
import './styles.css';
import Search_Bar from '../../Containers/Search_Bar'
import Weather from '../../Containers/Weather'
import logo from '../../logo.png'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo"/>
        </header>
          <Search_Bar/>
          <Weather/>
      </div>
    );
  }
}

export default App;
