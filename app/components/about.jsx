import React,{Component} from 'react';
import Common from './common';

export default class About extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<Common title="关于我们"/>
				<div className="container">
			      <div className="title">
			        	关于我们
			      </div>
			      <div className="text">
			      	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			      	薪福快线C&BExpress是利唐信息科技与Talent Spot联手打造的薪酬福利SaaS云平台，于2016年9月1日正式上线。<br/>
		            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪福快线拥有薪资社保计算、政策实务查询、生成自定义报表、人事异动管理、组织架构管理、员工留言、线下代缴社保、代发工资等。<br/>
		            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，我们已在30多个城市拥有线下网点，服务覆盖全国500多个城市，在传统人力资源服务与互联网技术的跨界中，为企业劈开一条高性价比、低成本、高质量、迅速准确的人力资源管理之道。<br/><br/>
			      </div>
     			</div>
			</div>
		)
	}
}