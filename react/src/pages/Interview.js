import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ClickBack from '../components/ClickBack';

class Interview extends Component {
    render() {
      return (
        <div className="Interview">
          <div className="Header">
             <ClickBack title={"投递记录"}/>
          </div>
      
          <div className="Content">
              <div className="tab">
                <IndexLink to="faced" activeClassName="active" className="tab_a">已面试</IndexLink>
               
                
                <Link to="willface" activeClassName="active" className="tab_a">将面试</Link>
              </div>
          
          <ul className="list">
          {this.props.children}
          </ul>
          
        </div>
        </div>
      );
    }
  }
  
  export default Interview