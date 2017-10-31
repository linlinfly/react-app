import React, { Component } from 'react';



class PositionList extends Component{
    constructor(){
        super();
       
    }
   
    render(){
        let {change} = this.props;
        return(
            <li className="positionitem"  onClick={change}>
               {this.props.text}
            </li>
        )
    }

}
export default PositionList