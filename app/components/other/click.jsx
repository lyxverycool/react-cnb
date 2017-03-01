import React from 'react';
//export default () => <h1>Hello World</h1>;
export default class Click extends React.Component {
 constructor(){
    super();
    this.state={
      like:true
    }
  }
  handleClick(){
    this.setState({like:!this.state.like});
  }
  render(){
    const style={
      cursor:'pointer'
    }
    var text = this.state.like?'Like':"Unlike";
    return(
      <div className="hand">
        <p onClick={this.handleClick.bind(this)} style={style}> 
        You {text} this.Click the toggle;
        </p>
      </div>
    );
  }
}

