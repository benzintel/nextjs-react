import {createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import AppReducer from './reducers/AppReducer';

// create a makeStore function
const makeStore = context => createStore(AppReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: false});
