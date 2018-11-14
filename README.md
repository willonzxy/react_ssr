# react_ssr
React_SSR版本控制

#搭建步骤
1、搭建基本客户端代码 v1.0

2、基于Koa搭建一个服务器、书写第一个react_ssr页面 v2.0 

(PS：我们并没有直接启动server.js ，而是通过index.js来启动server.js。在index.js中，
我们用babel插件来抹平client和server端的差异，保证client和server都能够使用es module和jsx。 但是是babel的现在都要用@babel开头的，要不然坑很多，除了babel-loader)

3、接入React Router // 这里需要client脚本配合了

4、接入React Redux // server提供一部分的state, 放进window.REDUX_DATA里client根据就这么一点点的state（状态）就可以渲染了