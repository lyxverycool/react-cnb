import React,{Component,PropTypes} from "react";
import Common from './common';

export default class Contact extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    	<div>
    		<Common title="联系我们"/>
	        <div className="container">       
			      <div className="title">
			        	联系我们
			      </div>
			      <div className="text">
				    上海利唐信息科技有限公司<br/>
			        地址:&nbsp;&nbsp;&nbsp;上海市延安西路726号华敏翰尊12J<br/>
			        邮编:&nbsp;&nbsp;&nbsp;200050<br/>
			        电话:&nbsp;&nbsp;&nbsp;4008-062-822<br/>
			        传真:&nbsp;&nbsp;&nbsp;+86-21-5238-8991<br/>
			        电子邮件:&nbsp;&nbsp;&nbsp;user@cnbexpress.com
			      </div>
			      <div className="wechat">
			        <img src={require("../images/wechat.jpg")}/>
			      </div>
	        </div> 
    	</div> 
    );
  }

}