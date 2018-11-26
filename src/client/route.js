/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 21:57:44 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 15:14:34
 */
import HelloWorld from "./component/HelloWorld"
import Click from "./component/Click"
import Home from "./component/Home"
import Index from "./component/Index"

export default [
 /*    {path:'/',component:Layout,exact:true}, */
    {
        path:'/',
        component:Index,
        exact:true
    },
    {   path : '/home',
        component : Home,
        exact:true
    },
    {   path:'/hello',
        component:HelloWorld,
        exact:true
    },
    {   path:'/click',
        component:Click,
        exact:true
    }
]