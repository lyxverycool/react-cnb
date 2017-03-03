import React,{Component} from 'react';
import Common from './common';
import Tool from './tool';
import 'whatwg-fetch';
require('es6-promise').polyfill();
//fuck,ios,android低版本不支持fetch,用whatwg-fetch但是貌似不支持safari;

export default class List extends Component{
	constructor(props){
		super(props)
		this.state={
			json:[],
			display:'block'
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
					display:'none'
			})
		  }.bind(this)).catch(function(ex) {
		    console.log('parsing failed', ex)
		})
	}
	render() {
		let lists=this.state.json;
		let display=this.state.display;
		return (
			<div>
				<div className="loading" style={{display:display}}></div>
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
				</div>
			</div>
		);
	}
}