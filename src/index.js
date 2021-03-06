import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App.js'
import * as serviceWorker from './serviceWorker'

import './fonts/Gotham-Ultra.otf'
import './fonts/Gotham-Bold.otf'
import './fonts/Gotham-Medium.otf'
import './fonts/Gotham-Thin.otf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
