//存储token
export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token)
}

//获取token
export const getToken = ()=>{
    let result= localStorage.getItem("TOKEN")
    return result
}

//清除本地Token
export const removeToken=()=>{
    localStorage.removeItem('TOKEN')
}