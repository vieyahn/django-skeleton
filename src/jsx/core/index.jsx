require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css")
require("../../../node_modules/font-awesome/css/font-awesome.css")
require("../main.css")

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Core extends React.Component {
  render() {
    var res = $.post('/');
    console.log(res);
    return (
      <div>
      Hello, World!
      </div>
    )
  }
}

export default Core
