import React, {Component} from 'react';
import {BrowserRouter  as Router, NavLink} from 'react-router-dom';
import RouterConfig from '../router';
import './index.css';

class HeadNav extends Component {

    render(){

        let domList = RouterConfig.map(item => {
            return <li className={'center'} key={item.path}>
             <NavLink exact={item.path == '/'} activeClassName='active' to={item.path}>{item.name}</NavLink> 
            </li>
        });

        return <ul className={'top-nav'}>
            {domList}
        </ul>



    }

}

export default HeadNav;