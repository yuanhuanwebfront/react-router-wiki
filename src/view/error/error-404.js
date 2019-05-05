import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function notFound(){
    return <div>
        <h2>Not Found</h2>
    </div>
}

function normalPage(){
    return <div>
        Normal Page
    </div>
}

export default class ErrorPage extends Component {

    render() {
        return <div>
            <ul>
                <li>
                    <Link to='/404/normal'>正常页面</Link>
                </li>
                <li>
                    <Link to='/404/notFound'>404页面</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/404/normal' component={normalPage}></Route>
                <Route component={notFound}></Route>
            </Switch>
        </div>
    }

}