import 	React,{Component} from 'react';
export default class Opacity extends Component{
  constructor(){
    super();
    this.state={
      opacity:1.0,
      color:"#fa2",
      size:"18"
    }
  }
  componentWillMount(){
   this.timer=setInterval (
      ()=>{
        let opacity = this.state.opacity;
        let size=this.state.size;
        //console.log(opacity);
        //console.log(size);
          size+=1;
          if(size>40){
            size=18
          }
          this.setState({
             size:size
              //console.log(opacity)
          });
         // console.log(opacity)
      },100)
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    clearTimeout(this.timer);
  }
  render(){
    return (
    	<div>
	      <div style={{fontSize:this.state.size+'px',color:this.state.color,opacity:this.state.opacity }}>
	        Yes,this is me ,this is true.
	      </div>
      </div>
    );
  }
}
