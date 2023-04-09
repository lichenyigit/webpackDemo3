const path = require('path');
//console.log('this is webpack.config.js path   ----   '+path.resolve(__dirname, 'dist'))
//安装html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //入口文件
    entry: './src/index.js',
    output: {
        //输出文件名称
        filename: 'main.js',
        //输出路径（绝对路径）
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',//development production
    module: {
        //对某个格式的文件进行转换
        rules: [
            {
                test: /\.css$/,//正则表达式
                use: [//use中的loader顺序是从下到, 依次执行
                    //js央视内容写入style标签
                    "style-loader",
                    //css文件转为js
                    'css-loader',
                ]
            }
        ],
    },
    plugins:[
      new htmlWebpackPlugin({
          template: './index.html',
      }),
    ],
}