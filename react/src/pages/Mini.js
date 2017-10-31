import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ClickBack from '../components/ClickBack';
import Choose from '../components/Choose';
import Search_city from '../components/Search_city'
import Intruduce from '../components/Intruduce';
import {browserHistory} from "react-router";
import PositionList from '../components/PositionList';
import './Mini.css';

//动态路由：当路由匹配不同路径的时候，加载的都是同一个组件，需要通过不同路径来作为参数加载不同的数据

class Mini extends Component{
  constructor(){
      super()
      this.state={
          position:"",
          place:"",
          salary:"",
          scale:"",
          page:0            
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleChangeSalary = this.handleChangeSalary.bind(this);
      this.handleChangeScale = this.handleChangeScale.bind(this);
      this.handleChangePosition = this.handleChangePosition.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleCustom = this.handleCustom.bind(this);
  }
  componentWillMount(){
      // 设置state的默认值：如果storage中有值，则使用storage中的值；否则使用默认值
      var {position,place,salary,scale} = JSON.parse(sessionStorage.getItem("requirement")) ||
                                              {
                                                  position:"web前端",
                                                  place:"成都",
                                                  salary:"5k-10k",
                                                  scale:"没有要求",
                                              }
      this.setState({
          position:position,
          place:place,
          salary:salary,
          scale:scale
      })
  }
  handleChange(_page){
      this.setState({
          page:_page
      })  
  }
  handleCityChange(_city){
      //改变state值完成后，将新的state存到storage中
      this.setState({
          place:_city,
          page:0
      },()=>{
          sessionStorage.setItem("requirement",JSON.stringify(this.state));
      })
  }
  handleChangeSalary(e){
    console.log(e.target.innerHTML);
      this.setState({
          salary:e.target.innerHTML,
          page:0
        },()=>{
          sessionStorage.setItem("requirement",JSON.stringify(this.state));
      }) ;
  }
  handleChangeScale(e){
      this.setState({
          scale:e.target.innerHTML,
          page:0
      },()=>{
          sessionStorage.setItem("requirement",JSON.stringify(this.state));
      })
  }
  handleChangePosition(e){
    console.log(e.target.innerHTML);
      this.setState({
          position:e.target.innerHTML,
          page:0
        },()=>{
          sessionStorage.setItem("requirement",JSON.stringify(this.state));
      });
  }
  handleSearch(){
      sessionStorage.setItem("li",JSON.stringify(this.state));
      browserHistory.push("/");
  }
  handleCustom(){
      this.setState({
          page:0
        },()=>{
          sessionStorage.setItem("requirement",JSON.stringify(this.state));
      })
  }
  render(){
      var now_page="";
      var that = this;
      var _list="";
      var _salary = ["没有要求","2k以下","2k-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"],
          _position = ["产品经理","web前端","Java","运营","Android","PHP","UI","IOS","销售"],
          _scale = ["没有要求","初创型","成长型","成熟型","上市公司"];
      switch(this.state.page){
          case 0:
              now_page =  <div className="Content">
                    <ul className="list-choose">
                  <Choose head={"职位类型"}  page={1} desc={this.state.position} onclick={this.handleChange}></Choose>
                  <Choose head={"工作地点"}  page={2} desc={this.state.place} onclick={this.handleChange}></Choose>
                   <Choose head={"期望薪水"}  page={3} desc={this.state.salary} onclick={this.handleChange}></Choose>
                   <Choose head={"公司规模"}  page={4} desc={this.state.scale} onclick={this.handleChange}></Choose>
                    </ul>
                    <div className="search" onClick={this.handleSearch}>
                    搜索
                        </div>
                   </div>;
              break;
          case 1:
              _list = _position.map(function(ele,index){
                  return <PositionList text={ele} key={index} change={that.handleChangePosition}/>
              });
              now_page = <div>
                              <Intruduce text1={"想找什么职位？"} text2={""}/> 
                              <div className="rinputer">
                                  <input className="inputer" type="text" placeholder="输入你想定制的职位"/>
                                  <span className="rinputer_button">OK</span>
                              </div>
                              <ul className="main_list">
                                  {_list}
                                  
                              </ul>
                         </div>;
              break;
            
          case 2:
              now_page = <div className="custom_city">
                              <Intruduce text1={"告诉我你期望的工作地点？"} text2={""}/>
                              <Search_city change_city={this.handleCityChange} need_save={false}/>
                         </div>;
              break;
            
          case 3:
              _list = _salary.map(function(ele,index){
                  return <PositionList text={ele} key={index} change={that.handleChangeSalary}/>
              });
              now_page = <div>
                              <Intruduce  text1={"你值得更好的生活，"} text2={"告诉我你期望的薪水。"}/>
                              <ul className="custom_main_list">
                                  {_list}
                              </ul>
                         </div>;
              break;
            
          case 4:
              _list = _scale.map(function(ele,index){
                  return <PositionList text={ele} key={index} change={that.handleChangeScale}/>
              });
              now_page = <div>
                              <Intruduce  text1={"对公司的规模可有要求？"} text2={""}/>
                              <ul className="custom_main_list">
                                  {_list}
                              </ul>
                         </div>;
              break;
      }
      


      return(
        <div className="Mini">
         <div className="Header">
           <ClickBack title={"设置定制信息"}/>
         </div>
        {now_page}
               </div>
      )
  }
}
export default Mini
// class Mini extends Component {
//   constructor(){
//     super()
//     this.state={
//         position:"",
//         city:"",
//         salary:"",
//         scale:"",
//         page:0            
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(page){
//     this.setState({
//         page:page
//     })  
  
//    }
   
//   render() {
//     var livePage="";
//     var that = this;
//     var _list="";
//     var _salary = ["没有要求","2k以下","2k-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"],
//         _position = ["产品经理","web前端","Java","运营","Android","PHP","UI","IOS","销售"],
//         _scale = ["没有要求","初创型","成长型","成熟型","上市公司"];
//    switch(this.state.page){
//      case 0 :
//            livePage  =  <div className="Content">
//                    <ul className="list-choose">
//                   <Choose head={"职位类型"}  page={1} onclick={this.handleChange}></Choose>
//                   <Choose head={"工作地点"}  page={2} onclick={this.handleChange}></Choose>
//                   <Choose head={"期望薪水"}  page={3} onclick={this.handleChange}></Choose>
//                   <Choose head={"公司规模"}  page={4} onclick={this.handleChange}></Choose>
//                    </ul>
//                    <div className="search">
//                       搜索
//                         </div>
//                    </div>;
//       break;
      
//       case 1:
//        let _list = _position.map(function(ele,index){
//         return <PositionList text={ele} key={index} change={that.handleChangePosition}/>
//     });
//    }
 
//     return (
//       <div className="Mini">
//         <div className="Header">
//            <ClickBack title={"设置定制信息"}/>
//         </div>
//     {livePage}
        
//       </div>
//     );
//   }
// }

// export default Mini;