import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const router = (
  <Provider store={store}>
    <App/>
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
