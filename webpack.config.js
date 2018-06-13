const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AssetsPlugin = require('assets-webpack-plugin');

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
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        keep_fnames: true
                    },
                    sourceMap: true
                })
            ]
        },
        plugins: [...[
            new webpack.HotModuleReplacementPlugin(),
            new AssetsPlugin({filename: 'assets.json'})
        ], ...isDev(argv) ? [
            new BundleAnalyzerPlugin()
        ] : [
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ]],
        devServer: {
            compress: true,
            contentBase: './dist',
            hot: true,
            open: true,
            port: 9999
        }
    };
};