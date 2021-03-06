const webpack = require('webpack');

// vue.config.js
module.exports = {
    pages: {
      index: {
        entry: 'src/main.ts',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    },
    configureWebpack: {
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ]
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */

                    /*
                    'primary-color': '#F5222D',
                    'link-color': '#F5222D',
                    'border-radius-base': '4px',
                    */
                },
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        // development server port 8888
        port: 8888,
        proxy: {
          '/api': {
            target: 'http://localhost:3005',   // 实际后台需要切换成真实后端地址
            changeOrigin: true
          }
        }
    },

    // disable source map in production
    productionSourceMap: false,
    lintOnSave: undefined,
    // babel-loader no-ignore node_modules/*
    transpileDependencies: []
};