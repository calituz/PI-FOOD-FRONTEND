import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))
);

export default store;