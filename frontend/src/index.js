import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { RootCmp } from './root-cmp';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RootCmp />
    </React.StrictMode>
  </Provider>
)
