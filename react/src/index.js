import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';
import './index.css';
import App from './App';
import Deliverlist from './pages/Deliverlist';
import All from './pages/All';
import Face from './pages/Face';
import Unsuit from './pages/Unsuit';
import Interview from './pages/Interview';
import Faced from './pages/Faced';
import Willface from './pages/Willface';
import Invite from './pages/Invite';
import Collect from './pages/Collect';
import Login from './pages/Login';
import Comment from './pages/Comment';
import Mini from './pages/Mini';
import User from './pages/User';
import Details from './components/Details';
import FrontLogin from './pages/FrontLogin';

import Register from './pages/Register';
import registerServiceWorker from './registerServiceWorker';

//Router：路由配置的容器 ，Route路由配置规则组件
render(
    <Router history={browserHistory}> 
      <Route path="/" component={App}>
        <IndexRoute component={Comment}/>
        <Route path="login" component={Login} />
        <Route path="user" component={User} />
        
      </Route>
      <Route path="deliverlist" component={Deliverlist}>
        {/* <IndexRoute component={All}/> */}
        <Route path="/all" component={All} />
        <Route path="/face" component={Face} />
        <Route path="/unsuit" component={Unsuit} />
        
      </Route>
      <Route path="interview" component={Interview}>
        {/* <IndexRoute component={All}/> */}
      
        <Route path="/faced" component={Faced} />
        <Route path="/willface" component={Willface} />
        
      </Route>
      <Route path="invite" component={Invite}>
      </Route>
      <Route path="collect" component={Collect}>
      </Route>
      <Route path="mini" component={Mini}>
      </Route>
      <Route path="details" component={Details}>
      </Route>
      <Route path="frontLogin" component={FrontLogin}>
      </Route>
      <Route path="register" component={Register}>
      </Route>
     
      
   </Router>
	, document.getElementById('root'));
registerServiceWorker();
