
const BASE_URL = 'http://localhost:8080'

 const request = (options) => {
	return new Promise((resolve, reject) =>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header:{ token : uni.getStorageSync("token")},
			data: options.data || {},
			success: (res) =>{
				
				const data = res.data
				if(data.code == 304){
					uni.showToast({
						icon:"error",
						title:"用户未登录"
					})
					setTimeout(uni.navigateTo({
						url:'/pages/login/login'
					}), 40000)
					return
				}else if(data.code !== 200){
					uni.showToast({
						icon:"error",
						title:"操作错误"
					})
				}
				resolve(data)
			},
			fail: (error) => {
				uni.showToast({
					icon:"error",
					title:"系统错误"
				})
				reject(error)
			}
			
		})
	})
}

export default request
