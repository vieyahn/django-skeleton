import React from 'react'


class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Initial data"
    }
  }
  componentWillMount() {
    $.get(this.props.location.pathname, (data) => {
      this.setState(data);
    });
  }

  componentDidMount() {
  }

  render() {
    console.log(this.api);
    return <h2>Name {this.state.hello}</h2>
  }
}

export default AboutComponent
