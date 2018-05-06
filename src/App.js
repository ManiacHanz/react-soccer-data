import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.less';
import { Button } from 'antd-mobile'
import styles from './App.css'

console.log(styles)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type='primary'>123</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro abc">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={styles.bcd}>test text </p>
      </div>
    );
  }
}

export default App;
