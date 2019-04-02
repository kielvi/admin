import React, { Component } from 'react';
import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
	usuarios: reducer
})

export default rootReducer;