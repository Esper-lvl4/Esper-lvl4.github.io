const webpack = require('webpack');
const path = require('path');
const ExtractCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

// Exctracting css with loader in prod.
const cssExp = {
  loader: ExtractCss.loader,
  options: {
    name: '[name].[ext]',
    outputPath: 'css/',
    publicPath: '../',
  },
};

// Plugins
const plugs = [
  new ExtractCss({
    filename: devMode ? './css/[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? './css/[id].css' : '[id].[hash].css',
  }),
  new CleanWebpackPlugin(),
];

const restochefPlugins = plugs.concat([new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './src/restochef/index.html',
  favicon: './src/restochef/assets/img/favicon.png',
  inject: false,
  hash: false,
  minify: false,
})]);

const lamplandiaPlugins = plugs.concat([new HtmlWebpackPlugin({
  filename: `index.html`,
  template: `./src/lamplandia/index.html`,
  favicon: './src/lamplandia/assets/img/favicon.png',
  inject: false,
  hash: false,
  minify: false,
})]);

const rules = () =>
  ([{
    test: /\.js$/,
    exclude: /node-modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
          ignore: ['/node-modules/'],
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /node-modules/,
    use: [
      cssExp,
      'css-loader',
    ],
  },
  {
    test: /\.styl$/,
    exclude: /node-modules/,
    use: [
      cssExp,
      { loader: 'css-loader', options: { esModule: false } },
      { loader: 'stylus-loader', options: { esModule: false } },
    ],
  },
  {
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  },
  {
    test: /\.(jpg|jpeg|png|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
          emitFile: true,
          esModule: false,
        },
      },
    ],
  },
  {
    test: /\.(ttf|otf)/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        emtFile: true,
        esModule: false,
      },
    }],
  },
]);

module.exports = [
  {
    mode: 'development',
    entry: {
      main: './src/lamplandia/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'lamplandia'),
      filename: 'js/[name].js',
      publicPath: './',
      clean: true,
    },
    optimization: {
      minimize: false,
    },
    module: { rules: rules(), },
    plugins: lamplandiaPlugins,
  },
  {
    mode: 'development',
    entry: {
      main: './src/restochef/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'restochef'),
      filename: 'js/[name].js',
      publicPath: './',
      clean: true,
    },
    optimization: {
      minimize: false,
    },
    module: { rules: rules() },
    plugins: restochefPlugins,
  },
];

module.exports.parallelism = 1;
