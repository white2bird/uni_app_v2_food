<template>
	<view>
		<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]"
			style="height: 100rpx;background-color: #0f1A1E;margin-left: -1px;width: 101%;margin-top: -1px;">
			
			<view class="search-form round" style="width: 80%;margin-right: 12rpx;">
				<text class="cuIcon-search" style="font-size: 38rpx;"></text>
				<input type="text" placeholder="输入搜索的关键词" confirm-type="search"/>
				<text class="cuIcon-camera" style="padding-right: 2px;font-size: 38rpx;"></text>
			</view>
			<view class="cu-list grid col-2" style="width: 20%;background: transparent !important;">
				<view class="cu-item">
					<text class="lg cuIcon-scan" style="color: #ffffff;margin-top: 28rpx;font-size: 40rpx;"></text>
					<text style="color: #ffffff;margin-top: 0rpx;font-size: 18rpx;">扫一扫</text>
				</view>
				<view class="cu-item">
					<text class="lg cuIcon-message" style="color: #ffffff;margin-top: 28rpx;font-size: 40rpx;"></text>
					<text style="color: #ffffff;margin-top: 0rpx;font-size: 18rpx;">消息</text>
				</view>

			</view>
		</view>
		<view style="margin-top: 80rpx;">
			<view class="unicorn-header1">
				<scroll-view scroll-x class="text-white nav bg-blue" scroll-with-animation :scroll-left="scrollLeft" style="background: transparent !important;">
					<view class="cu-item" :class="index==TabCur?'unicorn-font-size cur':''" v-for="(item,index) in tabList" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item.name}}
					</view>
				</scroll-view>
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" v-if="TabCur==0" :autoplay="true"
				 interval="5000" duration="500" style="height: 120px;min-height: 100px;margin-top: 5px;">
					<swiper-item v-for="(item,index) in swiperList" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>

			<view v-if="TabCur==0">
				<view class="unicorn-header2" style="margin-top: -1px;">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
					 duration="500" style="min-height: 200rpx;background: transparent !important;height: 420rpx;">
						<swiper-item v-for="(item,index) in menuList" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
							<view class="cu-list grid col-5 no-border" style="background: transparent !important;">
								<view class="cu-item" v-for="(itemsub,indexsub) in item" :key="indexsub" style="display: flex;align-items: center;justify-content: center;background: transparent !important;">
									<image mode="aspectFill" :src="itemsub.url" style="width: 100rpx;height: 100rpx;margin-bottom: 10rpx;border-radius: 50%;background: transparent !important;"></image>
									<text style="color: #ffffff;">{{itemsub.name}}</text>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<image mode="widthFix" src="/static/unicorn-page-shop-jd/title3.jpg" style="background: transparent !important;width: 100%;margin-top: -1px;"></image>

				<view class="unicorn-body">

					<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2">
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">我的频道</view>
						<view class="action">发现更多频道<text class="cuIcon-roundrightfill lg text-red" style="color: #F34C77;"></text></view>
					</view>
					<scroll-view class="floor-list  unicorn-br-3 unicorn-br-4" scroll-x style="background-color: #FFFFFF;margin-bottom: 24rpx;">
						<view class="scoll-wrapper">
							<view v-for="(item, index) in pindaoList" :key="index" class="floor-item" @click="navToDetailPage(item)">
								<image :src="item.url" mode="aspectFill"></image>
								<text class="title clamp" style="text-align: center;">{{item.name}}</text>
							</view>
						</view>
					</scroll-view>

					<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2">
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">为你推荐</view>
					</view>
					<view class="guess-section unicorn-br-3 unicorn-br-4">
						<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
							<view class="image-wrapper">
								<image :src="item.image" mode="aspectFill"></image>
							</view>
							<view class="bg-white" style="padding: 3px 0;padding-left: 5px;">
								<view class='cu-tag round bg-red sm' v-if="item.tag" style="background-color: #F65E2C;">{{item.tag}}</view>
								<text class="title" style="line-height: 50rpx;">{{item.title}}</text>
							</view>
							<text class="text-price price" style="color: #e54d42;padding-left: 5px;">{{item.price}}</text>
						</view>
					</view>
				</view>

			</view>

			<!-- 手机 -->
			<view v-if="TabCur==1" style="padding: 0 10px;margin-top: 8px;">
				<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2">
					<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">品牌精选</view>
				</view>
				<view class="cu-list grid col-4 no-border unicorn-br-3 unicorn-br-4" style="padding-top: 0px;">
					<view class="cu-item" v-for="(item,index) in ppjxList" :key="index" style="display: flex;align-items: center;justify-content: center;">
						<image class="unicorn-image" mode="aspectFill" :src="item.url" style="width: 100rpx;"></image>
						<text>{{item.name}}</text>
					</view>
				</view>  

				<!-- 限时抢购-->
				<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2" style="margin-top: 8px;">
					<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">限时抢购</view>
					<view class="action">更多<text class="cuIcon-right lg"></text></view>
				</view>
				<scroll-view class="floor-list  unicorn-br-3 unicorn-br-4" scroll-x style="background-color: #FFFFFF;">
					<view class="scoll-wrapper">
						<view v-for="(item, index) in xsqgList" :key="index" class="floor-item" style="width: 185rpx;padding: 0 10px;">
							<image :src="item.url" mode="aspectFill" style="width: 185rpx;"></image>
							<text class="title clamp text-price price" style="text-align: center;color: #e54d42;font-size: 14px;">{{item.price}}</text>
							<text class="title clamp text-price" style="text-align: center;text-decoration: line-through;">{{item.oldPrice}}</text>
							<view class="pro-box">
								<view class="progress-box">
									<progress :percent="item.rate" activeColor="#fa436a" active stroke-width="6" />
								</view>
							</view>
							<text class="title clamp" style="text-align: center;">已售{{item.rate}}%</text>
						</view>
					</view>
				</scroll-view>

				<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2" style="margin-top: 8px;">
					<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">手机配件</view>
				</view>
				<view class="cu-list grid col-5 no-border unicorn-br-3 unicorn-br-4" style="padding-top: 0px;">
					<view class="cu-item" v-for="(item,index) in sjpjList" :key="index" style="display: flex;align-items: center;justify-content: center;">
						<image class="unicorn-image" mode="aspectFill" :src="item.url" style="width: 100rpx;"></image>
						<text>{{item.name}}</text>
					</view>
				</view>

				<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2" style="margin-top: 8px;">
					<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">手机榜</view>
					<view class="action">查看全部<text class="cuIcon-right lg"></text></view>
				</view>
				<view class="cu-list grid col-3 no-border unicorn-br-3 unicorn-br-4" style="padding-top: 0px;">
					<view class="cu-item" v-for="(item,index) in sjb1List" :key="index" style="display: flex;align-items: center;justify-content: center;">
						<image class="unicorn-image" mode="aspectFill" :src="item.url" style="width: 200rpx;height: 200rpx;"></image>
						<text class="text-price" style="color: #e54d42;">{{item.price}}</text>
					</view>
				</view>

				<view class="cu-list grid col-5 no-border unicorn-br-1 unicorn-br-2 unicorn-br-3 unicorn-br-4" style="margin-top: 8px;">
					<view class="cu-item" v-for="(item,index) in sjb2List" :key="index" style="display: flex;align-items: center;justify-content: center;">
						<image class="unicorn-image" mode="aspectFill" :src="item.url" style="width: 150rpx;height: 150rpx;"></image>
						<text>{{item.name}}</text>
					</view>
				</view>

				<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2" style="margin-top: 8px;">
					<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">京东惠选</view>
				</view>
				<view class="guess-section unicorn-br-3 unicorn-br-4">
					<view v-for="(item, index) in jdhxList" :key="index" class="guess-item" @click="navToDetailPage(item)">
						<view class="image-wrapper">
							<image :src="item.image" mode="aspectFill"></image>
						</view>
						<view class="bg-white" style="padding: 3px 0;padding-left: 5px;">
							<view class='cu-tag round bg-red sm' v-if="item.tag" style="background-color: #F65E2C;">{{item.tag}}</view>
							<text class="title" style="line-height: 50rpx;">{{item.title}}</text>
						</view>
						<text class="text-price price" style="color: #e54d42;padding-left: 5px;">{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import unicornJson from './unicorn-page-shop-jd.json';
	export default {
		data() {
			return {
				swiperList: unicornJson.swiperList,
				tabList: unicornJson.tabList,
				menuList: unicornJson.menuList,
				pindaoList: unicornJson.pindaoList,
				goodsList: unicornJson.goodsList,
				ppjxList: unicornJson.ppjxList,
				sjpjList: unicornJson.sjpjList,
				sjb1List: unicornJson.sjb1List,
				sjb2List: unicornJson.sjb2List,
				xsqgList: unicornJson.xsqgList,
				xsqgList: unicornJson.xsqgList,
				TabCur: 0,
				scrollLeft: 0,
				CustomBar: this.$cuCustomJS.getCustomBar()
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	
	
</style>

<style lang="scss">
	.unicorn-header1 {
		//background-image: url('/static/unicorn-page-shop-jd/title1.jpg') 本地图片无法，此处要么使用base64，要么使用http远程图片地址
		background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4AAQSkZJRgABAQEASABIAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIA6sEZQMBIgACEQEDEQH/xAAxAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQIAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/2gAMAwEAAhADEAAAAPzuOjhAQBFQUAAAAIAqKtgQAAAANQipSFpKCWECLTLUWLAJQUJQAAAAAUACKSAAAAAAAAAoAZqWxYSigsqVAAAAAAAUEAAAAABQQFBEsBFQUASKlAAoAAIAAACgAFgqBYKgqC2CwChKiSliiBQlCUAAAAAAABKIsAAAAAAKlAQpJZUqWgsBFiqlAQFBAAAAUEBQAQFBABFAQVACEALViSoKlAAoAAIAACgAAAAFlFQUICoFCCVNQiyUFCUAAAAAAABKIsACwAAWCoLYKGRCixZbCCiyoKEBQQAFBAAAAAAAWAEVCUQAAACgAFiSpQKAAACAAAAAAoC0kBQAJQCpSEVctQglBQlAlQoAAAAAEoiqggAABYKAEBApYsqVKlsWEoAAAAUEAAABQQCEW5qWBpLAEAACgAAARYKAAAAIAAALAAKtzUoAgFAAASiKEsWKIJQmgAAAAAAAAtAikggAACpQQqEsKqWyoZ0iqEqUBAAAAUEBQQADIaQllFJSBAAoqQgssAACgQooAAAIAAAAAAWLKQtyNIKIBQEolQpBNRYsAmgUAIC0AAAJAoKSoggAAAAAALKhLc2ypUosqChAAUEBQEoBAXKlyqWBUoikiiFRAFJQJQQWUAAACggQoAAAAAAAoAC3NSiAUABKCUSlyoixQAUFAACAAAAtCIskAAAAAAAWLKlsqGdIstgqUBAAAAAADRrDQzNJcqJNQikgAAAIoSgAAAAAAQoAAAAAAAoAUgLc1KJQAAEoSqASlk1CLJQUAJQgNAAgFCgiCQsAAAAAAAsqWxYS2LKEqVAUEAABQNqIok0MzcMNIw1DLUWLKiiCAAAAAAAAAAABCgAAAAACgALc1KIBQABKUAAEpcrIBQUFAAACAtASzMAAAAAAAACgSpbmpUosWCpQEABQN3NNM2qBKSTSXM0MzUMtQy1CTUJNRYsAgAAAAAAAAAAAAAAAAAKAqDTJNSCwVYKg0gpCgiiSliyAUFBQAgKCUIixAAAAAAAAAoEqWxYZtlsAqUABAFyb3cE3cVNIqpQISiLCKMtRMtRctQyogWLAsgAAAAAKAAACAAAAAFiigARKCLAApSUAAsoSiTUlixQAUFihKiVIoWKSAAAAAAAAAWLKlRYstlQLKlAZBconppmlubZbkauSauRpmpUFACJSRS5mi5moRRAsAlQACAsWAUAEAAAAAALBUtAAgi1BUFCLAAsFCygAlLBEWKCgoQAAAEJQlEoAASglgAAsJUtiy2LCVLYsJQYSz1AAtzUqC2EqK0zU0yTVzSoSgAijKlyoyokpYsQIAAAirYsAAAAAAAFiKirAAAAAqChAKFAAAAixUslCULQAAgAIAAAAAASiAABKlsCypUqWgTImwAAAKhalSoSpUqK0zU0yNISigUCLCKjLUIoiwiiUlSiKSSiKtgAAAAAAAAUIAFSUCWwoAAABQAIqWTUIsUFBQgAAIAAAAAAiwAAWEqWgsqVKhILQAgAFqVQIEqVASoLYsqDSCoKKAAACIok1CKIFCAsASiTQysUABYAAlAAAAqChCWqlQAAAAAFASpcqIsUFBQgILAAAAABKIAAACxbASosCgBYlACUmrACgZXItlSJaqCgAqEtiqlRYWgKSKjKjKlk1CLAAABKIsIpYogAlBQUAsQEAFQKWEqCgAAABQAJNRYsgFWFWWUIiiKIoiiKICKIoiwAUAsKCtYiiKliiLAAFAABAEpCWggKWVAKirYKlKhNISgSoy1FyokpYogAUCLABLAJQVZVCAIsoEBAsqCgBKAAABYLKIsVKIJZRQUIBQgABKIoiwAAAAFSC3ateUUsEJRFEUsAlCWAAAWWKQsQqSlAALBUVbBbmpbmlSoBFElLJqRAqUQKlEmoQASirFLKQQWURZYACBYoEqLKAALKAAAJRAsWSxSgAoQAAAEBUUQSgLKBYB0VrziwSiKJNDKiKWAioixYqopJQikioiqAAAAWCpaqC2EtzSpUBYFiyIsEogVKIsIFCAUFAAABAQAKoQCpUAqUAAAASiBUqWLCKUsUAAAIWAAoysWhACjol15AAkUsoRRFLJqEUZahFLJqEURYgAAAKACAAVKAVBbFlQaQpLEWEUSaiyUJYRSwsRRFgCgAAAgpFEoWFgFQlAsFSgAAAEUsWKlRKgCgAAAoQWCyiFKhRG0a8rYKhKACxQACKWKMqMtQijKliiAiiKWAABAAFgqCoNIKlAAAUCKMrBKIFCAIsAAAAAKlUEAACxQBAKAAAAACLFCVKIsAAAFhaFASwFIqNDXmBUJUJpBUFsFSgAAUERRJoZUSaLlSyURYJRFCURYAAoAFRFS1UFACAJRJqLJqEWAKlRAAAALC6irKJFEUkUSy2EFCLBUoABQRYARSwQCpQBCkUSigoAAFF86gqChFg0zRYsqUqCgWCoKBKIoijLUJNFzNIypcqIsEoiliiABQgChVhKLKlSVSSiLFk1CLAFk1CCACiVVlFASwUQESiKslgoQCpQBYKCKIACKWLJQoECUAFoUACFuAAQCoSgWEtyLYqpSoKCoKlQAoiiKJNRZNDM1CTUlkpYsEpYAJQAAFgtiqDUlQEASiSlypYIiwAFUFAAAAlEBAQKlABUSpQBQAAiiLAFiwACUChQUACKuYsRYKlQABYSpQBYstyNIKCoLYSgqUAFIsEoy1FzNFzNIzNRYsAWKliwFIogqgqUqEtgKSKMrCLFipYsAUFLAAAAAGQAQAKWEoAFAAACUIogWKIqIpQAUACUuYoiwAWEoAAKgqVAFhFiqlKg0lKhNINIKACKJNDM1Fy1FzNyXKjKliyUAKACAFirc1LYKESiSiTUWBQllAFiiKIsFlIsQEAFSFIKoQCgAAAAASiLAJQUAAAALAAIohUAAAAAAqCpUWCpbFlFgqUqE0g0goAAIozNFw0XCpcqXKiLAAJQAAqpSoS2LKCLISiTRcqlgUABAAAABBSUSCxZQBYKAEBAAoJQWKIqWBQAAKq5k0MqIoiiKIogAAAAAFlAsqVAKgtzSpSpUtyNJQCxSKJNQzNFzNSXKlypcqIqIsUAFCyoKEqWypQITUIsWLJUoiwASiLBZRKIoBEqyKAAKAEBABQilJUogUJYolhaDStYiok0MqIok1CKIsAEpYsAAAFgoAsqEoFgqUtyNXJNXNLYKABKMqMzRczUlzNxcqWCWLAAAKWCpUqK1ck0AIijM0XKwiogAAUAAALAQACpQAEBAFKWCwUqMtRYIBQNjWAAAAIqIok0MtQypYsEoilgAKAECgFgqVKgtgtzUtg0zoqUBAIpZNQzNRctSXM0aypYIAAACgKhNXNsoQpYozNSJNQkoixQgFABAoEAAWCgBASgCllAAgFgIpYF2i4qUAAWUBBSKJNRZKIqMqMqIpYsAoFAACBLKEtzSpRZUqUtzS3NKEAASlzNFw1JczcXM1FipYsAAAoCoTVzbNJSpUk1CSozNDKxYsAlAACgAQUiiUAQEqUWUAChSCEoixQWi5AAqCpUWC2DSCxTKxUoijKiLCKEsEpYAAJQQLAKgtQ0gthNINJSpUAAFMzRczUazNyMrFSyWKWACgALc1LYs0lKlRNRJNQzNSXLUWSiKiAC0qIoiyqEABAQoWCigAAAAgF03LnM0MtQk1FiiUASpSoKlEoiiKIpcqJNQijKiBYqIFABAsqUqUWC2EtgtzS2C3NSpRKJKWTUXM1Fk1JYFkpYsAAALYLYs1caShBUyozNSXM0XKyEoBQAAoEABASpQCgCgChKIoA7Ta4xOkjE6RcTYxNxctQijNoiiUAFlAIoiiTUJNDKlzNDKlixBYk1AAKWCgWChKlKlKlKhKAACLFk1Fk1Fyslily1FiwAWCgqVLrGrLZUBIozNSXM1CSliyAUAAKBFlQCKQCgACqlAAAj6Vu/PKiKjLRcTpDm2jnOkXDcMNDKiUWUAAQApYCKMqJNFyoyok1BKIoAAAWEoKgtgtzS3NKlQCyiKMzRczUXM1JqLBKWTSMqWUqpUWDVzbNJUqVJNDOdyMNRcrFiiKiUIKKAAQEAqUCgAKAEA+mxrFuaUIUSaLmaGWhibRibLibhlqGWpLlqEoAAAAJRFLJoZmhlqLlqEmoRRFEUkUAALBQVBpBbCWwUAEmi5mouZvMsmosChEWKFUIsGrm2aualSomhnO4Ym8yyUsURYSgAAAKkUkoAKUAACUV2ubc25qW5G2RpCW5pUolEmosmhmaGZoZm5GZuLlqRlqLFEUSgAKSahFGWi4ahloZmhlRFEWAAFQUAFsosJbFUAQlGVLmakuVixSyVLFlAVBbBq5tmrmppKiUmZqLnO5LlS5URRFEURRFiUIFBFAFgKsJVG0us25GkGkJUGmaaZppmmmVaZqWKRRloYaRhqLloZmkuVEVEFCkURRFEmi5mkYaGZqEmosUQCURYUACwWwW5qWwWwUEBJqLlS5mpLJqLFhFLFAFSlubZq5qaSoCZm4uJuS5lLAAgAAIAAFLBQAhQBtWoAACLBUGmRpmmrimripq5Vq5qWwUWRS5m0Ym4Zm5LlqGVRFloIAoFEVGWi4m4YnSRhqLlRCKWAAAAFuaVKlSlQUAEUZai5mpLlqLJSwKAAspbm2auamrms2UZmouZqLlZEWAWAFEUkUAAAoCyoB1VrOWhlqEUsWCWAQQVBq4pu4JvXPVmri1u4qaS2FCaRmaGZuLhqRlqLlRAAVKAFEUZahmaRibkuFiyhlYoAABKVBbCaSiwUoKSaGGi4moZm8rFksWKC1BQW5qaubZpKyBJqGZouZRAAAgAAAAAKCaQd1axFEAlEmi5mouWsxFksAuatuSauVm7ipu4tm7i2b1zpu5qVLRRmbhmaRibi4aksWAAFsFCFGZuGGpLmaLzbzGZqLJqLARYALBbBpBbKluaWygqRRmbi4mouZqLlZKCxYtgVKlubWrmppKgJFGc7i5WCUkUARYAAACkoAfSr084ok0lyoijKozNxcTeZczUlysUBYLck3cVN3CzpcWzesE6XnbOjGq0hKCTQzNyXm3Fw1Ik1FAqVKlBSTQzNDnOmZcTclxNRczUWAAAAWDSE0lLc2tXNSlSKlzNQxNxrClzKlgVLFLCpUtzU1c2zSVKUzNQk1DM1CLAABKJQAAAA+tp6+WWkZaLlRloZmhhpLibkuJvMYm8zWVElKQWwW5qXWKm7i2buLZu4tm9c7Z0ZqauagpM6LmaS4m5LmahFKCW5pQUqZmi850zLjHSLzm8y5mosAAAAsosqW5pbFmrmpbBZRM6S4mo1mai5WSwKCgLCWwmrm2aualKkmhibhhqLlRFEUQAAAAH3uj25+c6RcNyXLUMtDM0lzNDE3FxN5lxN5zcTeZrLWSLFAWC3NS3NNXFTdxbN3Freuduemuds3cVNJUAk1FmdyXM3mWLAC3NNJSpUk1FxnpkxnpmaxnclxN5IpYsAFhKC3NLc00lstiy2Cyomd5lzNRrM1FyslixQAVZUWVLc2zaVKVJNRMzUXM1CFWShAAAAA9d1ntycp2i8XWHF1i8p1i824uGkYm4uM9MzWM7zLibzm4azNSahAoEUAlSlQauVm7i2b1zqdLi2b1ztm7jSVKgEmkuJvK5aksWFQauaVKiC5m4YzuLznTMuGsyxYsWACyoBUpbmlsWaualsFgSakuZqNZmoslSxYsURQBbFmrmpu5rNLcyai4m8y5WAKlGVgAAB76ujhy0XE6SOc6F5TrJeU6xeU65XlOsXlnrmXlnrma5Z6ZmsZ6ZzcNSXKlk1CKIsAFgqUqUtzbNXFs6XBOlxbOl56uds1KBKXM0lw1JYABYKlAJNQxNxcZ6SXnN5lkpYAABYSpS3NLYs1c1KloJZNSXM1FyqXKxUsUABZRrNudXNTaW5oSTUXE3mMrFBUogIoA964vRw6ZppAAmhhouJ0hzz1kvHPfE1wz3w1wz2xnXGdcTfObmbibzLFLFglEWCURYLBpBbmpq4tm7i2b1ztdLi3PS4qaSoBJqS5akuVLAAVKAJRibi4z0zLibzLmahAohQCgJUpbCWy2VKBLFhlqLmak1lSwEClCy2LKzq5rOrnWoBJqS5mpGFLAIKAB7V5334t3CujFNsaTVxTSLKUk0XE2l5Y7Zl4Y+jE18+PoxN/PnvjO+U6ZlxNyXDSXKjKiKJKWLAACoS2K1c2zdxU3rnqzdxbN3GkqVIqMqXM1JctRQKlARKMzUazncl5zeVzNSIFAqUBAFlLc1LZUqUFJNFw1Fw1JcrFk1FBQsqVm2E1rNs0lsAk1JcTeYkpYCKIo9Ue/LUWauRtkm7imrim7i2bY1WmbIlkuc9MzXPHbEvHHfM3wx9GJrhO2ZrlOmZcTclzNIw1CLFiwSliiKJYLYS6ys1rFs3cU3rnbOlxbNXNZsok1JcqlysUBYKADM3FxncjGemJctZWKWKIBUSgqUtlS2EtloBKXM1JczUlysWKWCyhFlRrNTVzbNJaAmdIxN5lkpYsAPVV78gUAAsFuaauKm2KbuKaZGpIWJKzqS5z0kvLPbMvHPfLXDPfOdcHTK4m5Libi5mpEUslEWKAACVLZbmmtYtm7i2b1i2bZ0lSpBLJqS5WKIWwVKJVZmpGc7kuJqS4UsCxRFEUiwWyluamrmpRpVhFkuZqS5mpLlYqUABZUqXWKmrnVlS0lEzqRmaksCxR66ujjijLUIok0MtQlBQIKyl1MF05pel5U6MU0lkZ0XnntmXjnvlrhnviXjOuZrnOmZczSXDUMqWTUIpYsQBYLYs1rFTdxa3rnqzdxq5oQFk1MstRqAWCpRKJnQxNSaxN5lzNQgAWFAFlLc1NXNS2WypaAglzN5lzNSWSlgASpbFlS3Ns1c0qWkqMzUjKxYpfZmnTw5aGVEWSxRFGWoRYsWLmaxKzcTSTLW3NHa8ad9cNM9ry2m2dEmhzz2yvHHfMvDPfE1yz1zNc2pLmaS5moSaixYRYALKLBq5WbuLZvWLZu41ZpKgRFiyWSgAVKJRmai5mpLibzLlYsAAABUpbKlsqVLZbm0moRZLmbzLmakuVLAVKgWUJbm2aubVAlkSakZUvuTbq4cTYw3DM3FzNDLUjLUJNIzNZXOd4m8Y3iazjWZuRJu3KOmuOk7a4aue+uOrntrju52zok0jnnrmXjntmXjntia5TplrDUlzNyXM1CTUWASggoLc2zVzTWsWzdxqzSVKgSiSpYolgoIozNSXM1JcTUXM1JYstACFgthNJbNJUqLLrNosJNTNzN5XM1JqAABFiylRrNstzaoEqMqj3ldXBJoZm4ZaGJuLhuLmai5mhiambjG8zfPG8TeMdMTeZZnUlkqwa1gnTfJqd9cN3PbXHTPa87Z0kskztHLPXK8c9szXLPSTXObyuWpLlUZmouWoslEWFQauaauLZu5tmrlZu5qW5oUZakRYAAJS5zuS5zuS4m8tZmpEChQQsosqW51ZUrNsVS1JqEmpLmakuZqTUURQCLFlSpbm2Wy0AB7yOn59sFSkUSahJS5mkuJqLiazNYx0553jn0xN4xvM3iamdZWSxSwFQmrknTfHWp21w3c97x2z1c9WahJM7hzz1zNcp0kvLPXM1znTK5mkuZqRJqLlSwALbmpdY0W5tmtYtzu5tlsoKkWRJqECgJRmbzNZmpLibzNZWLFgAsoBbCaS3NsWWxVspFkSai5m8yyVLAoEUgWUJpLZUtAe4zengtyNXI0zSoKkLElRFmbJrGOmM7546YmueemZ6c5vMuZpLmaksWEUsAsJrXPVnTXK2dtcd3PXXHVz0ZrNVGc9JHLPbLXLPXM1ynSTXNqS5moTOkuZqLFEUoJbmpq5tmtZtmtY1ZpKhSSUZVLASipYZm8zWZqS4mpNZWLFgsoAsqLFmrCWy2Wy2AJS5WTWWsxJU1CkACBZpmpq5tlFezZOjh0yNMjTI0wXbml3MRekxJdzCW5RZnUmsZ3GsZ6Sa556yXnNyXE3DKyWTUIsUC3NTVys63lqztrjq4675aud2WZZ2OeO2ZrjntlrjOuM65zplczUlzNSWTUIFAAus01c2zWsW53rGrm2VASTUWLIixQIslzN5azNSXE3JrMogUACpUazqy2EtizVzbLKJNRcrM6y1mWLlUolAlRYsusaSg9knTxWIWQWSLqZzLuYzLtzkvSc4vWcy9HMvRimoALJpHOdJNcp1yvPPSS4mpGVLJqEUAW5prXPWs9N8d3PbfHVx11z2zZpGM9ZLwz2y1xx2zNcs9MzWJuS5mhhqS5WKAs0q5qaubZrWLc9LjVzq5qWUklGZqSxSwEUuc7k1ibyuZqZ1mahAoAqW5qWxZbKVLZbm2UEmpNZmpLmazLFigEFAsJRZ7Q6OOEGbCRJZllq5SVlFuUmqyXVwOl51Ol56TdxqtJUKjE3FxnpmXnnrlrnNyXM1CCAAALrFs6b5aue2+O9Y7a57Z0VM56Zl5Y7YmuOeuJrnnpJrnNRqSoyqXKly0WJoWE1c3Wd656s3c242lRKiQIslASlkpczeVwsmszWZZKligBYLqEtiygtl1KlQFzNSWSyWSpchRCpQCoP/EAB4QAQEAAQUBAQEAAAAAAAAAABEBABAgMEBQYHCA/9oACAEBAAECAPDm6fmJ0Z7TrPzOfg8/FJ+XH4eevfKnvXrz9Jfzm/h58jfqDQPnb4M3mwOQ3n2QAGHxB8AahofbPzU9Odg+ScdL486R92q/h648Z/AE75/QB6B9q/JH6Edo/ED8OPtD4qfCz7KfiJ/ER6R6p05rO0fZToHAfh51X7M8o/bzzTnOQPjT+rT8PPwo/h89OfDvTND05+dHkGHpzyQ88NDqzwp6s751Z9ud4Psj8NPyKfGHWnx86B2D6I8s8g609EMDzJ6h45gAYebPQPHAAAD8IAADQ6x3p6s7BoBgAdI2HrTWdedo0NANDrnNOydU801NQ2HVMPDOaazxp0jYBh9ROrOMw0Nx9TOd4A7IHpT4ADQDogeEdc8d2PIB1zDwTwDvKvKGB0TQA+aDe48wHFOIDunozac7K6vCYHUDDx3bPVVXJq8IbDnA7E2HxCuq6TeB0g55zGh8G6K6K8AGh0A+SNpyTVXGZLLwAcoAGHTmw1PbOZVxceAOYAw+HNDYah1GVxcewGh8MAbTadKaLLiy9KbzQOSb3sTcdEAANA0MOk6LLkqvGcgHlTWaTpzQAAADU4jDhcXJkq9kPMmTrAAAAAB2nGV7BgYcLunZmTJk6YAAAAAAYdVxcl0eqaHSnZmk64GAAAAHEcsyVyVXqm88edsAAAssLA7DpLL1jwzgms6Jou4wACyyyywMOq4qsydk1vizSbzhV0XgALLLLLADrzJZkrLMeseXOgrkuLjwBZZZYWABodNVe7faccdFdphZZZYAAdVWVl+CnTdiui7gAAAw600nnTqzSdGcLoq7QAAAwOk6zyZrPUVVdgAAAdWbZ864qquwAAA4TidZfGmT2lVXYAAAdeWY9Q55q9Wbr21VZZZXUAAA6Lk1Zj0j1Q6qqyyyyy6gAAdaY+DPHAMDDjuXLqsssssssq6AAAHRmyeJMnhhgHPcuXdLLLLLLLK6gBYGpqcE2zxXvmgAAHFcuXLvZZZZZZZZdQLAA601cPQN05wwNty6XkZZZZZZVwAAA0PQnTO2amty5eZlllllZXUAADQ5ppMndnq3S5cvRllllllXUAAOd2TuTtnbuXLly6HKyyyyyrqAAGGHLNZ4U1mTsTgVVxdly6GBzyyyyyyuwAA4pwTSeJMmh1Xcqqq47DAADkllllllyaAFgHPMmkyZPCmTwFVVVXYYAHPLLLLLk0AAA55kyZPcm5VVVVXaAAHLLLLLLLNQCwDoyzvzwXFVVVVV2gABxzJZZZZZk0AsssDU4ppMmTomhvnjqqqqqu4AA4ZpLLLLLLLqWWWWAaHJMmTJ0ToTrTbehNJpMmk60yZMmTJk23S5epMmk7c2zZOn/8QAFxABAAMAAAAAAAAAAAAAAAAAITBQ4P/aAAgBAQADPwDAXpMWf//EAB8RAQAABgMBAQAAAAAAAAAAABEAEDBQYHABIECAkP/aAAgBAgEBPwDDGgw6KNIPqMvPjJ3Ua7LKfmgWh3bxhphZpE+FzCjaJhBBM6lz48pWabaSZIggrOQcWIgkYOXU8heTuw0C5FPmbDD3MAYehgjQLk12gW1pGEN5/8QAHREBAQACAwEBAQAAAAAAAAAAEQABUBAgMGBAcP/aAAgBAwEBPwA/Wz3fgWfxnuaZn4l/Geh1d86QjyfnTzejo34l/Maoj8D6ngR5v6XRnJHZ+Rx8W+hrjUM7g0Bn4h6u3flXcunN8/As/wBGf0vRn4N/C/hfR5f0M6t7vierO6I/a/UPi/gZ+JdEzOkdMzw6B+HdY/Fu9PF/a/qfA+IOCIjs7x9X4Q6uvZn3OSOrrWZmZn8BHRnXMzMzPuRsnhmbGbGfQ6EbRmxmxmZ9zbNjMzPwrMzPsaxnqRHRmZ9jYkREcszOyZme2LFjgiIjlsZmdkzPDxixYsdSIjlmdtjjFix3IjozPgazHGLHkREcM2MzriIiI6PkWcRyzOoOTgiIiI6MzPcs4jlmxntjTkRwRHVseOcdsZsaYv/Z');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
		padding: 0 10px;
	}
	.unicorn-header2 {
		//background-image: url(/static/unicorn-page-shop-jd/title2.jpg);
		background-image: url('data:image/jpeg;base64,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AWkoooASm4p9JQBHikqTFNxQA2nA0lJSAkpaZS0xDqbilpaAIyKbipaaRSGRUU/FNpDFFOplKDQBJTcUCloEMIqMip8UwigaZBSVIRTcUi7jaUGkooAkBpwqIU8UyR9JRTqBDMU2pcU3FIaIqSn02goZRTqSkMSnimUooESg1KDUAqQGqIaJqWmg0+mQMIphFTUwipYyAimVMRUZFItMjpKfim0ihlFOptAwooooGLThTaUUEkgp4qIU8VRLJBRTRTqCQptOpKAG0lLSUigooooASm0+m0ihlNp9NpFCUUUUDCiiigAooooELTqbS0xGvSUtJWpgFFFFAwooooGFFFLQA2inUlACUUtFACUUUUwEooooAbSU+koAZRS0lIApaSigBaSlooAZikxUlJigCOinYptIBwpaZTqBDqMUlOpiGYppFS03FIZDRTyKbSKAU4UylFAElJikFOoERkUwipqYRQNEOKbUpFMxSKG04U2lpASA08VEKeDTJH0YopaYiMimVKRTCKRRHSU/FNpFDaSlpKBjhUgNRU4GmSydTUoquDUwNMhokpMUopaZBERURFTkUwipLRBim1IRTKRSYym0+kpFjKKWigYlOptLQIcKcKZTqZLJBTqjFPFMkdSUUUCEptPptIYlFLSUDCkp1JSGNptPppoKGUlOpKQxKKKKBhRRRQAtKKSigk2KSlpK2MAooooGFFFFABRRRQAtFJRQAtJRRQAUUUUAJSU6kpgJSUtFAxKSnUlADaSn0mKAG0tFJSAWiiloAbikxT6SgCOinYpKQBThTKWgQ+iminUwGkUwipaaRSGRUlPIplIYopwqOnCgRJSYpAadQIjIphFTYphFBSZDim1IRTaRYCnCmUooETA06ogakFMkWmkU6igRERTKlIphpFEdJTqSkUNpRRRQMeKlU1AKkBpkNFkGnioFNSiqM2h1MIp9IRQBARTCKmIqMipKRFTaeabSLTGUlOpKRQlFFFABTqbS0CHinCmCnCmSPFLTRTqZIUlLRSAbRS0lBQUUUUgEptOpKBoZTafTaRQ2ilooKEoopaQBRRS0xGvSUtJWxgFFFFABRRRQAUUUUAJRS0lAwozRRQAUtJRQAtFFFACUlOpKAEooooASilpKYCUlOpKQDaKKSgB1LTaWgApKdRQMjpKfim0gClBptLQIfRTRTqYhuKYRUtNN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');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
	}
	
	.unicorn-font-size {
		font-size: 35rpx;
		font-weight: 700;
	}

	.unicorn-border-radius-swiper {
		border-radius: 10px;
	}

	.unicorn-body {
		padding: 0rpx 15rpx;
	}

	.unicorn-image {
		width: 60rpx;
		height: 60rpx;
		margin-bottom: 10rpx;
	}

	.unicorn-br-1 {
		border-top-left-radius: 10px;
	}

	.unicorn-br-2 {
		border-top-right-radius: 10px;
	}

	.unicorn-br-3 {
		border-bottom-left-radius: 10px;
	}

	.unicorn-br-4 {
		border-bottom-right-radius: 10px;
	}

	.nav .cu-item.cur {
		border-bottom: 5rpx solid;
	}

	.floor-list {
		white-space: nowrap;
	}

	.scoll-wrapper {
		display: flex;
		align-items: flex-start;
	}

	.floor-item {
		width: 150upx;
		margin-right: 20upx;
		font-size: 26rpx;
		color: #303133;
		line-height: 1.8;

		image {
			width: 150upx;
			height: 150upx;
			border-radius: 6upx;
		}
	}

	.guess-section {
		display: flex;
		flex-wrap: wrap;
		background: #fff;

		.guess-item {
			display: flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;

			&:nth-child(2n+1) {
				margin-right: 4%;
			}
		}

		.image-wrapper {
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}

		.title {
			font-size: 32rpx;
			color: #303133;
			line-height: 80upx;
		}

		.price {
			font-size: 32rpx;
			color: #fa436a;
			line-height: 1;
		}
	}

	.pro-box {
		display: flex;
		align-items: center;
		margin-top: 10upx;
		font-size: 24rpx;
		padding-right: 10upx;
	}

	.progress-box {
		flex: 1;
		border-radius: 10px;
		overflow: hidden;
		margin-right: 8upx;
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
	
</style>
