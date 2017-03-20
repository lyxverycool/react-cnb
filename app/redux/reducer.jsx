import fetch from 'isomorphic-fetch';

const start = {
   	displayLoading: 'none',
    displayNetwork: 'none', 
    json: null,
};

/*
    分类最新列表数据
*/


// function fetchApi(){
//     fetch('http://offline-news-api.herokuapp.com/stories')
//       .then(function(response) {
//         return response.json()
//       }).then((res)=>{
//         console.log(res);
//         return res;
//       }).catch((ex)=>{
//         console.log('parsing failed', ex);
//     })
// }
// fetchApi()  
     
const classMenuList = (state = start,action,res) => {
    switch (action.type) {
        case 'GET_DATA_START': //开始加载
           return (state, {loadMsg: '开始加载', data:res, loadState: 2});
        case 'GET_DATA_SUCCESS': //加载成功
            return (state,{loadMsg: '加载成功', data: action.state, loadState: 2});
        case 'GET_DATA_ERROR': //加载失败
            return (state, {loadMsg: '加载失败', data: action.state, loadState: 2});
        default:
            return (state,{displayLoading: 'none',json:res,  displayNetwork: 'block',});
    }
    
}


//导出方法
export default {classMenuList};

