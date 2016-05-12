import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import {createStore} from 'redux'
import configureStore from './store/configureStore'

const store = configureStore();


store.dispatch({type:"SELECT_REDDIT", reddit:"My  reddit"})


render( <App myState={store.getState().selectedReddit} />,  document.getElementById('root') )
