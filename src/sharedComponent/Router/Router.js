import React, { Suspense, lazy } from 'react';

import {  BrowserRouter   as Router, Route, Switch  } from 'react-router-dom';

const App = lazy(() => import('../../App'));
const Home = lazy(() => import('../Home/Home'));
const Login = lazy(() => import('../LogIn/Login'));
const Registration = lazy(() => import('../Registretion/Registration'));
const ForgotPassword = lazy(() => import('../ForgotPassword/ForgotPassword'));

const RouterComponent = (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route  path="/app" component={App} />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </Suspense>
    </Router>
);

export default RouterComponent;