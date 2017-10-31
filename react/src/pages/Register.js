import React,{Component} from 'react';
import axios from 'axios';
import {Link,IndexLink} from 'react-router';
import {browserHistory} from 'react-router';
import './Register.css';


class Register extends Component{
    constructor(){
		super();
		this.state={
			name:"eye",
			type:"password"
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		return (
			<div className="radial">
			   <div className="login">
				  <div className="form-group">				  
				    <input ref="username" type="text" className="form-usename"  placeholder="手机号" />	
                    <input ref="confirm" type="text" className="form-confirm"  placeholder="请证明你不是机器人" />
                    <img src="http://passport.lagou.com/vcode/create?from=register&refresh=1507636134490"/><a className="change">看不清楚，<em>换一张</em></a>
                    <input ref="msg" type="text" className="form-msg"  placeholder="短信验证码" />	
					<div className="psd">				  				    
				    <input ref="pwd" type={this.state.type} className="form-psd"  placeholder="请输入6-16位密码" />
				    <i className={this.state.name} onClick={this.handleChange}></i>
					</div>
				  </div>
				  <button onClick={this.handleSubmit} className="btn-submit">注册</button>
				  <div className="regist_text">已有账号?</div>
				  <Link href="/FrontLogin" className="btn-log">登录</Link>
                  <div className="regist_text">点击注册，即代表您同意<a href="#">《拉勾用户协议》</a></div>
			   </div>
		    </div>
			)
	}
	handleChange(){
		if(this.state.name=="eye"){
			this.setState({
				name:"eye openeye",
				type:"text"
			})
		}
		else if(this.state.name=="eye openeye"){
			this.setState({
				name:"eye",
				type:"password"
			})
		}
	}
	handleSubmit(){
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if (!username || !pwd) {
			return
		};

       axios.post('/api/login',{
       	 username,pwd
       }).then(function(res){
           console.log(res)
         //1：直接改变hash值
          //window.location.hash = '/';
          //2:使用browserHistory
          browserHistory.push('/')
       })
	}
}
export default Register
