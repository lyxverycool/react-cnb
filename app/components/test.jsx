import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchPostsIfNeeded } from '../redux/action';
import Common from './common';

class Test extends Component {
  constructor(props) {
    super(props)
    this.click=(props)=>{
      let {dispatch}=this.props
      dispatch(fetchPostsIfNeeded('reactjs'))
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
          <button onClick={this.click}>惦记我</button>
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

