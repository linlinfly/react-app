import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ClickBack from '../components/ClickBack';

class Collect extends Component {
    render() {
      return (
        <div className="Collect">
          <div className="Header">
             <ClickBack title={"我的收藏"}/>
          </div>
      
          <div className="Content">
              
          
          <ul className="list">
          <li className="welcome">
               还没有收藏的职位~
              
			  </li>
          {this.props.children}
          </ul>
          
        </div>
        </div>
      );
    }
  }
  
  export default Collect