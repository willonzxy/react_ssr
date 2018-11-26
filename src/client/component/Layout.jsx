/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-13 23:04:26 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 15:15:41
 */
import React,{ Component } from "react"
import { Link,Switch,Route } from "react-router-dom"
import routes from "../../client/route"
import route from "../../client/route";
export default class Layout extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            title:'SSR'
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul>
                    <li><Link to="/hello">HelloWorld</Link></li>
                    <li><Link to="/click">Count</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
                <Switch>
                    {
                        routes.map(route=><Route key={route.path} {...route}/>)
                    }
                </Switch>
            </div>
        )
    }
}