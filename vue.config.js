const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // 路径根据具体需求更改
        path.resolve(__dirname, 'src/assets/styles/variables.scss'),
        path.resolve(__dirname, 'src/assets/styles/mixin.scss')
      ]
    }
  },
  pages: {
    index: {
      entry: './src/main.js',
      // template: 'index.html'
    },
    index2: {
      entry: './src/manoeuvre.js',
      // template: 'index2.html'
    },
  },
  publicPath: "./",
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })

    config.resolve.alias
      .set("@", resolve("src"))
  }
}