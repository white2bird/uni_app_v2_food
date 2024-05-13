# cc-defineCateList
# 
### 关注我的技术微信公众号

查看更多前端组件和框架信息，请关注我的技术微信公众号【前端组件开发】

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法

```使用方法

<!-- 此组件因为版权问题，请关注"前端组件开发"公众号，私信后获得授权 -->


<!-- data:商品列表数组[{navtitle:标题 shop:[] 展示列表}] @itemClick:商品条目点击事件-->
<cc-defineCateList :data="data" @itemClick="cateItemClick"></cc-defineCateList>


```

#### HTML代码实现部分
```html

<template>
	<view class="content">

		<!-- 自定义顶部搜索框 用于搜索跳转 skipUrl:跳转url为绝对路径 /pages开头 -->
		<cc-headSearch skipUrl="/pages/index/search"></cc-headSearch>

		<!-- data:商品列表数组[{navtitle:标题 shop:展示列表}] @click:商品条目点击事件-->
		<cc-defineCateList :data="data" @itemClick="cateItemClick"></cc-defineCateList>



	</view>
</template>

<script>
	export default {


		data() {
			return {
				// 列表数组 navtitle:标题 shop:展示列表
				data: [{
						navtitle: '精品推荐1',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '手机数码2',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '声学设备3',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '精品推荐4',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '手机数码5',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '手机数码6',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},
					{
						navtitle: '手机数码7',
						shop: [{
								shoptitle: "手机一",
								shopimage: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
							},
							{
								shoptitle: "手机二",
								shopimage: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg",
							},
							{
								shoptitle: "手机三",
								shopimage: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_1280.jpg",
							},
							{
								shoptitle: "手机四",
								shopimage: "../../static/image/p4.png",
							}
						]
					},

				]


			}
		},
		mounted() {

		},
		methods: {

			cateItemClick(item) {

				uni.showModal({
					title: '点击条目',
					content: '点击条目数据 = ' + JSON.stringify(item)
				})
			}

		}
	}
</script>

<style>
	page {

		background-color: #f7f7f7;
	}

	.content {
		display: flex;
		flex-direction: column;

	}
</style>





```
