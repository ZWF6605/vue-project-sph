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
//可以把将来在组件当中要用的数据简化一下【方便组件获取数据】
const getters={
    //当前形参的state是当前仓库的state，并不是大仓库的state
    //假如网络不给力|没有网state.searchList.goodList应该返回undefined
    //计算新的属性值至少需要返回一个空数组
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}