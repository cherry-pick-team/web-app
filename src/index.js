import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import rootReducer from './reducers';


let store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Index}/>
				<Route path="*" component={NotFound}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
