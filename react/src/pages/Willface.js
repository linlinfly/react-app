import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';

class Willface extends Component {
	constructor(){
		super()
	}
	render(){
		return (
			  <li className="welcome">
               暂时没有将面试的记录，去
               <Link href="/" className="tou">投递</Link>吧
			  </li>
			)
	}
}

export default Willface