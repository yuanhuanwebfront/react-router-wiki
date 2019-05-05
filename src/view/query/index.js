import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import CodeArea from "../../components/CodeArea";

let liStyle = {
    padding: '5px 15px',
    border: '1px solid #e1e1e1'
};

function commonPage(props){
    console.log(props);
    return <div className='margin-top-15'>
        <h2>当前的页面参数是{props.location.search}</h2>
    </div>
}

export default class QueryPage extends Component {

    render(){
        return <div>
            <CodeArea>
                通过在Link中添加seatch参数来添加查询参数
            </CodeArea>

            <ul className='margin-top-15'>
                <li className='inline' style={liStyle}>
                    <Link to={{pathname: '/query/first', search: '?id=1'}}>First</Link>
                </li>
                <li className='inline' style={liStyle}>
                    <Link to={{pathname: '/query/second', search: '?page=2'}}>Second</Link>
                </li>
            </ul>

            <div className='margin-top-15'>
                <Route path='/query' component={commonPage}></Route>
            </div>
        </div>
    }

}