import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import BaseComponent from './components/BaseComponent.jsx'
import AboutComponent from './components/AboutComponent.jsx'
import './csrf.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={BaseComponent}>
      <Route path="about" component={(router) => (<AboutComponent {...router} />)} />
    </Route>
  </Router>
), document.getElementById("react-app"))
