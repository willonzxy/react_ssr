/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-12 19:09:47 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 16:21:28
 */
/* const Koa = require('koa')
const route = require('koa-route')
const static_server = require('koa-static')
const path = require('path') */
import Koa from 'koa'
import router from 'koa-route'
import static_server from 'koa-static'
import path from 'path'

import React from 'react'
import { Provider as ReduxProvider } from "react-redux"
import createStore from "./store"
import { add } from "./action"
import { renderToString } from 'react-dom/server'
/* import HelloWorld from '../client/component/HelloWorld' */
import { StaticRouter,matchPath} from "react-router-dom"
import routes from "../client/route"
import Layout from '../client/component/Layout';
import Helmet from "react-helmet"

const app = new Koa()
let m = 0
app.use(static_server(path.resolve(__dirname,'../../dist')))

app.use(router.get('/favicon.ico',async ctx=>{
    return
}))

app.use(router.get('/*',async ctx => { // 这个/*这个星号很重要哈，让每个路由都经过这里
    /* ctx.type = 'text/html' */
    const context = {};
    const store = createStore() // 初始化一个store
    store.dispatch(add()) // 先自增1先
    const dataRequirements =                           // 这里是十分关键的，让本次需要渲染的所有组件都带上一个serverFetch函数然后全部请求完成之后，放进Redux，然后在吐出，妙哉，妙哉
            routes
                .filter( route => matchPath( ctx.req.url, route ) ) // 改写route配置文件就是为了这一步 filter matching paths
                .map( route => route.component ) // map to components
                .filter( comp => comp.serverFetch ) // check if components have data requirement
                .map( comp => store.dispatch( comp.serverFetch() ) ); // dispatch data requirement
    await Promise.all(dataRequirements).then(()=>{
        const jsx = (
            <ReduxProvider store = {store}>
                <StaticRouter context={ context } location={ ctx.req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        )
        const reactDom = renderToString(jsx)
        const reduxState = store.getState()
        ctx.type = 'text/html'
        const helmetData = Helmet.renderStatic()
        const tpl = htmlTemplate(reactDom,reduxState,helmetData)
        ctx.body = tpl
    }).catch(err =>
        ctx.body = htmlTemplate(`<b>error:${err}</b>`)
    )
}))

function htmlTemplate(reactDom,reduxState,helmetData){
    return `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                ${ helmetData.title.toString( ) }
                ${ helmetData.meta.toString( ) }
                <title>Document</title>
            </head>
            <body>
                <div id="app">${reactDom}</div>
                <script>
                    window.REDUX_DATA = ${ JSON.stringify(reduxState) } 
                </script>
                <script src="/bundle.js"></script>
            </body>
            </html>`
}

console.log('server running...')
app.listen(3000)