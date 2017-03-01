import React,{Component,PropTypes} from 'react';
import Hobby from './hobby' ;

export default class Hobbies extends Component{
	constructor(props){
		super(props);
		this.state={
			hobbies:["pingpong",'basketball']
		}
	}
	addHobby(){
		const hobbyInput=this.refs.hobby;
		const val=hobbyInput.value;
		console.log(typeof(val))
		if(val!=null&&val!=''){
			let hobbies=this.state.hobbies;
			hobbies.push(val);
			console.log(hobbies);
			this.setState(
				{hobbies},()=>{
					hobbyInput.value=" "
				}
			)
		}
	}
	deleteHobby(){	
		const hobbyInput=this.refs.hobby;
		let hobbies=this.state.hobbies;
		const val=hobbyInput.value;
		hobbies.pop()
		console.log(hobbies);
		this.setState(
			{hobbies},()=>{
				hobbyInput.value=" "
			}
		)	
	}
	render(){
		return(
			<div>
				<div>我的爱好:</div>
				<ul>
					{this.state.hobbies.map((hobby,i)=><Hobby key={i} hobby={hobby}/>)}
				</ul>
				<input type="text" ref="hobby" />
				<button onClick={this.addHobby.bind(this)}>添加爱好</button>
				<button onClick={this.deleteHobby.bind(this)}>删除爱好</button>			
			</div>
			
		)
	}
}