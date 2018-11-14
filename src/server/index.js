/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-12 19:09:47 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 20:12:53
 */
/* const Koa = require('koa')
const route = require('koa-route')
const static_server = require('koa-static')
const path = require('path') */
import Koa from 'koa'
import route from 'koa-route'
import static_server from 'koa-static'
import path from 'path'

import React from 'react'
import { Provider as ReduxProvider } from "react-redux"
import createStore from "./store"
import { add } from "./action"
import { renderToString } from 'react-dom/server'
/* import HelloWorld from '../client/component/HelloWorld' */
import { StaticRouter } from "react-router-dom"
import Layout from '../client/component/Layout';

const app = new Koa()
app.use(static_server(path.resolve(__dirname,'../../dist')))

app.use(route.get('/*',async ctx => { // 这个/*这个星号很重要哈
    /* ctx.type = 'text/html' */
    console.log(ctx.request.url)
    const context = {};
    const store = createStore({count:{num:0}}) // 初始化一个store
    store.dispatch(add())
    const jsx = (
        <ReduxProvider store = {store}>
            <StaticRouter context={ context } location={ ctx.request.url }>
                <Layout />
            </StaticRouter>
        </ReduxProvider>
    )
    const reactDom = renderToString(jsx)
    const reduxState = store.getState()
    ctx.type = 'text/html'
    ctx.body = htmlTemplate(reactDom,reduxState)
}))

function htmlTemplate(reactDom,reduxState){
    return `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
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