import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './objects/App';
import User from './objects/User';
import Search from './objects/Search';
import searchProject from './objects/searchProjects';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
            <Route path="project/:querryString" component={searchProject}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));


