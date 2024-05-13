<template>
	<view>
		<view class="unicorn-page">
			<scroll-view scroll-x class="unicorn-tab-parent-height bg-white nav unicorn-bg-gradual-caizhu">
				<view class="flex text-center">
					<view class="cu-item flex-sub unicorn-tab-height" :class="index==TabCur?'unicorn-font-size cur':''" v-for="(item,index) in tabList"
					 :key="index" @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
					<view class="action unicorn-tab-height" @tap="showModal()" style="width: 10%;">
						<text class="cuIcon-search text-white " style="font-size:40rpx;"></text>
					</view>
				</view>
			</scroll-view>

			<view class="unicorn-body">
				<view v-if="TabCur==2" class="unicorn-margin-top-common">
					<view class="unicorn-card">
						<view class="unicorn-card-title">
							<image src="/static/unicorn-page-order/1.png" class="unicorn-card-title-icon"/>订单笔数分析
						</view>
						<view class="unicorn-card-context">
							<unicorn-plugin-table :tableData='tableData1' :columns='columns1' :showBottomSum='true' :stickSide='true'>
							</unicorn-plugin-table>
						</view>
					</view>

					<view class="unicorn-card">
						<view class="unicorn-card-title">
							<image src="/static/unicorn-page-order/1.png" class="unicorn-card-title-icon"/>订单交期及送货次数分析
						</view>
						<view class="unicorn-card-context">
							<unicorn-plugin-table :tableData='tableData2' :columns='columns2' :showBottomSum='true' :stickSide='true'>
							</unicorn-plugin-table>
						</view>
					</view>

				</view>


				<view class="unicorn-card" v-if="TabCur==2" style="margin-bottom: 0px;">
					<view class="unicorn-card-title">
						<image src="/static/unicorn-page-order/2.png" class="unicorn-card-title-icon"/>历史订单
					</view>
				</view>

				<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower" @scrolltoupper="scrolltoupper"
				 @scroll="scroll">
					<view v-if="TabCur==0 || TabCur==2" class="my-unit">
						<view v-for="(item, i) in orderList" :key="i" class="unicorn-card" :class="[TabCur==0?'mt-tab0':'']">
							<image v-if="item.isfastpo=='Y'" class="jiaji" src="/static/unicorn-page-order/jiaji.png"></image>
							<view class="unit-head ">
								<view class="main-title">交易主体：<span class="main-title-value">{{ item.co_type }}</span></view>
								<view>采购单号：{{ item.cust_pono }}</view>
							</view>
							<view class="unit-body">
								<text>材质：<text>{{ item.spec }}</text></text>
								<text>规格：<text>{{ item.guige }}</text></text>
								<text>订单数量：<text>{{ item.po_weight }}</text></text>
								<text>交期：<text>{{ item.delivery }}</text></text>
								<text>订单日期：<text>{{ item.po_date }}</text></text>
								<text>已交货：<text @tap="tap_sendweight(item)" style="color: blue;">{{ item.sendweight }}</text></text>
								<text>不良批次：<text @tap="tap_ts_count(item)" style="color: blue;">{{ item.ts_count }}</text></text>
								<text>客户备注：<text>{{ item.allrmk }}</text></text>
								<button v-if="TabCur==0 && item.isfastpo=='N'" class="jiaji-btn cu-btn round sm" @tap="tap_addfastpo(item)">加急订单</button>
								<button v-if="TabCur==0 && item.isfastpo=='Y'" class="jiaji-btn cu-btn round sm bg-gradual-red" @tap="tap_deletefastpo(item)">取消加急</button>
							</view>
						</view>
					</view>

					<view v-if="TabCur==1" class="my-unit">
						<view v-for="(item, i) in customerOrderList" :key="i" class="unicorn-card">
							<view class="unit-head">
								<view class="main-title">交易主体：<span class="main-title-value">{{ item.co_type }}</span></view>
								<view>采购单号：{{ item.cust_pono }}</view>
							</view>
							<view class="unit-body">
								<text>生产日期：<text>{{ item.rtn_date }}</text></text>
								<text>材质：<text>{{ item.spec }}</text></text>
								<text>规格：<text>{{ item.guige }}</text></text>
								<text>订单交期：<text>{{ item.delivery }}</text></text>
								<text>生产重量：<text>{{ item.weight }}</text></text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>


			<view class="cu-modal drawer-modal justify-end" :style="[{top:CustomBar + 'px'}]" :class="modalName=='DrawerModalL'?'show':''" catchtouchmove="true"
			 @tap="hideModal(false)">
				<view class="cu-dialog basis-xl">
					<view class="cu-list menu text-left" style="background-color: #FD575C;">
						<view class="cu-form-group ">
							<view class="padding flex flex-wrap justify-between align-left">
								<button class="cu-btn round" @tap="resetPararm()">重置</button>
							</view>

							<view class="padding flex flex-wrap justify-between align-right">
								<button class="cu-btn round bg-green" style="background-color: #fe3443;" @tap="confirmQuery">确认</button>
							</view>
						</view>
						<view class="cu-form-group">
							<view class="title">开始时间</view>
							<picker mode="date" :value="formMess.Date1" start="1949-10-01" end="2099-09-01" @change="DateChangeFrom">
								<view class="picker">
									{{formMess.Date1}}
								</view>
							</picker>
						</view>
						<view class="cu-form-group">
							<view class="title">结束时间</view>
							<picker mode="date" :value="formMess.Date2" start="1949-10-01" end="2099-09-01" @change="DateChangeTo">
								<view class="picker">
									{{formMess.Date2}}
								</view>
							</picker>
						</view>
						<view class="cu-form-group">
							<view class="title">材质</view>
							<input placeholder="请输入" name="input" v-model="formMess.spec" style="text-align:right"/>
						</view>
						<view class="cu-form-group">
							<view class="title">厚度(mm)</view>
							<input placeholder="请输入" name="input" v-model="formMess.thickness" style="text-align:right"/>
						</view>
						<view class="cu-form-group">
							<view class="title">宽度(mm)</view>
							<input placeholder="请输入" name="input" v-model="formMess.width" style="text-align:right" />
						</view>
						<view class="cu-form-group">
							<view class="title">采购单号</view>
							<input placeholder="请输入" name="input" v-model="formMess.cust_pono" style="text-align:right"/>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let _self = null;
	import unicornJson from './unicorn-page-order.json';
	export default {
		data() {
			return {
				data_QueryDateType: unicornJson.data_QueryDateType,
				tableData1: unicornJson.tableData1,
				columns1: unicornJson.columns1,
				tableData2: unicornJson.tableData2,
				columns2: unicornJson.columns2,
				data_Co_type: unicornJson.data_Co_type,
				formMess: unicornJson.formMess,
				orderList: unicornJson.orderList,
				customerOrderList: unicornJson.customerOrderList,
				tabList: unicornJson.tabList,
				index_QueryDateType: 0,
				index_Co_type: 0,
				TabCur: 0,
				modalName: null,
				CustomBar: this.CustomBar
			};
		},
		created() {
			_self = this;
			this.initData();
		},
		methods: {
			initData: function() {
				let currentdate = new Date();
				let year = currentdate.getFullYear();
				let month = currentdate.getMonth() + 1;
				let day = currentdate.getDate();
				this.formMess.Date2 = year + "-" + month + "-" + day;
				this.formMess.Date1 = year + "-01-01";
				this.formMess.QueryDateType = this.data_QueryDateType[this.index_QueryDateType];
				this.formMess.Co_type = this.data_Co_type[this.index_Co_type];
			},
			tap_sendweight: function(item) {
				uni.showToast({
					title: item.dnrec_infor
				})
			},
			tap_ts_count: function(item) {
				console.log(item)
				uni.showToast({
					title: item.rtn_infor
				})
			},
			tap_addfastpo: function(item) {
				console.log(item);
				let fastpo = item.isfastpo;
				if (fastpo) {
					uni.showToast({
						title: "加急成功"
					})
				}
			},
			tap_deletefastpo: function(item) {
				if (item.isfastpo) {
					uni.showToast({
						title: "取消加急成功"
					})
				}
			},
			DateChangeFrom: function(e) {
				this.formMess.Date1 = e.detail.value
			},
			DateChangeTo: function(e) {
				this.formMess.Date2 = e.detail.value
			},
			pickerChange_QueryDateType: function(e) {
				this.index_QueryDateType = e.detail.value;
				this.formMess.QueryDateType = this.data_QueryDateType[this.index_QueryDateType].value;
			},
			pickerChange_Co_type: function(e) {
				this.index_Co_type = e.detail.value;
				this.formMess.Co_type = this.data_Co_type[this.index_Co_type].value;
			},
			tabSelect: function(e) {
				this.TabCur = e.currentTarget.dataset.id;
				if (this.TabCur == 0) {
					this.getOrderListData();
				} else if (this.TabCur == 1) {
					this.getCustomerOrderListData();
				} else if (this.TabCur == 2) {
					this.getHistoryOrderListData();
				}
			},
			confirmQuery: function() {
				this.getOrderListData();
				this.modalName = null;
			},
			showModal: function() {
				this.modalName = 'DrawerModalL'
			},
			hideModal(e) {
				this.modalName = null
			},
			resetPararm: function() {
				this.formMess = unicornJson.formMess;
			},
			getOrderListData: function() {
				this.orderList = unicornJson.orderList;
			},
			getHistoryOrderListData: function() {
				this.orderList = unicornJson.historyOrderList;
			},
			getCustomerOrderListData: function() {
				this.customerOrderList = unicornJson.customerOrderList;
			}
		}
	};
