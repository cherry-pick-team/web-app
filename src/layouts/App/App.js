import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Index from '../Index/Index';
import Auth from '../Auth/Auth';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="auth" component={Auth}/>
        <Route path="register" component={Register}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

export default App;