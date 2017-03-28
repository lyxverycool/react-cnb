import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {counterAction} from '../../redux/action';
//export default () => <h1>Hello World</h1>;
//加载默认模块 export default一个模块只能一次

export class  Counter  extends Component{
	constructor(){
		super()
	}	
	render() {
	    const { value, onIncreaseClick,onDecreaseClick } = this.props;
	    return (
	      <div>
	      	<button onClick={onDecreaseClick}>Decrease</button>
	        <span>{value}</span>
	        <button onClick={onIncreaseClick}>Increase</button>
	      </div>
	    )
  	}
}

// Map Redux state to component props
function mapStateToProps(state) {
  console.log(state.counter.count)
  return {
    value: state.counter.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(counterAction.increaseAction),
    onDecreaseClick: () => dispatch(counterAction.decreaseAction)
  }
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

