import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Login from './';

import * as actions from '../../actions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
