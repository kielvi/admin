import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import './assets/css/bundle.css';

ReactDOM.render(
	<App />
, document.getElementById('root'));



if(module.hot) {
	module.hot.accept();
};
