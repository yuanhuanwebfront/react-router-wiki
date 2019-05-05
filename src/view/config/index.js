import React, {Component} from 'react';
import {BrowserRouter  as Router, NavLink, Route} from 'react-router-dom';
import ParamChild from './paramChild';
import CodeArea from '../../components/CodeArea';
import './config.css'


export default class Config extends Component {

    render(){

        let baseRoute = this.props.match.path;

        return <div>
            <h2>带参数路由</h2>
            <ul className='margin-top-15 nav'>
                <li>
                    <NavLink activeClassName='active' to={`/config/first`}>First Page</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to={`/config/second`}>Second Page</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to={`/config/third`}>Third Page</NavLink>
                </li>
            </ul>
            
            <Route exact path={`/config/:id`} component={ParamChild}></Route>

            <CodeArea>
                带参数的路由定义是由两部分构成的，一个是Link组件，Link组件的链接应当是 url/(someParams)
                <br/>
                Link定义完成后，我们需要在Route组件中接收该参数，接收方法为 url/:参数名称
                <br/>
                在子组件中通过this.props.match中获取路由参数信息
            </CodeArea>


        </div>;
    }
}

