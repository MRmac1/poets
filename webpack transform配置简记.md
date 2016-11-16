### webpack 配置简记

#### 支持react语法和es6语法

`需要安装babel转码插件`

1. 首先安装babel-loader主程序及babel-preset-es2015 babel-preset-react两个插件。
2. 在根目录编写.babelrc文件
{
  "presets": ["react", "es2015"]
}
3. 在webpack.config.js中配置loader
{
  test: /.\js$/,
  include: APP_PATH,
  loader: 'babel'
}
