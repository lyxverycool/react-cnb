import React,{Component} from 'react';
import {Link} from 'react-router';
import Common from './common';


export default class Plate extends Component{
   constructor(){
   	 super();
   }
   render(){
   		const plate=[
			{id:'0',plateTitle:'工作台',plateContent:'这是工作台的详情页'},
			{id:'1',plateTitle:'企业管理',plateContent:'这是企业管理的详情页'}
		];
   	  return(
   	  	<div>
   	  		<Common title="企业平台"/>
   	  		<div className="container">
		        <section className="wrapper-1">
					<div className="title">
				       企业平台
				    </div>
					<div className="wrapper-top flex flex-align-center">
						<p>
							对所有HR都有用的管理平台<br/>
							覆盖薪资核算、公积金方案、<br/>
				            社保方案、薪资方案、员工管理、权限管理....
			      		</p>
					</div>
					<div className="list">
			          在这里，你可以做到...
			    	</div>
					<div className="box flex flex-pack-justify">
						<Link to="/details" className="boxs flex flex-v" >						
							<b>工作台</b><br/>
							<span>有序工作不延误<br/>有章可循不遗漏</span>
							<img src="../images/p1.jpg"/>							
						</Link>
						<Link to="/details" className="boxs flex flex-v">						
							<b>企业管理</b><br/>
							<span>更快导入部门信息<br/>轻松应对组织变化</span>
							<img src="../images/p2.jpg"/>							
						</Link>
					</div>
					<div className="box flex flex-pack-justify">
						<div className="boxs box-1">
							<b>员工管理</b><br/>
							<span>人事信息简单录入<br/>各类证件按需调取</span>
							<img src="../images/p3.jpg"/>
						</div>
						<div className="boxs box-2">
							<b>薪资福利</b><br/>
							<span>高效薪资精确核算<br/>自定义社保无忧缴纳</span>
							<img src="../images/p4.jpg"/>
						</div>				
					</div>
					<div className="box flex flex-pack-justify">
						<div className="boxs box-1">
							<b>员工家园</b><br/>
							<span>查询互动更便捷<br/>薪福信息更透明</span>
							<img src="../images/p5.jpg"/>
						</div>
						<div className="boxs box-2">
							<b>权限管理</b><br/>
							<span>多角色账号自动切换<br/>自定义账号功能</span>
							<img src="../images/p6.jpg"/>
						</div>				
					</div>
					<div className="list">
			        		我们为你达成......	      			
			      	</div>
					<div className="box flex flex-pack-justify">
						<div className="boxs box-1">
							<b>安全</b><br/>
							<span>银行级安全防护<br/>数据多重备份</span><br/>
							
						</div>
						<div className="boxs box-2">
							<b>准确</b><br/>
							<span>确保薪资核算<br/>覆盖全国主要城市<br/>平台实时维护</span>	
						</div>				
					</div>
					<div className="box flex flex-pack-justify">
						<div className="boxs box-1">
							<b>定制化</b><br/>
							<span>按需组合功能模块<br/>各种报表自定义生成</span>					
						</div>
						<div className="boxs box-2">
							<b>高性价比</b><br/>
							<span>成本低廉<br/>功能齐全<br/>满足个性化需求</span>					
						</div>				
					</div>
		    	</section>
	    	</div>
   	  	</div>
   	  )
   }

}