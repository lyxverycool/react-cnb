import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchPostsIfNeeded } from '../redux/action';
import Common from './common';

class Test extends Component {
  constructor(props) {
    super(props)
    this.select=()=>{
      let myselect=document.getElementById('select');
      let index=myselect.selectedIndex ;
      let val=myselect.options[index].value;
      const { dispatch} = this.props
      console.log(val);
      if(val=='frontend'){
        dispatch(fetchPostsIfNeeded('frontend'))
      }else if(val=='reactjs'){
        console.log(111)
        dispatch(fetchPostsIfNeeded('reactjs'))
      }
    }
  }

  //初始化渲染后触发


  render() {
    const { posts } = this.props
    console.log(posts);
    return (
      <div>     
        <Common title="redux"/>
        <div className="container">
          <select id='select' className='select' onChange={this.select}>
            <option>frontend</option>
            <option>reactjs</option>
          </select>
          { 
           posts.map((post, i) =>
              <li key={i}>{post.title}</li>
            )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { postsByReddit } = state
  const {items: posts} = postsByReddit['frontend'] || postsByReddit['reactjs'] || {
    items: []
  }
  return {
    posts
    // lastUpdated
  }
}

export default connect(mapStateToProps)(Test)

