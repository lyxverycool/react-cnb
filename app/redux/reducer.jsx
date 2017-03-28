import { combineReducers } from 'redux';
import {counterAction,RECEIVE_POSTS} from './action';
const count=5;

function counter(state = { count: count}, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }
    default:
      return state
  }
}



function posts(state = {items: []}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts //数据都存在了这里
      })
    default:
      return state
  }
}

//废弃、接收到、开始接受新闻后，将state.postsByReddit设为相关参数
function postsByReddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}

// 将所有的reducer结合为一个,传给store
const rootReducer = combineReducers({
  postsByReddit,counter
})

export default rootReducer