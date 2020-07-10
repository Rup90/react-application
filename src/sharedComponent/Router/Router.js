import React, { Suspense, lazy } from 'react';

import {  BrowserRouter   as Router, Route, Switch  } from 'react-router-dom';

const App = lazy(() => import('../../App'));
const Home = lazy(() => import('../../CommonComponents/Home/Home'));
const Login = lazy(() => import('../../CommonComponents/LogIn/Login'));
const Registration = lazy(() => import('../../CommonComponents/Registretion/Registration'));
const ForgotPassword = lazy(() => import('../../CommonComponents/ForgotPassword/ForgotPassword'));

const RouterComponent = (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route  path="/app" component={App} />
                <Route  path="/Home" component={Home} />
                <Route  exact path="/" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </Suspense>
    </Router>
);

export default RouterComponent;