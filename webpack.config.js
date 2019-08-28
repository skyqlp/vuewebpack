const path = require('path')
const HtmlWbpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    // 入口文件配置项
    entry: path.resolve(__dirname,'./src/index.js'),
    // 出口文件配置项
    output: {
        //打包路径
        path: path.resolve(__dirname,'dist'),
        //打包文件名
        filename: '[name].js'
    },
    //模块: 解读css 图片压缩 转换
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    //插件:生产项的模板各项功能
    plugins: [
        new HtmlWbpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 8080,
        host: '127.0.0.1',
        hot: true,
        inline: true,
        open: true
    }
}

module.exports = config