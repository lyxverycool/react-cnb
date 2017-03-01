import React,{Component,PropTypes} from 'react';

const prop={
	name:PropTypes.string.isRequired,
	age:PropTypes.number.isRequired
}

export default class List extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const styles={
			color:'#fcc'
		}
		return(
			<div>
				<p>
					<span style={styles}>我的名字:</span>
					<span>&nbsp;&nbsp;{this.props.name}</span>
				</p>
				<p>
					<span >我的性别</span>
					<span>&nbsp;&nbsp;{this.props.age}</span>
				</p>
			</div>
		)
	}
}
List.prop=prop;
