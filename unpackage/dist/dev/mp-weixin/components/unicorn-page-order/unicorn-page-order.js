"use strict";
const common_vendor = require("../../common/vendor.js");
const tabList = [
  "待交货订单",
  "待出货成品",
  "历史成交订单"
];
const data_QueryDateType = [
  {
    value: "po_date",
    name: "按订单日期"
  },
  {
    value: "delivery",
    name: "按交期"
  }
];
const tableData1 = [
  {
    aaa: "2019.01",
    bbb: "元咏科技",
    ccc: "560",
    ddd: "3213",
    eee: "423",
    fff: "1232",
    ggg: "11",
    hhh: "123",
    iii: "123"
  }
];
const columns1 = [
  {
    title: "年月",
    key: "aaa",
    width: 200
  },
  {
    title: "交易主体",
    key: "bbb",
    width: 200
  },
  {
    title: "订单笔数",
    key: "ccc",
    width: 200
  },
  {
    title: "订单重量",
    key: "ddd",
    width: 200
  },
  {
    title: "订单0-10KG",
    key: "eee",
    width: 200
  },
  {
    title: "订单10-50KG",
    key: "fff",
    width: 200
  },
  {
    title: "订单50-100KG",
    key: "ggg",
    width: 200
  },
  {
    title: "订单大于100KG",
    key: "hhh",
    width: 200
  },
  {
    title: "不良次数",
    key: "iii",
    width: 200
  }
];
const tableData2 = [
  {
    aaa: "2019.01",
    bbb: "元咏科技",
    ccc: "560",
    ddd: "3213",
    eee: "423",
    fff: "1232",
    ggg: "11"
  },
  {
    aaa: "2019.11",
    bbb: "元咏科技",
    ccc: "560",
    ddd: "3213",
    eee: "423",
    fff: "1232",
    ggg: "11"
  }
];
const columns2 = [
  {
    title: "年月",
    key: "aaa",
    width: 200
  },
  {
    title: "交易主体",
    key: "bbb",
    width: 200
  },
  {
    title: "交期天数1-2天",
    key: "ccc",
    width: 200
  },
  {
    title: "交期天数3-4天",
    key: "ddd",
    width: 200
  },
  {
    title: "交期天数大于5天",
    key: "eee",
    width: 200
  },
  {
    title: "送货次数",
    key: "fff",
    width: 200
  },
  {
    title: "平均每周送货次数",
    key: "ggg",
    width: 200
  }
];
const data_Co_type = [
  {
    value: "huangming",
    name: "元咏科技"
  },
  {
    value: "All",
    name: "全部"
  }
];
const orderList = [
  {
    co_type: "元咏科技",
    cust_pono: "4500017913-40",
    spec: "SUS304-3/4H",
    guige: "0.1 x 36",
    delivery: "2019-12-19",
    po_weight: "59",
    sendweight: "0",
    ts_count: "0",
    po_no: "O19120027",
    po_seqno: "004",
    dnrec_infor: "",
    rtn_infor: "",
    allrmk: "",
    isfastpo: "Y"
  },
  {
    co_type: "元咏科技",
    cust_pono: "4500018306-20",
    spec: "SUS304-H",
    guige: "0.1 x 247",
    delivery: "2019-12-20",
    po_weight: "67",
    sendweight: "0",
    ts_count: "0",
    po_no: "O19120044",
    po_seqno: "002",
    dnrec_infor: "",
    rtn_infor: "",
    allrmk: "",
    isfastpo: "N"
  },
  {
    co_type: "元咏科技",
    cust_pono: "4500018306-90",
    po_date: "2019-12-11",
    maker: "",
    spec: "SUS304-3/4H",
    guige: "0.1 x 340",
    delivery: "2019-12-23",
    po_weight: "29",
    sendweight: "0",
    ts_count: "0",
    po_no: "O19120044",
    po_seqno: "009",
    dnrec_infor: "",
    rtn_infor: "",
    allrmk: "",
    isfastpo: "Y"
  }
];
const historyOrderList = [
  {
    co_type: "元咏科技",
    cust_pono: "4500017913-40",
    po_date: "2019-12-06",
    maker: "",
    spec: "SUS304-3/4H",
    guige: "0.1 x 36",
    delivery: "2019-12-19",
    po_weight: "59",
    nosendweight: "59",
    sendweight: "0",
    ts_count: "0",
    postate: "NoFinish",
    po_no: "O19120027",
    po_seqno: "004",
    short_name: "亿亿科技",
    dnrec_infor: "",
    rtn_infor: "",
    allrmk: "",
    isfastpo: "Y"
  },
  {
    co_type: "元咏科技",
    cust_pono: "4500017913-40",
    po_date: "2019-12-06",
    maker: "",
    spec: "SUS304-3/4H",
    guige: "0.1 x 36",
    delivery: "2019-12-19",
    po_weight: "59",
    nosendweight: "59",
    sendweight: "0",
    ts_count: "0",
    postate: "NoFinish",
    po_no: "O19120027",
    po_seqno: "004",
    short_name: "亿亿科技",
    dnrec_infor: "",
    rtn_infor: "",
    allrmk: "",
    isfastpo: "Y"
  }
];
const customerOrderList = [
  {
    co_type: "元咏科技",
    cust_pono: "4500017939-20",
    rtn_date: "2019-12-12",
    spec: "SUS430-2B",
    guige: "1 x 40 x 1240",
    delivery: "2019-12-11",
    weight: "15.5"
  },
  {
    co_type: "元咏科技",
    cust_pono: "4500017939-20",
    rtn_date: "2019-12-12",
    spec: "SUS430-2B",
    guige: "1 x 40 x 1240",
    delivery: "2019-12-11",
    weight: "15.5"
  },
  {
    co_type: "元咏科技",
    cust_pono: "4500017939-20",
    rtn_date: "2019-12-12",
    spec: "SUS430-2B",
    guige: "1 x 40 x 1240",
    delivery: "2019-12-11",
    weight: "15.5"
  }
];
const formMess = {
  QueryDateType: "",
  Date1: "",
  Date2: "",
  Co_type: "",
  spec: "",
  thickness: "",
  width: "",
  cust_pono: "",
  poState: ""
};
const unicornJson = {
  tabList,
  data_QueryDateType,
  tableData1,
  columns1,
  tableData2,
  columns2,
  data_Co_type,
  orderList,
  historyOrderList,
  customerOrderList,
  formMess
};
const _sfc_main = {
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
    this.initData();
  },
  methods: {
    initData: function() {
      let currentdate = /* @__PURE__ */ new Date();
      let year = currentdate.getFullYear();
      let month = currentdate.getMonth() + 1;
      let day = currentdate.getDate();
      this.formMess.Date2 = year + "-" + month + "-" + day;
      this.formMess.Date1 = year + "-01-01";
      this.formMess.QueryDateType = this.data_QueryDateType[this.index_QueryDateType];
      this.formMess.Co_type = this.data_Co_type[this.index_Co_type];
    },
    tap_sendweight: function(item) {
      common_vendor.index.showToast({
        title: item.dnrec_infor
      });
    },
    tap_ts_count: function(item) {
      console.log(item);
      common_vendor.index.showToast({
        title: item.rtn_infor
      });
    },
    tap_addfastpo: function(item) {
      console.log(item);
      let fastpo = item.isfastpo;
      if (fastpo) {
        common_vendor.index.showToast({
          title: "加急成功"
        });
      }
    },
    tap_deletefastpo: function(item) {
      if (item.isfastpo) {
        common_vendor.index.showToast({
          title: "取消加急成功"
        });
      }
    },
    DateChangeFrom: function(e) {
      this.formMess.Date1 = e.detail.value;
    },
    DateChangeTo: function(e) {
      this.formMess.Date2 = e.detail.value;
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
      this.modalName = "DrawerModalL";
    },
    hideModal(e) {
      this.modalName = null;
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
if (!Array) {
  const _easycom_unicorn_plugin_table2 = common_vendor.resolveComponent("unicorn-plugin-table");
  _easycom_unicorn_plugin_table2();
}
const _easycom_unicorn_plugin_table = () => "../unicorn-plugin-table/unicorn-plugin-table.js";
if (!Math) {
  _easycom_unicorn_plugin_table();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.tabList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.n(index == $data.TabCur ? "unicorn-font-size cur" : ""),
        c: index,
        d: common_vendor.o((...args) => $options.tabSelect && $options.tabSelect(...args), index),
        e: index
      };
    }),
    b: common_vendor.o(($event) => $options.showModal()),
    c: $data.TabCur == 2
  }, $data.TabCur == 2 ? {
    d: common_vendor.p({
      tableData: $data.tableData1,
      columns: $data.columns1,
      showBottomSum: true,
      stickSide: true
    }),
    e: common_vendor.p({
      tableData: $data.tableData2,
      columns: $data.columns2,
      showBottomSum: true,
      stickSide: true
    })
  } : {}, {
    f: $data.TabCur == 2
  }, $data.TabCur == 2 ? {} : {}, {
    g: $data.TabCur == 0 || $data.TabCur == 2
  }, $data.TabCur == 0 || $data.TabCur == 2 ? {
    h: common_vendor.f($data.orderList, (item, i, i0) => {
      return common_vendor.e({
        a: item.isfastpo == "Y"
      }, item.isfastpo == "Y" ? {} : {}, {
        b: common_vendor.t(item.co_type),
        c: common_vendor.t(item.cust_pono),
        d: common_vendor.t(item.spec),
        e: common_vendor.t(item.guige),
        f: common_vendor.t(item.po_weight),
        g: common_vendor.t(item.delivery),
        h: common_vendor.t(item.po_date),
        i: common_vendor.t(item.sendweight),
        j: common_vendor.o(($event) => $options.tap_sendweight(item), i),
        k: common_vendor.t(item.ts_count),
        l: common_vendor.o(($event) => $options.tap_ts_count(item), i),
        m: common_vendor.t(item.allrmk),
        n: $data.TabCur == 0 && item.isfastpo == "N"
      }, $data.TabCur == 0 && item.isfastpo == "N" ? {
        o: common_vendor.o(($event) => $options.tap_addfastpo(item), i)
      } : {}, {
        p: $data.TabCur == 0 && item.isfastpo == "Y"
      }, $data.TabCur == 0 && item.isfastpo == "Y" ? {
        q: common_vendor.o(($event) => $options.tap_deletefastpo(item), i)
      } : {}, {
        r: i
      });
    }),
    i: common_vendor.n($data.TabCur == 0 ? "mt-tab0" : "")
  } : {}, {
    j: $data.TabCur == 1
  }, $data.TabCur == 1 ? {
    k: common_vendor.f($data.customerOrderList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.co_type),
        b: common_vendor.t(item.cust_pono),
        c: common_vendor.t(item.rtn_date),
        d: common_vendor.t(item.spec),
        e: common_vendor.t(item.guige),
        f: common_vendor.t(item.delivery),
        g: common_vendor.t(item.weight),
        h: i
      };
    })
  } : {}, {
    l: common_vendor.o((...args) => _ctx.scrolltolower && _ctx.scrolltolower(...args)),
    m: common_vendor.o((...args) => _ctx.scrolltoupper && _ctx.scrolltoupper(...args)),
    n: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
    o: common_vendor.o(($event) => $options.resetPararm()),
    p: common_vendor.o((...args) => $options.confirmQuery && $options.confirmQuery(...args)),
    q: common_vendor.t($data.formMess.Date1),
    r: $data.formMess.Date1,
    s: common_vendor.o((...args) => $options.DateChangeFrom && $options.DateChangeFrom(...args)),
    t: common_vendor.t($data.formMess.Date2),
    v: $data.formMess.Date2,
    w: common_vendor.o((...args) => $options.DateChangeTo && $options.DateChangeTo(...args)),
    x: $data.formMess.spec,
    y: common_vendor.o(($event) => $data.formMess.spec = $event.detail.value),
    z: $data.formMess.thickness,
    A: common_vendor.o(($event) => $data.formMess.thickness = $event.detail.value),
    B: $data.formMess.width,
    C: common_vendor.o(($event) => $data.formMess.width = $event.detail.value),
    D: $data.formMess.cust_pono,
    E: common_vendor.o(($event) => $data.formMess.cust_pono = $event.detail.value),
    F: common_vendor.s({
      top: $data.CustomBar + "px"
    }),
    G: common_vendor.n($data.modalName == "DrawerModalL" ? "show" : ""),
    H: common_vendor.o(($event) => $options.hideModal(false))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/components/unicorn-page-order/unicorn-page-order.vue"]]);
wx.createComponent(Component);
