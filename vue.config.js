﻿const antdTheme = require('./src/theme.js')
module.exports = {
	publicPath: './',
	pwa: {
		iconPaths: {
			favicon32: './favicon.png',
			favicon16: './favicon.png',
			appleTouchIcon: './favicon.png',
			maskIcon: './favicon.png',
			msTileImage: './favicon.png',
		},
	},
	css: {
		loaderOptions: {
			less: {
				modifyVars: antdTheme,
				javascriptEnabled: true,
			},
		},
	},
	devServer: {
		port: "8081",
		disableHostCheck: true,
		proxy: {
            '/api': {
              target:"http://23.101.29.177/9f286966-2a2f-11ea-b04e-acde48001122",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }

		// proxyTable: {
		// 	'/api': {
		// 		target: 'http://192.168.101.5:8080', //设置你调用的接口域名和端口号
		// 		changeOrigin: true, //跨域
		// 		pathRewrite: {
		// 			'^/api': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
		// 		}
		// 	}
		// }

	},
	}
