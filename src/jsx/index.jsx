require("../../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>
        <p>This is a simple react component</p>
				<p><a className="btn btn-primary btn-lg">Learn more</a></p>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"));
