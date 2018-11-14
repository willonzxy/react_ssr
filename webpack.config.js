/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-12 12:10:18 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 13:30:50
 */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {WebPlugin} = require('web-webpack-plugin')
const path = require('path')
module.exports = {
    context:path.resolve(__dirname),
    entry:{
        main:path.resolve(__dirname,'./src/client/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    resolve:{
        extensions:['.jsx','.js']
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:'babel-loader?cacheDirectory',
                include:path.resolve(__dirname,'src'),
                exclude:path.resolve(__dirname,'node_modules')
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        /* new WebPlugin({
            template:'./src/client/index.html',
            filename:'index.html'
        }) */
    ]
}