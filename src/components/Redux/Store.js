import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Reducers} from './Reducers';

const middleware = [thunk];
export const store = createStore(Reducers, applyMiddleware(...middleware));
