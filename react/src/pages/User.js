import React,{Component} from 'react';
import './User.css';
import axios from 'axios';
import JobItem from '../components/JobItem';
import Search_city from '../components/Search_city'
import {browserHistory} from "react-router";
class User extends Component {
	constructor(){
		super()
		this.state={
			change:false,
			info:null,
			find:"搜索职位或公司",
			list:{}
		}

		this.changeCity = this.changeCity.bind(this);
		this.searchJob = this.searchJob.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
	}
	componentWillMount(){
		// 设置state的默认值：如果storage中有值，则使用storage中的值；否则使用默认值
		var {place} = JSON.parse(sessionStorage.getItem("place")) ||
												{
												
													place:"全国"
													
												}
		this.setState({
			
			place:place,
			
		})
	}
	searchJob(){
		var that = this
		axios.get('/api/user?name=1').then(function(res){
			
	  var data = res.data.arr.content.data.page.result;
	  console.log(data);
		 
		 var list = data.map(function(elem) {
		  return <JobItem list={elem} key={elem.positionId} />;
		  
	  });   
	  console.log(list);
	  that.setState({
		info:"将搜索地区和关键词设为定制条件",
		_list:list
	})
		  })
		  
        
		
		
	}

	changeCity(){
		this.setState({
			change:true
		})
		
	}
	handleCityChange(_city){
		//改变state值完成后，将新的state存到storage中
		this.setState({
			place:_city,
			change:false
		},()=>{
			sessionStorage.setItem("place",JSON.stringify(this.state));
		})
		
	}
	render(){
		
		let change = this.state.change ?
		(<Search_city change_city={this.handleCityChange} need_save={false}/>) : (<div className="icontent">
		<div className="linputer">
		<div className="lbutton" onClick={this.changeCity}>
			<span className="city">{this.state.place}</span>
			<span className="cityicon"></span>
		</div>
		<div className="rinput">
			<input className="inputer" type="text" placeholder={this.state.find} />
			<span className="searcher" onClick={this.searchJob}><em className="searchicon"></em></span>
		</div>
	</div>
	<div className="listcon">
	<ul className="history"></ul>
	<div className="custominfo none">
		{this.state.info}
	</div>
	<ul className="list">
		{this.state._list}
	</ul>
	</div>

  </div>)
		return (
			<div>{change}</div>
			)
	}
}

export default User