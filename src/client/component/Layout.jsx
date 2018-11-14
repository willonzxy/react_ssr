/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-13 23:04:26 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 13:11:50
 */
import React,{ Component } from "react"
import { Link,Switch,Route,Router,BrowserRouter } from "react-router-dom"
import HelloWorld from "./HelloWorld.jsx"
import Click from "./Click.jsx"

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
                </ul>
                <Switch>
                    <Route path="/" exact component={ ()=><div>test</div> }/>
                    <Route path="/hello" exact component={ HelloWorld }/>
                    <Route path="/click" exact component={ Click }/>
                </Switch>
            </div>
        )
    }
}