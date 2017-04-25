import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Router, Route, browserHistory} from 'react-router';

import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import rootReducer from './reducers';


let store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Index}/>
			<Route path="*" component={NotFound}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
