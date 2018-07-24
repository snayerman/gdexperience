import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppContainer from './Containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
   <Provider store={configureStore()}>
      <AppContainer />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
