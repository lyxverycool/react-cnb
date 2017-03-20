export default() => {
    const action = {};
    
    action.GET_DATA_START = (state) => {
        return {state, type: 'GET_DATA_START' };
    }
    /*
        获取最新数据成功
    */
    action.GET_DATA_SUCCESS = (state) => {
        return {state, type: 'GET_DATA_SUCCESS' };
    }

    /*
        获取最新数据失败
    */
    action.GET_DATA_ERROR = (state) => {
        return {state, type: 'GET_DATA_ERROR' };
    }
    
    return action;
}
fetch('http://offline-news-api.herokuapp.com/stories')
      .then(function(response) {
        return response.json()
      }).then((res)=>{
        //console.log(res);
        return res;
      }).catch((ex)=>{
        console.log('parsing failed', ex);
    })

function fetchPosts(reddit) {
  return dispatch => {
    dispatch(GET_DATA_SUCCESS(reddit))
    return fetch('http://offline-news-api.herokuapp.com/stories')
      .then(response => response.json())
      .then(json => dispatch(GET_DATA_SUCCESS(reddit, json)))
  }
}