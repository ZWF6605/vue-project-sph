import { reqGetSearchInfo } from "@/api"
//search模块的小仓库
const state={
    //仓库初始化状态
    searchList:{}
}
const mutations={
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions={
    async getSearchInfo({commit},params={}){
        //当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHINFO',result.data)
        }
    }
}
//计算属性： 在实际开发中，为了简化仓库数据而生
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}