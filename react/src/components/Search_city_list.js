import React, { Component } from 'react';
// import "./Search_city_list.css";
import './City.css';
class Search_city_list extends Component{
    constructor(){
        super();
        this.handleCityChoose = this.handleCityChoose.bind(this);
       
    }
    handleCityChoose(e){
       
        //根据父组件传来的数据判断点击的城市是否需要保存到storage中
        if(this.props.need_save){
            sessionStorage.setItem("city",e.target.innerText);
        }
        this.props.change_city(e.target.innerText);
          
    }
  
    render(){
        var that = this;
        var city_list=this.props.cityList.map(function(ele,index){
            return(
                <dd key={index}  onClick={that.handleCityChoose}  className="serach_city_list">{ele}</dd>
            )
        })
        return(
            <dl className="all_city">
                <dt className="serach_city_header">{this.props.nameStr}</dt>
                {city_list}
            </dl>
        )
    }
}

export default Search_city_list