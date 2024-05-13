module.exports = {
	tabList: ['待交货订单', '待出货成品', '历史成交订单'],
	data_QueryDateType: [{
		value: "po_date",
		name: "按订单日期"
	}, {
		value: "delivery",
		name: "按交期"
	}],
	tableData1: [{
		aaa: '2019.01',
		bbb: '元咏科技',
		ccc: '560',
		ddd: '3213',
		eee: '423',
		fff: '1232',
		ggg: '11',
		hhh: '123',
		iii: '123',
	}],
	columns1: [{
			"title": "年月",
			"key": "aaa",
			"width": 200
		},
		{
			"title": "交易主体",
			"key": "bbb",
			"width": 200
		},
		{
			"title": "订单笔数",
			"key": "ccc",
			"width": 200
		},
		{
			"title": "订单重量",
			"key": "ddd",
			"width": 200
		},
		{
			"title": "订单0-10KG",
			"key": "eee",
			"width": 200
		},
		{
			"title": "订单10-50KG",
			"key": "fff",
			"width": 200
		},
		{
			"title": "订单50-100KG",
			"key": "ggg",
			"width": 200
		},
		{
			"title": "订单大于100KG",
			"key": "hhh",
			"width": 200
		},
		{
			"title": "不良次数",
			"key": "iii",
			"width": 200
		}
	],
	tableData2: [{
		aaa: '2019.01',
		bbb: '元咏科技',
		ccc: '560',
		ddd: '3213',
		eee: '423',
		fff: '1232',
		ggg: '11',
	}, {
		aaa: '2019.11',
		bbb: '元咏科技',
		ccc: '560',
		ddd: '3213',
		eee: '423',
		fff: '1232',
		ggg: '11',
	}],
	columns2: [{
			"title": "年月",
			"key": "aaa",
			"width": 200
		},
		{
			"title": "交易主体",
			"key": "bbb",
			"width": 200
		},
		{
			"title": "交期天数1-2天",
			"key": "ccc",
			"width": 200
		},
		{
			"title": "交期天数3-4天",
			"key": "ddd",
			"width": 200
		},
		{
			"title": "交期天数大于5天",
			"key": "eee",
			"width": 200
		},
		{
			"title": "送货次数",
			"key": "fff",
			"width": 200
		},
		{
			"title": "平均每周送货次数",
			"key": "ggg",
			"width": 200
		}
	],
	data_Co_type: [{
			"value": "huangming",
			"name": "元咏科技"
		},
		{
			"value": "All",
			"name": "全部"
		}
	],
	orderList: [{
			"co_type": "元咏科技",
			"cust_pono": "4500017913-40",
			"spec": "SUS304-3/4H",
			"guige": "0.1 x 36",
			"delivery": "2019-12-19",
			"po_weight": "59",
			"sendweight": "0",
			"ts_count": "0",
			"po_no": "O19120027",
			"po_seqno": "004",
			"dnrec_infor": "",
			"rtn_infor": "",
			"allrmk": "",
			"isfastpo": "Y"
		},
		{
			"co_type": "元咏科技",
			"cust_pono": "4500018306-20",
			"spec": "SUS304-H",
			"guige": "0.1 x 247",
			"delivery": "2019-12-20",
			"po_weight": "67",
			"sendweight": "0",
			"ts_count": "0",
			"po_no": "O19120044",
			"po_seqno": "002",
			"dnrec_infor": "",
			"rtn_infor": "",
			"allrmk": "",
			"isfastpo": "N"
		},
		{
			"co_type": "元咏科技",
			"cust_pono": "4500018306-90",
			"po_date": "2019-12-11",
			"maker": "",
			"spec": "SUS304-3/4H",
			"guige": "0.1 x 340",
			"delivery": "2019-12-23",
			"po_weight": "29",
			"sendweight": "0",
			"ts_count": "0",
			"po_no": "O19120044",
			"po_seqno": "009",
			"dnrec_infor": "",
			"rtn_infor": "",
			"allrmk": "",
			"isfastpo": "Y"
		}
	],
	historyOrderList: [{
			"co_type": "元咏科技",
			"cust_pono": "4500017913-40",
			"po_date": "2019-12-06",
			"maker": "",
			"spec": "SUS304-3/4H",
			"guige": "0.1 x 36",
			"delivery": "2019-12-19",
			"po_weight": "59",
			"nosendweight": "59",
			"sendweight": "0",
			"ts_count": "0",
			"postate": "NoFinish",
			"po_no": "O19120027",
			"po_seqno": "004",
			"short_name": "亿亿科技",
			"dnrec_infor": "",
			"rtn_infor": "",
			"allrmk": "",
			"isfastpo": "Y"
		},
		{
			"co_type": "元咏科技",
			"cust_pono": "4500017913-40",
			"po_date": "2019-12-06",
			"maker": "",
			"spec": "SUS304-3/4H",
			"guige": "0.1 x 36",
			"delivery": "2019-12-19",
			"po_weight": "59",
			"nosendweight": "59",
			"sendweight": "0",
			"ts_count": "0",
			"postate": "NoFinish",
			"po_no": "O19120027",
			"po_seqno": "004",
			"short_name": "亿亿科技",
			"dnrec_infor": "",
			"rtn_infor": "",
			"allrmk": "",
			"isfastpo": "Y"
		}
	],
	customerOrderList: [{
			"co_type": "元咏科技",
			"cust_pono": "4500017939-20",
			"rtn_date": "2019-12-12",
			"spec": "SUS430-2B",
			"guige": "1 x 40 x 1240",
			"delivery": "2019-12-11",
			"weight": "15.5"
		},
		{
			"co_type": "元咏科技",
			"cust_pono": "4500017939-20",
			"rtn_date": "2019-12-12",
			"spec": "SUS430-2B",
			"guige": "1 x 40 x 1240",
			"delivery": "2019-12-11",
			"weight": "15.5"
		},
		{
			"co_type": "元咏科技",
			"cust_pono": "4500017939-20",
			"rtn_date": "2019-12-12",
			"spec": "SUS430-2B",
			"guige": "1 x 40 x 1240",
			"delivery": "2019-12-11",
			"weight": "15.5"
		}
	],
	formMess: {
		QueryDateType: '',
		Date1: '',
		Date2: '',
		Co_type: '',
		spec: '',
		thickness: '',
		width: '',
		cust_pono: '',
		poState: ''
	}
}
