import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Common extends Component{
	constructor(props){
		super(props)	
	}		
	render(){
		let {title,backTo,href}=this.props;
		const lists=[
			{text:"HOME",title:'首页',link:"/first"},
			{title:'企业平台',link:"/plate"},
			{title:'关于我们',link:"/about"},
			{title:'联系我们',link:"/contact"},
			{title:'功能组件',link:'/fun'},
			{title:'列表页',link:'/list'}
		];
		return(
			<div>
				<header className="flex flex-pack-justify flex-align-center">
		   	    	<a href="#">
		   	    		<img className="logo" src={require('../images/logo_common.png')} />
		   	    	</a>
		   	    	<p>{title}</p>
		   	    	<Link to={href} className="back">{backTo}</Link>		             
		   		</header>
		        <footer className="flex"> 
			        {lists.map(
		               (list,i)=>{
		                  return <div className="footers" key={i}><Link to={list.link}>{list.title}</Link></div>
		               }
		            )}           
		        </footer>
		        {this.props.children}	
			</div>
		)
	}
}