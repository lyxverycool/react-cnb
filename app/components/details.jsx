import React,{Component} from 'react';
import {Link} from 'react-router';
import Common from './common';

export default class Details extends Component{
	constructor(){
	   	 super();
	}

	render() {
		let {plateTitle,plateContent}=this.props;
		return (
			<div>
				<Common href="/plate" backTo="返回" />
				<div className="container">
					<h4 style={{color:"#CD4F39",marginLeft:'120px'}}>{plateTitle}</h4>
					<div style={{marginLeft:'60px'}}>{plateContent}</div>
				</div>
			</div>			
		);
	}



}