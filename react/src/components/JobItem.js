import React,{Component} from 'react';
import './JobItem.css';
import {browserHistory} from "react-router";


class JobItem extends React.Component{
   constructor(){
       super();
       this.state={
           _list:{}
       }
       this.handlelist=this.handlelist.bind(this);
   }
   componentWillMount(){
    // sessionStorage.setItem("li",JSON.stringify(this.props.list));
   }
   handlelist(){
        
        var list_ = this.props.list;
        console.log(JSON.stringify(list_));
          this.setState({
              _list:list_
            },()=>{
                sessionStorage.setItem("li",JSON.stringify(this.props.list));
                browserHistory.push("details");
            });
      
    
   
    
   }
    render(){
        var {list} = this.props;
        
       
        return (
             <li className="activeable list-item" data-positionid={list.positionId} onClick={this.handlelist}>
                         <img src={list.companyLogo} className="item-logo" />
                         <div className="item-desc">
                             <h2 className="item-title">{list.companyName}</h2>
                             <p className="item-info">
                                 <span className="item-pos">{list.positionName}[{list.city}]</span>
                                 <span className="item-salary">{list.salary}</span>
                             </p>
                             <p className="item-time">{list.createTime}</p>
                         </div>
             </li>
            )
    }
    
}

export default JobItem