const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname,'app'),
    entry: {
        app:[
            './js/controllers/SignUpController.js',
            './js/controllers/AboutController.js',
            './js/controllers/ChatController.js',
            './js/AngularApp.js',
            './js/FirebaseApp.js',
            './js/FirebaseConfig.js'
        ]
    },
    output: {
        filename : './app/dist/FirebaseApp.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
           $ : 'jquery',
           jQuery : 'jquery'
        })
    ],
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};