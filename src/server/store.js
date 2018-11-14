/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 18:10:01 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 19:01:55
 */
import { createStore , combineReducers } from "redux"
import countReducer from "./reducer"

const reducer = combineReducers({
    count:countReducer
})

/**
 * 写成函数的形式是有原因的
 * 1、可以方便状态的初始化
 * 2、ssr的客户端就是要拿到服务器的部分残缺state
 */
export default (initState) => createStore(reducer,initState) 


