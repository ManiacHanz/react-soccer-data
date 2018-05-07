import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './redux/store'
import { HashRouter } from 'react-router-dom'
import RouteConfig from './routers/index'

// import logo from './logo.svg';
// // import './App.less';
// import styles from './App.less'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <RouteConfig />
        </HashRouter>
      </Provider>
    )
  }
}

export default hot(module)(App)
