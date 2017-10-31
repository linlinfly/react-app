import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ClickBack from '../components/ClickBack';

class Invite extends Component {
    render() {
      return (
        <div className="Invite">
          <div className="Header">
             <ClickBack title={"拉勾网"}/>
          </div>
      
          <div className="Content">
              
          
          
          {this.props.children}
         
          
        </div>
        </div>
      );
    }
  }
  
  export default Invite