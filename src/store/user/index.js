import { reqGetCode,reqUserRegister } from "@/api"
//登录与注册模块

const state={
    code:''
}
const mutations={
    GETCODE(state,code){
        state.code = code
    }
}
const actions={
    //获取验证码
    async getCode({commit},phone){
        //获取验证码的接口是把验证码反悔了，但是正常情况，后台把验证码发到用户手机上【省钱】
       let result= await reqGetCode(phone)
       if(result.code==200){
        commit('GETCODE',result.data)
        return 'OK'
       }else{
        return Promise.reject(new Error('faile'))
       }
    },
    //用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}