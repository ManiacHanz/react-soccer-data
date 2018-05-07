import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
FastClick.attach(document.body)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
