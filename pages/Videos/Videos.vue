<template>
	<view>
		<view class="content">
			<view class="col" v-for="(item,index) in list" :key="index" @click="play(item.videoId,index)">
				<video v-if="currentId == item.videoId" style="width: 690rpx;height: 390rpx; display: block;" autoplay="true" :id="'video'+item.videoId" :src="item.video"></video>
				<block v-else>
					<image :src="item.img" style="height:390rpx;width:690rpx;display: block;"></image>
					<view class=" block">
						<view class="sanjia"></view>
					</view>
				</block>
				<view class="name">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getCurrentInstance,ref, reactive } from 'vue';
	export default {
		setup(){
			const instance = getCurrentInstance();
			const { $request } = instance.appContext.config.globalProperties;
			return {
				$request
			}
		},
		data() {
			return {
				list: [],
				currentId: 0,
				scrollH: 0,
				scrollTop: 0,
				height: 0,
				windowHeight: 0
			}
		},
		onLoad() {
			let that = this
			// console.log(this.$request)
			this.getList()
			// 获取可视区域高度
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight
				}
			})
		},
		onPageScroll(res) {
			// 获取滚动距离
			this.scrollH = res.scrollTop
			// 判断元素是否已经出了可视区
			if (this.scrollH > this.scrollTop || this.scrollH + this.windowHeight < this.scrollTop) {
				const e = uni.createVideoContext("video" + this.currentId, this);
				e.pause()
			}
		},
		onHide() {
			this.currentId = 0
		},
		methods: {
			play(id, i) {
				this.currentId = id
				// 获取当前播放视频 元素距离顶部的高度
				if (this.height == 0) {
					uni.createSelectorQuery().select('.col').boundingClientRect((res) => {
						this.height = res.height
						this.scrollTop = res.height * (i + .5)
					}).exec()
				} else {
					this.scrollTop = this.height * (i + .5)
				}
			},
			getList() {
				this.$request({
					url: '/resources/getResourcesByType',
					method: 'POST',
					data:{
						pageNo: 1,
						pageSize: 100,
						type:[1]
					}
				}).then(res=>{
					this.list = res.data.map(item=>{
						item.img = item.thumbnail;
						item.video = item.href;
						item.videoId = item.id;
						item.name = item.title;
						return item;
					})
				});
				// console.log(this.list)
				// this.list = [{
				// 	name: '你相信有灵魂伴侣吗',
				// 	img: 'http://localhost:8080/static/第二个座驾.jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=5544&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '1'
				// }, {
				// 	name: '2020 奥斯卡提名动画短片：「勿忘我」',
				// 	img: 'http://img.kaiyanapp.com/4bb009bdb0518331f05195e1c3b8dd2d.jpeg?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=184884&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '2'
				// }, {
				// 	name: '2020 奥斯卡最佳动画短片提名：「女儿」',
				// 	img: 'http://img.kaiyanapp.com/e573ac166b01c8e33f1756f542004e8e.png?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=186094&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '3'
				// }, {
				// 	name: '获奖搞笑恐怖动画短片：「死神来了蜗牛版」',
				// 	img: 'http://img.kaiyanapp.com/52ef4e573ed5d4189413ebeeab9ae7f2.png?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=189046&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '4'
				// }, {
				// 	name: '科比 NBA 职业生涯的 40 个好球！',
				// 	img: 'http://img.kaiyanapp.com/ad8bd426e87829e0ba1f480f003da216.jpeg?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=185895&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '5'
				// }, {
				// 	name: '高燃女性群像混剪：The Lady「平权之声」',
				// 	img: 'http://img.kaiyanapp.com/ccbc65d60ad0af98b8b40dd8842068d8.png?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=190478&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '6'
				// }, {
				// 	name: '战斗女神踩点混剪：性感女神，在线揍人',
				// 	img: 'http://img.kaiyanapp.com/51ed6d181e19d635ff56528762f4f6b6.jpeg?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=182072&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '7'
				// }, {
				// 	name: '换个角度看印度，友好包容的文明古国',
				// 	img: 'http://img.kaiyanapp.com/940ccd4fc7f78b17aeea1d1544b1c7bb.jpeg?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=173634&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '8'
				// }, {
				// 	name: '泰国温馨广告：祝你生日快乐',
				// 	img: 'http://img.kaiyanapp.com/fd70a1e670f6c9cc0a272495a257d4c3.png?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=187719&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '9'
				// }, {
				// 	name: '卡妹最新 SNL 现场首演强势新单「Easy」',
				// 	img: 'http://img.kaiyanapp.com/c51d878668c73578be66b87ea1119ac1.jpeg?imageMogr2/quality/60/format/jpg',
				// 	video: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=175743&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
				// 	videoId: '10'
				// }]
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f2f2;
	}

	.content {
		padding: 30rpx;
	}

	.name {
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 0 0 10px 10px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 14px;
	}

	.col {
		overflow: hidden;
		position: relative;
		overflow: hidden;
		margin-bottom: 30rpx;

		.block {
			position: absolute;
			width: 100%;
			height: 390rpx;
			background-color: rgba($color: #000000, $alpha: .3);
			left: 0;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;

			.sanjia {
				width: 0;
				height: 0;
				border-top: 12px solid transparent;
				border-left: 17px solid #FFFFFF;
				border-bottom: 12px solid transparent;
			}
		}
	}
</style>
