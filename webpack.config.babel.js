import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const defaultEnv = {
  dev: true,
  production: false
};

export default (env = defaultEnv) => ({
  devServer: {
    contentBase: 'demo/',
    inline: true,
    hot: true
  },
  entry: [
    ...env.dev ? [
      'react-hot-loader/patch',
    ] : [],
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        loader: env.dev ? 'style-loader!css-loader?sourceMap!less-loader?sourceMap' : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!less-loader?sourceMap'
        })
      }
    ]
  },
  plugins: [
    ...env.dev ? [
      new HotModuleReplacementPlugin()
    ] : [
      new ExtractTextPlugin({
        filename: 'bundle.min.css',
        allChunks: true
      })
    ],
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
});
