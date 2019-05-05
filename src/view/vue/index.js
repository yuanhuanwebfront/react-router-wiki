import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function RouteWithSubRoutes(route) {
    return (
        <Route path={route.path}
            render={props => (
                <route.component {...props} routes={route.children} />
            )}
        />
    );
}

function base(){
    return <div>
        <h2>BASE</h2>
    </div>
}
function more(props){
    console.log(props);
    return <div>
        <h2>MORE</h2>
        <Link to={`${props.match.path}/child`}>child</Link>
        {
            props.routes.map(route => {
                return <RouteWithSubRoutes {...route}></RouteWithSubRoutes>
            })
        }
    </div>
}
function childPage(){
    return <div>
        <h2>childPage</h2>
    </div>
}

let RoutesConfig = [{
    path: '/vue/base',
    component: base
},{
    path: '/vue/more',
    component: more,
    children: [{
        path: '/vue/more/child',
        component: childPage
    }]
}];

export default class VueConfig extends Component {

    render(){
        let routeArr = RoutesConfig.map((route, i) => {
           return <RouteWithSubRoutes key={i} {...route} />
        });
        return <div>
            <h2>类似vue的路由配置</h2>
            <ul>
                <li className='inline'>
                    <Link to='/vue/base'>base页面</Link>
                    <Link to='/vue/more'>more页面</Link>
                </li>
                {routeArr}
            </ul>
        </div>
    }
}