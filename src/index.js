import App from './app.js';
import reducer from './redux/reducers/appReducers.js'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

//import reducers
let store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)

export default render;
