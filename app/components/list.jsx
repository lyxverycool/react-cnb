import React,{Component} from 'react';
import Common from './common';
import Tool from './tool';
export default class List extends Component{
	constructor(props){
		super(props)
	}
	getAjax(){
		$.ajax({
	        url:'http://datainfo.duapp.com/shopdata/getGoods.php',
	        dataType:'jsonp',
	        async:false,
	        success:function(data){
	        	console.log(data)
	            var html="";
	            $.each(data,function(i) {
	                html+="<div class='flex'><img class='pic' src='"+data[i].goodsListImg+"'/><div class='name'>"+data[i].className+"</div><div class='num'>"+data[i].goodsID+"</div></div>"
	            });
	            $(".container").append(html);     
	        },
	        error:function (XMLHttpRequest, textStatus, errorThrown){   
	           alert(XMLHttpRequest);   
	        } 
	    })
	}
	render() {
		return (
			<div>
				<Common title="列表页"/>
				<div className="container">
					<button onClick={this.getAjax.bind(this)} style={{cursor:"pointer"}}>点我</button>
					<div className="listTest">
	
					</div>
				</div>
			</div>
		);
	}
}