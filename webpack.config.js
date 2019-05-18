const path = require('path');
const htmlplgin = require('html-webpack-plugin');
const webpack = require('webpack');

//const CleanWebpackPlugin = require('clean-webpack-plugin');//清理打包，没吃build都会清理DIST文件夹历史文件，只保留生成文件
module.exports = {
    //entry: './src/index.js',//默认只有一个入口
    entry: {
        app: './src/index.js',
        print: './src/print.js' //配置不同的入口
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js', //入口文件生成 规则
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // mode: "production",
    mode: "development",
    devtool: 'inline-source-map', //不要用于生产环境
    devServer: {
        contentBase: './dist'//以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问,我们可以在命令行中运行 npm start，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，
        // hot: true//启用HBR热部署
    },
    plugins: [ //插件配置
        new htmlplgin({
            title: 'output management'
        })
        //,new CleanWebpackPlugin(['dist']),
        // new webpack.NamedModulesPlugin(),启用HBR热部署
        // new webpack.HotModuleReplacementPlugin()启用HBR热部署
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};