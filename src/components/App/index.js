import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import './index.css';

import Login from '../Login/';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false
		}
	}


	render() {
		const { logged } = this.state;

		return (
			<Provider store={store}>
				<div className="App">
					{
						logged==false
							?
								<Login />
							:
								<div>INDEX</div>
					}
				</div>
			</Provider>
		);
	}
}


export default App;