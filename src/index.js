import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
