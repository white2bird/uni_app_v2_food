"use strict";
const common_vendor = require("../../common/vendor.js");
const videoList = [
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 2343,
    dayNum: 3
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 1320,
    dayNum: 5
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 800,
    dayNum: 3
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 1306,
    dayNum: 11
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 309,
    dayNum: 38
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 306,
    dayNum: 34
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 987,
    dayNum: 2
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 356,
    dayNum: 4
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 3486,
    dayNum: 3
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 495,
    dayNum: 15
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 458,
    dayNum: 32
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 7843,
    dayNum: 1
  },
  {
    src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4",
    title: "uni-app跨平台终极解决方案",
    auth: "元咏科技",
    playNum: 527,
    dayNum: 24
  }
];
const unicornJson = {
  videoList
};
const _sfc_main = {
  data() {
    return {
      videoList: unicornJson.videoList,
      videoContextList: [],
      videoLocationInfo: [],
      scrollTopTimeOut: null,
      nowVideoMutedStatus: false,
      nowPlayVideoIndex: 0
    };
  },
  mounted: function() {
    console.log("onReady");
    this.videoContextList = [];
    for (let i = 0; i < this.videoList.length; i++) {
      this.videoContextList.push(common_vendor.index.createVideoContext("myVideo" + i, this));
    }
    const query = common_vendor.index.createSelectorQuery().in(this);
    query.selectAll(".videoIndexFlag").boundingClientRect((data) => {
      let videoLocationInfo = [];
      for (var i = 0; i < data.length; i++) {
        videoLocationInfo[i] = data[i].top;
      }
      this.videoLocationInfo = this.reCalcIndexArray(this.videoLocationInfo, videoLocationInfo);
    }).exec();
    setTimeout(() => {
      this.play(this.nowPlayVideoIndex);
    }, 200);
  },
  methods: {
    /**
     * 由于当前页面是通过组件开发，unicorn-ext页面引用
     * 组件中没有onPageScroll事件，所以通过unicorn-ext页面的onPageScroll事件调用当前组件的onPageScrollUnicorn方法
     * 达到我们的目的
     * 
     * 实际开发中，可以直接定义onPageScroll事件，稍微修改使用
     * 
     * @param {Object} _this
     * @param {Object} e
     */
    onPageScrollUnicorn: function(_this, e) {
      _this.nowVideoMutedStatus = true;
      if (_this.scrollTopTimeOut != null) {
        clearTimeout(_this.scrollTopTimeOut);
      }
      _this.scrollTopTimeOut = setTimeout(() => {
        let nowPlayVideoIndex = _this.getIndexByArray(_this.videoLocationInfo, e.scrollTop + 100);
        _this.pause(_this.nowPlayVideoIndex);
        _this.nowPlayVideoIndex = nowPlayVideoIndex;
        _this.play(_this.nowPlayVideoIndex);
        _this.nowVideoMutedStatus = false;
      }, 500);
    },
    videoErrorCallback: function(e, item) {
      console.log(e);
      console.log("videoErrorCallback", item);
    },
    /**
     * 重新计算Index数组信息
     * 
     * @param {Object} oldArray
     * @param {Object} newArray
     */
    reCalcIndexArray: function(oldArray, newArray) {
      if (oldArray == void 0 || oldArray.length == 0) {
        if (newArray != void 0 && newArray.length > 0) {
          return newArray;
        }
        return [];
      }
      if (newArray == void 0 || newArray.length == 0) {
        return oldArray;
      }
      let diff = oldArray[0] - newArray[0];
      newArray.splice(0, oldArray.length);
      for (var i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] + diff;
      }
      return oldArray.concat(newArray);
    },
    /**
     * 查找value在arr里面的临近值
     * @param {Object} arr
     * @param {Object} value
     */
    getIndexByArray: function(arr, value) {
      if (!arr instanceof Array) {
        return -1;
      }
      if (!value) {
        return -1;
      }
      let value1 = Number.parseInt(value);
      return arr.findIndex((e) => e - value1 > 0);
    },
    pause: function(index) {
      var obj = this.videoContextList[index];
      if (obj != null) {
        this.videoContextList[index].pause();
      } else {
        console.warn("视频对象为空，不需要执行暂停操作");
        console.warn(JSON.stringify(this.videoContextList));
      }
    },
    play: function(index) {
      var obj = this.videoContextList[index];
      if (obj != null) {
        this.videoContextList[index].play();
      } else {
        console.warn("视频对象为空，不需要执行播放操作");
        console.warn(JSON.stringify(this.videoContextList));
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.videoList, (item, index, i0) => {
      return {
        a: item.src,
        b: "myVideo" + index,
        c: common_vendor.o(($event) => $options.videoErrorCallback(this, item), index),
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.auth),
        f: common_vendor.t(item.playNum),
        g: common_vendor.t(item.dayNum),
        h: index
      };
    }),
    b: $data.nowVideoMutedStatus
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/components/unicorn-page-video-slide/unicorn-page-video-slide.vue"]]);
wx.createComponent(Component);
