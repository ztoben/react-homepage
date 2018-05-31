const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function isDev(argv) {
    return argv.mode === 'development';
}

module.exports = (env, argv) => {
    return {
        entry: [
            'react-hot-loader/patch',
            './src/index.js'
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif|ico)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.pdf$/,
                    use: 'file-loader?name=[path][name].[ext]'
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: 'url-loader?limit=10000',
                },
                {
                    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                    use: 'file-loader',
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [...[
            new webpack.HotModuleReplacementPlugin(),
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                uglifyOptions: {
                    keep_fnames: true
                },
                sourceMap: true
            })
        ], ...isDev(argv) ? [new BundleAnalyzerPlugin()] : []],
        devServer: {
            compress: true,
            contentBase: './dist',
            hot: true,
            open: true,
            port: 9999
        }
    };
};