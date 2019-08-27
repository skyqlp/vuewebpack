const path = require('path')


const config = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config