</script>

<style lang="scss">
	body {
		background-color: #F2F2F2;
		font-size: 28upx;
		color: #333333;
		font-family: Helvetica Neue, Helvetica, sans-serif;
	}

	.unicorn-page {
		margin-top: -4rpx;
		background-color: #F2F2F2;
	}

	.unicorn-body {
		padding: 0 20rpx;
	}

	.unicorn-card {
		border-radius: 10px;
		margin-bottom: 8px;
		background-color: #ffffff;
	}

	.unicorn-card-title {
		padding: 20rpx;
	}

	.unicorn-card-context {
		padding: 20rpx;
		padding-top: 0px;
	}

	.unicorn-font-size {
		font-size: 35rpx;
		font-weight: 700;
	}

	.unicorn-margin-top-common {
		margin-top: 8px;
	}

	.unicorn-card-title-icon {
		width: 12px;
		height: 12px;
		margin-right: 5px;
	}

	.unicorn-bg-gradual-caizhu {
		background-image: linear-gradient(45deg, #fe3443, #ff376f);
		color: #ffffff;
	}

	.nav .unicorn-tab-height {
		height: 70rpx;
		line-height: 70rpx;
	}

	.unicorn-tab-height {
		height: 70rpx;
		line-height: 70rpx;
	}

	.unicorn-tab-parent-height {
		height: 77rpx;
		line-height: 77rpx;
	}

	.purchase-list {
		height: 100%;
		overflow: hidden;

		.purchase-body {
			height: calc(100% - 88upx);
			overflow: auto;
		}
	}

	.lineX {
		height: 10upx;
	}

	.jiaji {
		position: absolute;
		padding-top: 0;
		right: 0px;
		width: 60px;
		height: 45px;
		z-index: 10;
	}

	.jiaji-btn {
		position: absolute;
		padding-top: 0;
		right: 0px;
		z-index: 10;
		margin-top: 208rpx;
		margin-right: 20rpx;
	}

	.my-unit {
		margin: 20upx 0;
		font-size: 28upx;
		transform: all 1s;

		.unit-head {
			z-index: 5;
			padding: 20upx;
			height: 110rpx;
			box-sizing: border-box;
			flex-wrap: wrap;

			text {
				width: 50%;
				font-size: 28upx;
				line-height: 55upx;
			}

			view {
				padding-bottom: 10rpx;
			}

			.main-title {}

			.main-title-value {
				font-size: 30rpx;
				font-weight: 700;
			}
		}

		.unit-body {
			z-index: 5;
			padding: 20upx;
			display: flex;
			flex-wrap: wrap;

			text {
				width: 50%;
				font-size: 28rpx;
				line-height: 55upx;
				color: #999999;
			}
		}

		.unit-foot1 {
			z-index: 5;
			height: 88upx;
			padding: 0 20upx;
			border-top: 2upx solid #f5f5f5;
			border-bottom: none;
			line-height: 88upx;

			.btn {
				height: 60upx;
				font-size: 28upx;
				line-height: 60upx;
				margin: 14upx 0;
				width: 100%;
			}
		}

		.unit-foot2 {
			z-index: 5;
			background-color: #E7E4E4;
			height: 10upx;
			padding: 0 20upx;
			border-top: 2upx solid #f5f5f5;
			border-bottom: none;
			line-height: 88upx;
		}
	}

	.mt-tab0 {
		margin-bottom: 38rpx
	}
</style>
