import React, {Component} from 'react';

import CodeArea from '../../components/CodeArea';

export default class HomePage extends Component {

    render(){
        return <div>

            <h2>安装</h2>
            <p className='margin-top-15'>1. 安装 react-router-dom</p>
            <CodeArea>
                cnpm install react-router-dom
            </CodeArea>
            <p className='margin-top-15'>2. 引入React-router-rom </p>
            <CodeArea>
                'import BrowserRouter as Router, Route, Link  from "react-router-dom"'
            </CodeArea>

            <h2 className='margin-top-15'>router组件</h2>

            <p className='margin-top-15'>Router</p>
            <CodeArea>
                Router组件作为react-router的和核心，提供了两种路由模式，HashRouter, BrowserRouter
                所有的路由组件都应当被包裹在Router内部 而且，每次import路由组件都需要引入Router组件
            </CodeArea>

            <p className='margin-top-15'>Route</p>
            <CodeArea>
                Route组件作为路由展示组件，提供了两个属性  path: 用来匹配当前的路由 component: 匹配到路由地址后展示的组件
            </CodeArea>

            <p className='margin-top-15'>Switch</p>
            <CodeArea>
                Switch组件作为路由展示组件，Switch内部的组件只会渲染内部的匹配到的第一个Route组件
            </CodeArea>

            <p className='margin-top-15'>Link</p>
            <CodeArea>
                Link组件作为路由跳转组件，提供了一个to属性，用来作为路由跳转的链接
            </CodeArea>

        </div>;
    }

}

