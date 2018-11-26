/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 18:10:01 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 14:43:36
 */
import { createStore , combineReducers , applyMiddleware,compose } from "redux"
import thunkMiddleware  from "redux-thunk"
import countReducer from "./reducer"
import dataReducer from "./dataReducer"
const reducer = combineReducers({
    count:countReducer,
    data:dataReducer
})
const middlewares = [
    thunkMiddleware
]

/* const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    f => f
) */
/**
 * 写成函数的形式是有原因的
 * 1、可以方便状态的初始化
 * 2、ssr的客户端就是要拿到服务器的部分残缺state
 */

export default (initState) => createStore(reducer,initState,applyMiddleware(thunkMiddleware)) 


