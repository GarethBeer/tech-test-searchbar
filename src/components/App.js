import React, { Component } from "react";
import SearchForm from "./SearchForm";

import GetLocation from "../services/getLocation";

import "../../src/App.css";
class App extends Component {
	constructor() {
		super();
		this.state = {
			city: "",
			results: []
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.city !== this.state.city) {
			GetLocation(this.state.city).then(data =>
				this.setState({
					results: data
				})
			);
		}
	};

	handleonInput = event => {
		this.setState({
			city: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<SearchForm onInput={this.handleonInput} details={this.state.results} />
			</div>
		);
	}
}

export default App;
