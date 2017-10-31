import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './font/iconfont.css';
import './App.css';

//动态路由：当路由匹配不同路径的时候，加载的都是同一个组件，需要通过不同路径来作为参数加载不同的数据
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">拉勾网</div>
        {this.props.children}
        <div className="Footer">
              <IndexLink to="/" activeClassName="active"><i className="iconfont icon-fangzi1"></i>职位</IndexLink>
              <Link to="/user" activeClassName="active"><i className="iconfont icon-fangdajing"></i>搜索</Link>
              
              <Link to="/login" activeClassName="active"><i className="iconfont icon-gerenzhongxinxia-copy"></i>我的</Link>
        </div>
      </div>
    );
  }
}

export default App;
