import React,{Component} from 'react';
import axios from 'axios';
import {Link,IndexLink} from 'react-router';
import {browserHistory} from 'react-router';
import './FrontLogin.css';


class FrontLogin extends Component{
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
				    <input ref="username" type="text" className="form-usename"  placeholder="已验证手机/邮箱" />		
					<div className="psd">		  				    
				    <input ref="pwd" type={this.state.type} className="form-psd"  placeholder="密码" />
				    <i className={this.state.name} onClick={this.handleChange}></i>
					</div>
				  </div>
				  <button onClick={this.handleSubmit} className="btn-submit">登录</button>
				  <div className="regist_text">还没账号?</div>
				  <Link href="/Register" className="btn-regist">注册</Link>
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
		  sessionStorage.setItem("user",username);
          browserHistory.push('Login')
       })
	}
}
export default FrontLogin