import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import BaseComponent from './components/views/core/BaseComponent.jsx';
import AboutComponent from './components/views/core/AboutComponent.jsx';
import jQuery from 'jQuery';

const csrfCookieName = window.csrfCookieName || 'sc';

// setup jquery for CSRF tokens
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

jQuery.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader('X-CSRFToken', getCookie(csrfCookieName));
    }
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={BaseComponent}>
      <Route path="about" component={(router) => (<AboutComponent {...router} />)} />
    </Route>
  </Router>
), document.getElementById("react-app"));
