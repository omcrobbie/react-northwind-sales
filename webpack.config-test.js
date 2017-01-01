var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals:[nodeExternals()],
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
    }
}