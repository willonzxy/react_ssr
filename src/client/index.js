/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-12 12:25:24 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 14:56:02
 */
import React from "react"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";
import Layout from './component/Layout'
import createStore from "../server/store"

const store = createStore(window.REDUX_DATA)
const App = ()=>{
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </ReduxProvider>
    )
} 

ReactDOM.hydrate(<App/>,document.getElementById('app')) //hydrate 这个函数将会接受服务端渲染的react代码并挂载事件处理函数。
