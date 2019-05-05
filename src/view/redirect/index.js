import React, {Component} from 'react';
import {BrowserRouter  as Router, Route, Redirect} from 'react-router-dom';

function hasPermission(){
    return <div>
        <p>可以进入这个页面</p>
        <p>你拥有该权限</p>
    </div>
}

export default class RedirectPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            userPassWord: '',
            canEnterPage: false,
            hasPermission: false
        }
    }

    render(){
        
        //  <Route path="/redirect/hasPermission" component={hasPermission}></Route>
        let directivePage = '';
        if(this.state.canEnterPage){
            directivePage = <Route path={`/redirect/hasPermission`} component={hasPermission}></Route>
        }

        if(this.state.hasPermission){
            directivePage = <Redirect to={`/noPermission`}></Redirect>
        }


        return <div>
                <input type='text' placeholder='请输入密码' onInput={this.setPassword}></input>
                <button onClick={this.jumpPage}>跳转页面</button>
                <br></br>
                <br></br>
                <br></br>
                {directivePage}
            </div>
    }

    setPassword = (event) => {
        this.setState({
            userPassWord: event.target.value
        })
    }

    jumpPage = (event) => {
        if(this.state.userPassWord){
            this.setState({
                canEnterPage: true
            })
            this.props.history.push('/redirect/hasPermission');
        }else{
            this.setState({
                hasPermission: true
            })
        }
    }



}