import React,{Component} from 'react';
import Common from './common';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import action from '../redux/action';
import 'whatwg-fetch';
require('es6-promise').polyfill();
//fuck,ios,android低版本不支持fetch,用whatwg-fetch,貌似safari不支持;

export default class List extends Component{
	constructor(props){
		super(props)
		this.state={
			lists:[],
			displayLoading:'block',
			displayNetwork:'none'
		}
		this.DomLoad=(props,state)=>{
			fetch('http://offline-news-api.herokuapp.com/stories')
			  .then(function(response) {
			    return response.json()
			  }).then((res)=>{
				console.log(res);
				this.setState({
						lists:res,
						displayLoading:'none'
				})
			  }).catch((ex)=>{
				console.log('parsing failed', ex);
			    setTimeout(()=>{
					this.setState({
				    	displayLoading:'none',
						displayNetwork:'block'
				    })
			    },2000)
			  })			
		}
	}
	componentDidMount(props,state){
		this.DomLoad(this.props,this.state)
	}
	componentDidUpdate(){
		this.click=()=>{
			console.log('11')
			this.DomLoad(this.props,this.state)
		}
	}
	render() {
		let {lists,displayNetwork,displayLoading}=this.state;
		return (
			<div>
				<div className="loading" style={{display:displayLoading}}></div>
				<Common title="列表页"/>
				<div className="container">
					<button onClick={this.click}>点击</button>
					<div className="lists-text">
						{lists.map(
			               (list,i)=>{
			               	  return <Link key={i} to={'/listItem/'+i} className="list-text">
									<div className="list-author flex flex-pack-justify flex-align-center">{list.author}</div>
									<div className="list-title flex flex-pack-justify flex-align-center">{list.title}</div>
									<div className="list-date">{list.date}</div>
							   </Link>		                
			               }
			            )}					
					</div>
					<div className="alert" style={{display:displayNetwork}}>没有网络!请检查您的网路</div>	
				</div>
			</div>
		);
	}
}
