import axios from 'axios';
import * as constants from './constants';
// 引入不可修改的对象
import { fromJS } from 'immutable';

// 连接api里面的数据
const changHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    goodwriters:result.goodwriters
});

const addHomeList = (list, nextPage) => ({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})
// 从接口拿数据
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changHomeData(result));
        })
    }
}
// 从接口拿数据，得到加载更多的数据
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page+1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})