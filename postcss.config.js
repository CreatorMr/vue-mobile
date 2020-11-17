module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常看设计稿来
      // 750 宽度的设计稿  750/10  75
      // 375 宽度的设计稿  375/10  37.5
      rootValue: 37.5,
      // 配置你要转换的css属性， * 就是所有的都要转换
      propList: ['*']
    }
  }
}
