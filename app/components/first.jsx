import React,{Component,PropTypes} from "react";
import Common from './common';

export default class First extends Component{
  constructor(props){
    super(props)
  }  
  render(){
    return (
      <div>
        <Common title="首页" />
        <div className="container first">
          <div className="wrapper-1 ">             
          </div>
          <div className="wrapper-2 ">
            <div className="title wrapper-2-top" >
                  当然，您需要的不仅仅是薪资核算.....
            </div>
            <div className="wrapper-2-middle flex flex-pack-justify">
              <div className="content">
                <img src="images/sec_ico_1.png" />
                <span>企业平台</span>
              </div>
              <div className="content">
                <img src="images/sec_ico_2.png" />
                <span>政策实务</span>
              </div>
              <div className="content">
                <img src="images/sec_ico_3.png" />
                <span>福利商城</span>
              </div>
              <div className="content">
                <img src="images/sec_ico_4.png" />
                <span>我要系列</span>
              </div>          
            </div>        
          </div>
          <div className="wrapper-3">
            <div className="title ">
                  不同角色，各有收益
                </div>            
            <div className="people flex flex-pack-justify">
              <div className="content">
                <img src="images/sec_img_1.png" />
              </div>
              <div className="content">
                <img src="images/sec_img_2.png" />
              </div>
              <div className="content">
                <img src="images/sec_img_3.png" />
              </div>
            </div>        
          </div>
          <div className="wrapper-4" >       
              <div className="title">
                <span>我们因何不同？</span>
              </div>
              <div className="row flex flex-pack-justify" >           
                 <div className="row-left">            
                     <span>经验使我们更卓越</span><br/>                 
                    20年人力资源外包服务经验<br/>
                    超过1000家行业标杆客户        
                 </div>
              <div className="row-right">
                <img src="images/sec_img_4.png"/>
              </div>
              </div>
              <div className="row flex flex-pack-justify">             
              <div className="row-right">
                <img src="images/sec_img_5.png"/>
              </div>
              <div className="row-left ">
                <span>
                    线下实力让服务更可靠</span><br/>
                  庞大的线下服务<br/>
                    专家级顾问，提供灵活性方案<br/>
                    覆盖全国500多个城市          
                 </div>
             </div>
            
             <div className="row flex flex-pack-justify" >
                 <div className="row-left ">
                    <span>大而全，小而准</span><br/>
                    
                    覆盖人力资源全模块<br/>
                    按需自由组合，直击痛点
                 </div>
              <div className="row-right ">
                <img src="images/sec_img_6.png"/>
              </div>

              </div>
              <div className="row flex flex-pack-justify">
                
              <div className="row-right">
                <img src="images/sec_img_7.png"/>
              </div>
              <div className="row-left">
                   <span>在云端,安全有两重</span><br/>                  
                    信息不丢失<br/>
                    信息不泄露               
                </div>
              </div>       
          </div>
          <div className="wrapper-5">
            <div className="wrapper-5-top" >
                  我们的一些客户
                </div>            
            <div className="last">
              <img src="images/last.png"/>
            </div>        
          </div>
        </div>  
      </div>
    );
  }

}