import React, { Component } from 'react';
import {Link} from 'react-router';


class Choose extends Component{
    constructor(){
        super();
       this.handleClick = this.handleClick.bind(this);
    }
     handleClick(){
         this.props.onclick(this.props.page)
        
     }
    render(){
        let {desc} = this.props;
        return(
            <li className="item" onClick={this.handleClick}>
                <span className="head">{this.props.head}</span>
                <Link className="dis" href={this.props.href} target="_self">{desc}</Link>
            </li>
        )
    }

}
export default Choose