import React,{Component,PropTypes} from 'react';
const propTypes={
	item:PropTypes.object.isRequired;
	onClick:PropTypes.func.isRequired;
}
function ListItem({item,onClick}){
	let formatTime-"未知时间"；
	if(itme.time){
		formatTime=new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
	}
	return(
		<a href="#" className="" onClick={onClick}>
	 		<span>
	 			{formatTime}
	 		</span>
	 		<span>
	 			{item.title}
	 		</span>
	 	</a>	
	)
}
ListItem.propTypes=propTypes;

export default listItem;