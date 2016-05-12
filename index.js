import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();


// store.dispatch({type:"SELECT_REDDIT", reddit:"My  reddit"})
// store.dispatch({type:"REFRESH_REDDIT", reddit:"My  reddit"})


render(
	<Provider store={store}>
		<App />
	</Provider> ,
  document.getElementById('root') )
