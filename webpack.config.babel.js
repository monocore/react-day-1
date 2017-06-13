import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';

export default {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'demo/',
    inline: true,
    hot: true
  },
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
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
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  }
};
