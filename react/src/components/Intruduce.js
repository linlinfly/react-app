import React, { Component } from 'react';
import {Link} from 'react-router';


class Intruduce extends Component{
    constructor(){
        super();
      
    }
     
    render(){
      
        return(
            <div className="in-info">
            <span className="in-text">
                <em className="left"></em>
                    “{this.props.text1}{this.props.text2}”
                <em className="right"></em>
            </span>
        </div>
        )
    }

}
export default Intruduce