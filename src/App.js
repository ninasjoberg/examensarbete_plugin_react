/*global chrome*/
import React, { Component } from 'react';
import apple from './apple.jpg';
import './App.css';


class App extends Component {

	state = {
		message: '',
		ingredients: [],
	}

	componentWillMount(){
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(
			  tabs[0].id,
			  { greeting: 'hello' },
				(response) => { //arrowfunction isf en vanlig funktion gör att this är komponenten o inte window
				this.setState({ingredients: response})			  }
			);
		});
	}


	render() {

		let ingredientsList;

		if (this.state.ingredients) {
			ingredientsList = this.state.ingredients.map((item) => {
				return <li>{item.amount[0]}{item.type}{item.name}</li>
			})

		}

		return (
			<div className="App">
				<header className="App-header">
					<img src={apple} className="App-logo" alt="logo" />
					<h1 className="App-title">Näringingsberäknaren:</h1>
				</header>
				<h3>Ingredienser</h3>
				{this.state.ingredients && <ul>{ingredientsList}</ul>}
			</div>
		);
	}
}

export default App;



