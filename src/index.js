import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from "./store/reducers/rootReducers";
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
