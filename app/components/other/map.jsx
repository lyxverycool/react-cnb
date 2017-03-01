import React, { Component, PropTypes } from 'react';
//export default () => <h1>Hello World</h1>;
//加载默认模块 export default一个模块只能一次

export default class Map extends Component{
	constructor(){
		super()
	}	
	render(){
		const names=["个人","姓名","理想","抱负"];
		return (
			<div className="flex">
				{names.map(
					(name,i)=>{
					return <div className="flex-1" key={i}>{name}</div>
					}
				)}
			</div>
		)
	}
}
