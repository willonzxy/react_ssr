/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-12 12:25:24 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 13:27:56
 */
import React from "react"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import Layout from './component/Layout'

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}

ReactDOM.hydrate(<App/>,document.getElementById('app')) //hydrate 这个函数将会接受服务端渲染的react代码并挂载事件处理函数。
