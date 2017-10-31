import React,{Component} from 'react';
import axios from 'axios';
import {Link,IndexLink} from 'react-router';
import {browserHistory} from 'react-router';
import './Login.css';

class Login extends Component{
    constructor(){
        super();
       this.state={
           login:false,
           user:null
       } ;
       this.outlogin = this.outlogin.bind(this);
    }
    outlogin(){
        sessionStorage.setItem("user",'');
        this.setState({
            login:false,
            user:null
        })

    }
    componentWillMount(){
        let mssg = sessionStorage.getItem("user");
        if(mssg){
            this.setState({
                login:true,
                user:mssg
            });
        }
    }
  	render(){
          let login = this.state.login ?
          (<div className="haslogin center">
          <Link className="jianli"> 简历&gt;</Link>
          <div className="headcon">
             <img  className="headpic" src="http://static.lagou.com/images/myresume/default_headpic.png"/>
          </div>
          <div className="name">{this.state.user}</div>
      </div>):
       (<div className="nologin center">
       <Link className="loginbut" href="/frontLogin" target="_self">登录 / 注册</Link>
   </div>)
   			let outlogin = this.state.login ? (<div className='outlogin' onClick={this.outlogin}>退出登录</div>) : '';
               
  		return(
  			  <div id="content">
        
        <div className="logininfo">
                       
                {login}
                    </div>
        
        
        
        <div className="buttons">
            
            <Link className="button deliver" href="/Deliverlist">
                <span>投递</span>
                
                
            </Link>
            <Link className="button interview" href="/Interview">
            <span>面试</span>

            </Link>
            
            <Link className="button invitation" href="/Invite">
                <span>邀约</span>
                            </Link>
            
             <Link className="button collect" href="/Collect">
                <span>邀约</span>
                            </Link>
        </div>
        {outlogin}
            </div>
  		)
  	
  }
  }

export default Login