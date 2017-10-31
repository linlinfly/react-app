import React,{Component} from 'react';
import {Link} from 'react-router';
import './Details.css';
import ClickBack from './ClickBack';

class Details extends Component{
    constructor(){
        super();
        this.state={
            list:null
        }
        
        
    }
    componentWillMount(){
        var job = sessionStorage.getItem("li");
            job =JSON.parse(job)
        console.log(job)
        this.setState({
            list:job
  
        });
        
    }
    
         render(){
             let _list = this.state.list
             
             return(
                 <div className="details">
                 <div className="Header">
                         <ClickBack title={"职位详情"}/>
                     <div className="right">
                         <span className="corner"></span>
                         </div>
                 </div>
                 <div className="postitle">
                    <h2 className="title">{_list.positionName}</h2>
                    <div className="collicon activeable">
                      <span className="icon notcoll"></span>
                       <span className="text">
                                            未收藏
                                    </span>
                         </div>
                 </div>
                 <div className="detail">
            <div className="items">
                                    <span className="item salary">
                        <em className="icon"></em>
                        <span className="text">{_list.salary}</span>
                    </span>
                                                    <span className="item workaddress">
                        <em className="icon"></em>
                        <span className="text">{_list.city}</span>
                    </span>
                                                    <span className="item jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
                    </span>
                                                    <span className="item workyear">
                        <em className="icon"></em>
                        <span className="text">不限</span>
                    </span>
                                                    <span className="item education">
                        <em className="icon"></em>
                        <span className="text">
                            大专及以上                        </span>
                    </span>
                            </div>
            
            <div className="temptation">
                职位诱惑：团队优秀,办公环境好,晋升空间大
              </div>
        </div>
        <div className="company activeable">
            <img src={_list.companyLogo} className="logo" />
            <div className="desc">
                <div className="dleft">
                    <h2 className="title">
                        {_list.companyName}
                    </h2>
                    <p className="info">
                                                    移动互联网,广告营销
                                                                            / A轮
                                                                            / 50-150人
                                            </p>
                </div>
                                    <span className="dright"></span>
                            </div>
        </div>
        <div className="positiondesc">
            <div className="header"> 职位描述
               
            </div>
            <div className="content">
                    <p>一、岗位职责</p>
                    <p>&nbsp;</p>
                    <p>1、负责对公司提供的潜在客户进行跟进；</p>
                    <p>2、与客户进行有效沟通了解客户需求, 寻找销售机会；</p>
                    <p>3、维护老客户的业务，挖掘客户的潜力；</p>
                    <p>4、定期与合作客户进行沟通，建立良好的长期合作关系。</p>
                    <p>&nbsp;</p>
                    <p>二、任职要求</p>
                    <p>&nbsp;</p>
                    <p>1、专科以上学历，有无销售经验均可，有销售工作经验者优先，接受应届生及实习生；</p>
                    <p>2、口齿清晰，普通话流利，语音富有感染力；</p>
                    <p>3、具备较强的学习能力和优秀的沟通能力；</p>
                    <p>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力。</p>
                    <p>&nbsp;</p>

            </div>
        </div>
        <div className="positioneval">
            <div className="eval-title">
                面试评价
                    <span id="total">(<span></span>)</span>
            </div>
            <ul className="list"></ul>
            <a className="eval-all" href="/user/expsList_3689024.html"></a>   
        </div>

                <div className="fix-btn">
        
                <Link href="frontlogin" className="deliver-btn">投递简历</Link>
               </div>
               </div>
             )
         }
}
export default Details