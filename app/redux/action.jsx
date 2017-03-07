export default (_ID) => {
    const action = {};
    /*
        开始加载数据
    */
    action.GET_DATA_START = (state) => {
        return { _ID, state, type: 'GET_DATA_START' };
    }
    /*
        获取最新数据成功
    */
    action.GET_DATA_SUCCESS = (state) => {
        return { _ID, state, type: 'GET_DATA_SUCCESS' };
    }

    /*
        获取最新数据失败
    */
    action.GET_DATA_ERROR = (state) => {
        return { _ID, state, type: 'GET_DATA_ERROR' };
    }
    
    return action;
}
