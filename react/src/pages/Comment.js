import React,{Component} from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import {Link,IndexLink} from 'react-router';
import JobItem from '../components/JobItem';
import './Comment.css';
import Data from '../data/moke';


class Comment extends React.Component{
	constructor(){
	  super();
	  this.state = {
		   jobList:[Data],
		   login:"去登录",
		   jobInfo:"十秒钟定制你的职位",
		   href:"/frontLogin",
		   place:"全国"

					
	  }
	  console.log(this.state.jobList[0].content.data.page.result)
  }
  componentWillMount(){
	  if(sessionStorage.getItem("user")){
		 if(sessionStorage.getItem("li")){
				var msg = sessionStorage.getItem("requirement");
				 msg =JSON.parse(msg)
				
				var {place,position,salary,scale} = msg;
				console.log(place)
				console.log(position)
				console.log(msg)
				this.setState({
					login:"编辑",
					jobInfo:position+"/"+place+"/"+salary+"/"+scale,
					href:"/mini"
				})
		 }
		 else {this.setState({
			  login:"编辑",
			  jobInfo:"定制你的职位",
			  href:"/mini"
		  })
	  }

	}
	else{
		this.setState({
			login:"编辑",
			jobInfo:"定制你的职位",
			href:"/mini"
		})
	}
  }
  
  render(){
	    var list = this.state.jobList[0].content.data.page.result.map(function(elem) {
		  return <JobItem list={elem} key={elem.positionId} />;
	  })
	 
	  return (
		<div className="custom-info ">
		<span className="info">
			{this.state.jobInfo}
		</span>
		<Link className="go" href={this.state.href} target="_self">
			<em className="icon"></em>
			<em className="text">{this.state.login}</em>
		</Link>
		
			<ul>
				{list}    
			</ul>
			</div>
	  )
	 }
}
export default Comment


// class Comment extends Component {
// 	constructor(){
// 		super();
// 		console.log(Data);
// 		this.state ={
// 			list:[Data]
// 		}
// 		this.handleList = this.handleList.bind(this);
		
// 	}
// 	componentWillMount(){

//          this.setState({
//          	list:JSON.parse(sessionStorage.getItem('list'))||[]
//          })

// 	}
// 	render(){
// 		return (
// 			  <div>
//                   <CommentList list={this.state.list} />
//                   <CommentForm onFormSubmit={this.handleList} />
// 			  </div>
// 			)
// 	}
// 	handleList(obj){
// 		var list = [...this.state.list,obj];
//         this.setState({
//         	list:list
//         })
//         sessionStorage.setItem('list',JSON.stringify(list))
// 	}
	
// }

