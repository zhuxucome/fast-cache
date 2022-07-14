/*
 * @Author: zhuxu zhuxucome@126.com
 * @Date: 2022-07-14 07:51:02
 * @LastEditors: zhuxu zhuxucome@126.com
 * @LastEditTime: 2022-07-14 07:58:43
 * @FilePath: \fast-cache\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}