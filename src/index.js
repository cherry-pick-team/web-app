import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import App from './components/App';
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

import {store, history} from './init-store-history';

ReactDOM.render(
  <Provider store={store}>
    <App>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route path="*" component={NotFoundPage}/>
        </div>
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);
