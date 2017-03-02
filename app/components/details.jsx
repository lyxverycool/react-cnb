import React,{Component} from 'react';
import {Link} from 'react-router';
import Common from './common';

export default class Details extends Component{
	constructor(){
	   	 super();
	   	 this.state = {
            plateTitle: '',
            plateContent: '',
        };
	}
	componentWillMount(){
		console.log(this.props.params.id);
		let Id=this.props.params.id;
		if(Id==1){
			this.setState({
             	plateTitle:'工作台',
             	plateContent:'这是工作台的详情页'
         	})   			
		}
		else if(Id==2){
			console.log(this.state.plateTitle)
			this.setState({
             	plateTitle:'企业管理',
             	plateContent:'这是企业管理的详情页'
         	}) 
		}else{
			this.setState({
             	plateTitle:'',
             	plateContent:''
         	})
		}
	}
	render() {
		return (
			<div>
				<Common href="/plate" backTo="返回" />
				<div className="container">
					<h4 style={{color:"#CD4F39",width:'100%',textAlign:'center'}}>{this.state.plateTitle}</h4>
					<div style={{width:'100%',textAlign:'center'}}>{this.state.plateContent}</div>
				</div>
			</div>			
		);
	}
}