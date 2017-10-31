import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ClickBack from '../components/ClickBack';
import './Deliver.css';

//动态路由：当路由匹配不同路径的时候，加载的都是同一个组件，需要通过不同路径来作为参数加载不同的数据
class Deliverlist extends Component {
  render() {
    return (
      <div className="Deliverlist">
        <div className="Header">
           <ClickBack title={"投递记录"}/>
        </div>
    
        <div className="Content">
            <div className="tab">
              <IndexLink to="all" activeClassName="active" className="tab_b">全部</IndexLink>
              <Link to="face" activeClassName="active" className="tab_b">邀请面试</Link>
              
              <Link to="unsuit" activeClassName="active" className="tab_b">不合适</Link>
            </div>
        
        <ul class="list">
        {this.props.children}
        </ul>
        
      </div>
      </div>
    );
  }
}

export default Deliverlist;