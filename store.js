import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import AppReducer from './reducers/AppReducer';

var initialState = {};

export const initStore = (initialState = initialState) => {
	return createStore(AppReducer, initialState, composeWithDevTools(applyMiddleware(
		thunkMiddleware,
	)));
}