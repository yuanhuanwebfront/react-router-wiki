import React, {Component} from 'react';
import './config.css'


export default class First extends Component {

    render(){

        return <div>
            <h2 className="margin-top-15">当前参数为 {this.props.match.params.id}</h2>
        </div>;
    }
}

