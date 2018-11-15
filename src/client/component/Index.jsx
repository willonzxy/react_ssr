/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-15 14:56:35 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 16:15:24
 */
import React from "react"
import Helmet from "react-helmet"
const Index = ()=>{
    return (
        <div>
            <h1>Index Page</h1>
            <Helmet>
                <title>Contact Page</title>
                <meta name="description" content="This is a proof of concept for React SSR" />
            </Helmet>
        </div>
    )
}

export default Index