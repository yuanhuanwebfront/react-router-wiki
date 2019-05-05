import React, {Component} from 'react';
import './index.css';

export default class CodeArea extends Component {

    render(){
        return <pre className={'code-area'}>
            {this.props.children}
        </pre>;
    }

}