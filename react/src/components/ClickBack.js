import React,{Component} from 'react';

import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';

class ClickBack extends Component {
    constructor(){
        super()
        this.Backup = this.Backup.bind(this);
    }

    render(){
        return(
            <div className= "Deliverlist_header">
            <div className="left">
                 <span className="corner" onClick={this.Backup}></span>
            </div>
            {this.props.title}
            </div>
        )
    }
    Backup(){
        window.history.back();
    }
}

export default ClickBack