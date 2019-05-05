import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../view/home';
import Config from '../view/config';
import RedirectPage from '../view/redirect';
import NoPermission from '../view/error/noPermission';
import errorPage from '../view/error/error-404';
import VueConfig from '../view/vue/index';
import QueryPage from '../view/query/index';



class MainView extends Component {

    render(){
        return <div className={`view-content`}>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/config' component={Config}></Route>
                <Route path='/redirect' component={RedirectPage}></Route>
                <Route exact path='/noPermission' component={NoPermission}></Route>
                <Route path='/404' component={errorPage}></Route>
                <Route path='/vue' component={VueConfig}></Route>
                <Route path='/query' component={QueryPage}></Route>
            </Switch>
        </div>
    }
}

export default MainView;