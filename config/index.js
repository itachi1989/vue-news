module.exports = {
    //项目出口,webpack-dev-server 生成的包并没有写入硬盘,而是放在内存中！
    dev: {
        env: 'development',
        publicPath: '/',
        host: 'localhost',
        port: '8080',
        assetsSubDirectory: 'static',
        devtoolType: 'cheap-module-eval-source-map',
        proxyTable: {
					'/api': {
						target: 'http://localhost:8080/', 
						pathRewrite: {  
							'^/api': '/static',
						},
					},
					'/article': {
						target: 'http://localhost:8080/', 
						pathRewrite: {  
							'^/article': '/static/article',
						},
					},
						'/home': {
							target: 'http://localhost:8080/', 
							pathRewrite: {  
								'^/home': '/static/home',
							},
					},
				}
    },
    build: {
        env: 'production',
        publicPath: './',
        assetsPath: 'static',
        assetsSubDirectory: 'static',
        devtoolType: 'source-map',
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
    }
}