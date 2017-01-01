var webpack = require('webpack'),
    path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        './app/app.jsx'
        ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories:[
            'node_modules',
            './app/components',
            './app/api',
            './app/utils',
            './app/models'
        ],
        alias: {
            app: 'app',
            applicationStyles: 'app/styles/app.scss',
            actions: 'app/actions/actions.jsx',
            reducers: 'app/reducers/reducers.jsx',
            configureStore: 'app/store/configureStore.jsx'

        },
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback:true,
        contentBase:'./'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins:['transform-decorators-legacy']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader:{
        includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}