const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    mode:'production',
    /* 入口 */
    entry:{
        index:"./src/index.js",
    },
    /* 出口 */
    output:{
        path:path.resolve(__dirname, '../dist/'),
        filename:'[name].[hash].js'
    },
    /* 模块 */
    module:{
        rules:[
            /* css 配置 */
            {
                test:/\.css$/,
                use:[
                    {loader:miniCssExtractPlugin.loader}, 
                    {loader:'css-loader'},
                ]
            },
            /* less 配置 */
            {
                test:/\.less$/,
                use:[
                    {loader:miniCssExtractPlugin.loader}, 
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            },
            /* scss 配置 */
            {
                test: /\.s[ac]ss$/i,
                use:[
                    {loader:miniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            /* file-loader 配置 */
            // {
            //     test:/\.(jpg|png|gif|webp|jpeg)$/,
            //     use:[
            //         {loader:'file-loader'}, 
            //     ]
            // },
            /* url-loader 配置 */
            {
                test:/\.(jpg|png|gif|webp|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:102400  // 单位byte  图片小于100k的时候转化base64编码  
                        }
                    }, 
                ]
            },
            /* babel-loader 配置 */
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env'],  // 单位byte  图片小于100k的时候转化base64编码  
                        }
                    }, 
                ]
            }

        ]
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, "dist"),
    //     compress: true,
    //     port: 8080,
    //     open:true
    // },
    /* 插件 */
    plugins:[
        new HtmlWebpackPlugin({
            title:"网页标题",
            template:'./src/text.html',
            inject:'true',

            minify:{
                removeComments:true,  // 
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            filename:'index_1.html'
        }),
        new miniCssExtractPlugin({
            //输出文件名称
            filename: "[name].css"
        })


    ]
}