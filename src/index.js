import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RestoService from './services/service';
import RestoServiceContex from './components/RestoServiceContext/resto-service-context';
import store from './store';

import App from './components/App/App';
import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
    <RestoServiceContex.Provider value={restoService}>
      <App />
    </RestoServiceContex.Provider>
  </Provider>,

  document.getElementById('root')
);
