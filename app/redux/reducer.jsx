import Tool from '../components/tool';

const start = {
   loadMsg: '正在加载中...',
    loadState: 0,  //0 正在加载中, 1加载失败，2加载成功
    title: '正在加载中...',
    data: null,
    scrollX: window.scrollX,
    scrollY: window.scrollY
};

/*
    分类最新列表数据
*/
const classNewList = (state = {def: start, classid: {}}, action) => {
   
}
/*
    分类导航
*/
const classMenuList = (state = start, action) => {
     
}

//导出方法
export default {classNewList, classMenuList};
