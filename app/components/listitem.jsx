import React,{Component} from 'react';
import Common from './common';

export default class Listitem extends Component{
	constructor(props){
		super(props)
		this.state={
			displayLoading:'block',
			author:'',
			title:'',
			body:'',
			date:''
		}
	}
	componentDidMount(){
		console.log(this.props.params.id)
		let Id=this.props.params.id;
		fetch('//offline-news-api.herokuapp.com/stories')
		  .then(function(response) {
		    return response.json()
		  }).then(function(res) {
		    console.log(res[Id])
			this.setState({
				displayLoading:'none',
				author:res[Id].author,
				title:res[Id].title,
				body:res[Id].body,
				date:res[Id].date
			})
		  }.bind(this)).catch(function(ex) {
		    console.log('parsing failed', ex);	    
		}.bind(this))
	}
	render(){
		let displayLoading=this.state.displayLoading;
		let author=this.state.author;
		let title =this.state.title;
		let body =this.state.body;
		let date =this.state.date;
		return (
			<div>
				<div className="loading" style={{display:displayLoading}}></div>
				<Common href="/list" backTo="返回" />
				<div className="container">
					<div className="listitem">
						<div className="name flex flex-pack-center flex-align-center">
							{author}
						</div>
						<div className="list-title">
							{title}
						</div>
						<div className="body">
							{body}
						</div>
						<div className="date">
							{date}
						</div>
					</div>
				</div>
			</div>
		)
	}

}