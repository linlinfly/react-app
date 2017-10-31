import React, { Component } from 'react';
// import "./Search_city.css";
import {Link} from 'react-router';
import Search_city_list from "./Search_city_list";

class Search_city extends Component{
    constructor(){
        super()
       
    }
  
    render(){
        var city_list=[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","沧州","东莞","大连","东营","佛山","阜阳","福州","抚州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","邯郸","哈尔滨","合肥","呼和浩特","海口","衡水","河源","杭州","惠州","湖州","金华","九江","吉林","江门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","聊城","廊坊","丽水","拉萨","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["平顶山","莆田","濮阳","青岛","秦皇岛","清远","泉州","衢州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["上海","石家庄","汕头","汕尾","绍兴","沈阳","三亚","深圳","苏州","宿州","泰安","天津","唐山","太原","台州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","孝感","香港特别行政区","厦门","西宁","新乡","咸阳","襄阳","徐州","宜宾","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
        var that = this;
        var  lists = city_list.map(function(ele,index){
            return <Search_city_list need_save={that.props.need_save} nameStr={ele.nameStr} cityList={ele.cityList} key={index} change_city={that.props.change_city}/>
        })
        return(
            <div className="city_list_all">
                <div className="city_kist_back">
                    <span className="city_kist_back_left"></span>
                </div>
               {lists}
            </div>
        )
    }
}

export default Search_city