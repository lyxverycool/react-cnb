import React,{Component} from "react";
import Change from './other/change';
import List from './other/list';
import Click from './other/click';
import Hobbies from './other/hobbies';
import Opacity from './other/opacity';
import Common from './common';

export default class Fun extends Component{
   constructor(){
   	 super()
   }
   render(){
     const list={
       name:'cool',
       age:11
     }
     const style={
         padding:'5px'
     }
   	 return(
      <div>
        <Common title="功能组件"/>
        <div className="container" style={style}>           
          <Change />
          <List {...list}/>
          <Click />
          <Hobbies />
          <Opacity />
        </div>
      </div>
   	 )
   }
}