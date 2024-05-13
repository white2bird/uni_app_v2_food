"use strict";
const common_vendor = require("../../common/vendor.js");
const swiperList = [
  {
    id: 0,
    type: "image",
    url: "/static/unicorn-page-shop-jd/main1.jpg"
  },
  {
    id: 1,
    type: "image",
    url: "/static/unicorn-page-shop-jd/main2.jpg"
  }
];
const tabList = [
  {
    name: "首页"
  },
  {
    name: "手机"
  },
  {
    name: "电脑办公"
  },
  {
    name: "食品生鲜"
  },
  {
    name: "家具厨具"
  },
  {
    name: "个人清护"
  },
  {
    name: "男装"
  },
  {
    name: "酒水饮料"
  }
];
const menuList = [
  [
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "京东超市"
    },
    {
      url: "/static/unicorn-page-shop-jd/list2.png",
      name: "数码电器"
    },
    {
      url: "/static/unicorn-page-shop-jd/list3.png",
      name: "潮流服饰"
    },
    {
      url: "/static/unicorn-page-shop-jd/list4.png",
      name: "免费水果"
    },
    {
      url: "/static/unicorn-page-shop-jd/list5.png",
      name: "京东到家"
    },
    {
      url: "/static/unicorn-page-shop-jd/list6.png",
      name: "充值缴费"
    },
    {
      url: "/static/unicorn-page-shop-jd/list7.png",
      name: "领京豆"
    },
    {
      url: "/static/unicorn-page-shop-jd/list8.png",
      name: "领券"
    },
    {
      url: "/static/unicorn-page-shop-jd/list9.png",
      name: "借钱"
    },
    {
      url: "/static/unicorn-page-shop-jd/list10.png",
      name: "省钱卡"
    }
  ],
  [
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "京东国际"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "京东拍卖"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "唯品会"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "沃尔玛"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "京东旅行"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "看病购药"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "拍拍二手"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "分享赚钱"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "种豆得豆"
    },
    {
      url: "/static/unicorn-page-shop-jd/list1.png",
      name: "更多频道"
    }
  ]
];
const pindaoList = [
  {
    url: "/static/unicorn-page-shop-jd/pindao1.png",
    name: "边玩边赚"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao2.png",
    name: "免费水果"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao3.png",
    name: "种豆得豆"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao4.png",
    name: "京东生鲜"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao5.png",
    name: "领现金"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao6.png",
    name: "拍拍二手"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao7.png",
    name: "京东会员"
  },
  {
    url: "/static/unicorn-page-shop-jd/pindao8.png",
    name: "京东旅游"
  }
];
const goodsList = [
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/goods1.jpg",
    title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 61
  },
  {
    tag: "",
    image: "/static/unicorn-page-shop-jd/goods2.jpg",
    title: "潘歌针织连衣裙",
    price: 78,
    sales: 16
  },
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/goods2.jpg",
    title: "巧谷2019春夏季新品新款女装",
    price: 108.8,
    sales: 5
  },
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/goods1.jpg",
    title: "私萱连衣裙",
    price: 265,
    sales: 88
  },
  {
    tag: "",
    image: "/static/unicorn-page-shop-jd/goods1.jpg",
    title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
    price: 422,
    sales: 137
  },
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/goods2.jpg",
    title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 95
  }
];
const ppjxList = [
  {
    name: "小米",
    url: "/static/unicorn-page-shop-jd/ppjx-xiaomi.png"
  },
  {
    name: "Apple",
    url: "/static/unicorn-page-shop-jd/ppjx-apple.jpg"
  },
  {
    name: "华为",
    url: "/static/unicorn-page-shop-jd/ppjx-huawei.jpg"
  },
  {
    name: "三星",
    url: "/static/unicorn-page-shop-jd/ppjx-sanxing.png"
  },
  {
    name: "OPPO",
    url: "/static/unicorn-page-shop-jd/ppjx-oppo.png"
  },
  {
    name: "vivo",
    url: "/static/unicorn-page-shop-jd/ppjx-vivo.png"
  },
  {
    name: "魅族",
    url: "/static/unicorn-page-shop-jd/ppjx-meizu.jpg"
  },
  {
    name: "努比亚",
    url: "/static/unicorn-page-shop-jd/ppjx-nby.jpg"
  }
];
const sjpjList = [
  {
    name: "数据线",
    url: "/static/unicorn-page-shop-jd/sjpj-1.jpg"
  },
  {
    name: "手机存储卡",
    url: "/static/unicorn-page-shop-jd/sjpj-2.jpg"
  },
  {
    name: "充电宝",
    url: "/static/unicorn-page-shop-jd/sjpj-3.jpg"
  },
  {
    name: "手机贴膜",
    url: "/static/unicorn-page-shop-jd/sjpj-4.jpg"
  },
  {
    name: "手机耳机",
    url: "/static/unicorn-page-shop-jd/sjpj-5.jpg"
  }
];
const sjb1List = [
  {
    price: "2399",
    url: "/static/unicorn-page-shop-jd/sjb1-1.jpg"
  },
  {
    price: "2599",
    url: "/static/unicorn-page-shop-jd/sjb1-2.jpg"
  },
  {
    price: "5388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg"
  }
];
const sjb2List = [
  {
    name: "5G手机",
    url: "/static/unicorn-page-shop-jd/sjb2.jpg"
  },
  {
    name: "游戏手机",
    url: "/static/unicorn-page-shop-jd/sjb2.jpg"
  },
  {
    name: "长续航",
    url: "/static/unicorn-page-shop-jd/sjb2.jpg"
  },
  {
    name: "全面屏",
    url: "/static/unicorn-page-shop-jd/sjb2.jpg"
  },
  {
    name: "拍照手机",
    url: "/static/unicorn-page-shop-jd/sjb2.jpg"
  }
];
const jdhxList = [
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/jdhx-1.jpg",
    title: "荣耀20",
    price: 179,
    sales: 61
  },
  {
    tag: "",
    image: "/static/unicorn-page-shop-jd/jdhx-2.jpg",
    title: "努比亚X30",
    price: 78,
    sales: 16
  },
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/jdhx-3.jpg",
    title: "小米MIX3",
    price: 108.8,
    sales: 5
  },
  {
    tag: "自营",
    image: "/static/unicorn-page-shop-jd/jdhx-4.jpg",
    title: "苹果11MAX",
    price: 265,
    sales: 88
  }
];
const xsqgList = [
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  },
  {
    oldPrice: "9199",
    price: "5099",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "70"
  },
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  },
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  },
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  },
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  },
  {
    oldPrice: "2199",
    price: "1388",
    url: "/static/unicorn-page-shop-jd/sjb1-3.jpg",
    rate: "36"
  }
];
const unicornJson = {
  swiperList,
  tabList,
  menuList,
  pindaoList,
  goodsList,
  ppjxList,
  sjpjList,
  sjb1List,
  sjb2List,
  jdhxList,
  xsqgList
};
const _sfc_main = {
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
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s({
      top: $data.CustomBar + "px"
    }),
    b: common_vendor.f($data.tabList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n(index == $data.TabCur ? "unicorn-font-size cur" : ""),
        c: index,
        d: common_vendor.o((...args) => $options.tabSelect && $options.tabSelect(...args), index),
        e: index
      };
    }),
    c: $data.scrollLeft,
    d: $data.TabCur == 0
  }, $data.TabCur == 0 ? {
    e: common_vendor.f($data.swiperList, (item, index, i0) => {
      return common_vendor.e({
        a: item.type == "image"
      }, item.type == "image" ? {
        b: item.url
      } : {}, {
        c: item.type == "video"
      }, item.type == "video" ? {
        d: item.url
      } : {}, {
        e: index
      });
    })
  } : {}, {
    f: $data.TabCur == 0
  }, $data.TabCur == 0 ? {
    g: common_vendor.f($data.menuList, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (itemsub, indexsub, i1) => {
          return {
            a: itemsub.url,
            b: common_vendor.t(itemsub.name),
            c: indexsub
          };
        }),
        b: index
      };
    }),
    h: common_vendor.f($data.pindaoList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => _ctx.navToDetailPage(item), index)
      };
    }),
    i: common_vendor.f($data.goodsList, (item, index, i0) => {
      return common_vendor.e({
        a: item.image,
        b: item.tag
      }, item.tag ? {
        c: common_vendor.t(item.tag)
      } : {}, {
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.price),
        f: index,
        g: common_vendor.o(($event) => _ctx.navToDetailPage(item), index)
      });
    })
  } : {}, {
    j: $data.TabCur == 1
  }, $data.TabCur == 1 ? {
    k: common_vendor.f($data.ppjxList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    l: common_vendor.f($data.xsqgList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.price),
        c: common_vendor.t(item.oldPrice),
        d: item.rate,
        e: common_vendor.t(item.rate),
        f: index
      };
    }),
    m: common_vendor.f($data.sjpjList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    n: common_vendor.f($data.sjb1List, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.price),
        c: index
      };
    }),
    o: common_vendor.f($data.sjb2List, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    p: common_vendor.f(_ctx.jdhxList, (item, index, i0) => {
      return common_vendor.e({
        a: item.image,
        b: item.tag
      }, item.tag ? {
        c: common_vendor.t(item.tag)
      } : {}, {
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.price),
        f: index,
        g: common_vendor.o(($event) => _ctx.navToDetailPage(item), index)
      });
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/components/unicorn-page-shop-jd/unicorn-page-shop-jd.vue"]]);
wx.createComponent(Component);
