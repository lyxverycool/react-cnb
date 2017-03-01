import React,{Component} from 'react';
import First from './first';
import Plate from './plate';
import About from './about';
export default class Container extends Component{
	constructor(){
		super()
	}
	render(){
		return(		
			<About />
		)
	}
}