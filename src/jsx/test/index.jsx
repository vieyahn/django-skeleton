import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Test extends React.Component {
  render() {
    return (
      <div>
      Hello from Test component!
      </div>
    )
  }
}

ReactDOM.render(<Test/>, document.querySelector("#test"));
