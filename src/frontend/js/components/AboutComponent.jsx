import React from 'react'
import 'whatwg-fetch'


class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Initial data"
    }
  }
  componentDidMount() {
    $.get(this.props.location.pathname, (data) => {
      this.setState(data);
    });
  }
  render() {
    return <h2>Name {this.state.hello}</h2>
  }
}

export default AboutComponent
