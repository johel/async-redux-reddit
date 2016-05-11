import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import {createStore} from 'redux'
import {selectedReddit} from './reducers'


const store = createStore(selectedReddit);
console.log('hey');
store.dispatch({type:"SELECT_REDDIT", reddit:"My custom reddit"})


render( <App myState={store.getState()} />,  document.getElementById('root') )
