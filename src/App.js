/*global chrome*/
import React, { Component } from 'react';
import TextArea from './Components/TextArea';
import './App.css';


class App extends Component {

	state = {
		message: '',
		ingredients: [],
		counter: 1,
	}

	componentDidMount(){
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(
			  	tabs[0].id,
			  	{ type: 'reactInit' },
				(response) => { //arrowfunction isf en vanlig funktion gör att this är komponenten o inte window
					this.setState({ingredients: response})
				}
			);
		});
	}


	render() {

		const ingString = this.state.ingredients.map((item) => {
			return `${item.amount ? item.amount : ''} ${item.type ? item.type : ''} ${item.name ? item.name : ''}`;
		});


		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Näringingsberäknaren:</h1>
				</header>
				<div className="ingredients-container">
					<h3>Ingredienser</h3>
					<div>
						{this.state.ingredients.length && <TextArea ingredients={ingString ? ingString.join('\n') : 'loading..'}/>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;



