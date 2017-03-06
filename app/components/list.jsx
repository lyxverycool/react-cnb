import React,{Component} from 'react';
import Common from './common';
import Tool from './tool';
import 'whatwg-fetch';
require('es6-promise').polyfill();
//fuck,ios,android低版本不支持fetch,用whatwg-fetch,貌似safari不支持;

export default class List extends Component{
	constructor(props){
		super(props)
		this.state={
			json:[],
			displayLoading:'block',
			displayNetwork:'none'
		}
	}
	componentDidMount(){
		fetch('//offline-news-api.herokuapp.com/stories')
		  .then(function(response) {
		    return response.json()
		  }).then(function(res) {
		    console.log(res)
		    this.setState({
					json:res,
					displayLoading:'none'
			})
		  }.bind(this)).catch(function(ex) {
		    console.log('parsing failed', ex);
		    setTimeout(()=>{
				this.setState({
			    	displayLoading:'none',
					displayNetwork:'block'
			    })
		    },2000)
		}.bind(this))
	}
	render() {
		let lists=this.state.json;
		let displayLoading=this.state.displayLoading;
		let displayNetwork=this.state.displayNetwork;
		return (
			<div>
				<div className="loading" style={{display:displayLoading}}></div>
				<Common title="列表页"/>
				<div className="container">
					<div className="lists-text">
						{lists.map(
			               (list,i)=>{
			               	  return <div className="list-text" key={i}>
										<div className="list-author flex flex-pack-justify flex-align-center">{list.author}</div>
										<div className="list-title flex flex-pack-justify flex-align-center">{list.title}</div>
										<div className="list-date ">{list.date}</div>
							   </div>		                
			               }
			            )}					
					</div>
					<div className="alert" style={{display:displayNetwork}}>没有网络!请检查您的网路</div>	
				</div>
			</div>
		);
	}
}