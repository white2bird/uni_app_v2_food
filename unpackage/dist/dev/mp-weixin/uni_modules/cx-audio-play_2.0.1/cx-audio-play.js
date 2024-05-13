"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "cx-audio-play",
  props: {
    list: {
      //音频数据
      Type: Array,
      default: () => []
    },
    Faskms: {
      //快进秒数
      Type: Number,
      default: 15
    },
    Slowms: {
      //快退秒数
      Type: Number,
      default: 15
    },
    autoNext: {
      Type: Boolean,
      default: false
    },
    autoplays: {
      //是否开启自动播放
      Type: Boolean,
      default: false
    },
    slideYes: {
      //滑动进度条 - 是否开启播放
      Type: Boolean,
      default: false
    },
    switAud: {
      Type: Boolean,
      //切换上下音频 - 是否开启播放
      default: false
    },
    BsNav: {
      //倍数-传入
      Type: Array,
      default: () => [{
        id: 1,
        bs: "1.0"
      }, {
        id: 1.5,
        bs: "1.5"
      }, {
        id: 2,
        bs: "2.0"
      }]
    }
  },
  data() {
    return {
      shows: false,
      //倍数弹框
      show: true,
      //倍数弹框动画默认开启
      jian: true,
      //减-切换图标
      jia: true,
      //加-切换图标
      succes: false,
      //播放按钮
      bsid: "",
      //倍数默认显示第一个
      bsindex: 0,
      //倍数默认显示第一个
      num: 0,
      current: 0,
      //当前选中的索引
      recorPath: "",
      //音频播放地址
      lock: false,
      // 锁
      currentTime: 0,
      //当前进度
      duration: 100,
      // 总进度
      videoContext: null,
      loading: true
      //锁 加载
    };
  },
  onReady() {
  },
  onShow() {
  },
  mounted() {
    this.videoContext = common_vendor.index.createVideoContext("myVideo", this);
    if (this.list.length != 0) {
      this.recorPath = this.list[0].recorPath;
      if (this.list.length > 1) {
        this.jia = false;
        if (this.autoplays) {
          this.succes = true;
        }
      }
    }
    if (this.BsNav.length != 0) {
      this.bsid = this.BsNav[0].id;
      this.$nextTick(() => {
        this.videoContext.playbackRate(this.bsid);
      });
    }
  },
  updated() {
  },
  onLoad() {
  },
  onHide() {
    this.videoContext.stop();
  },
  onUnload() {
    this.videoContext.stop();
  },
  destroyed() {
  },
  computed: {
    timer() {
      return calcTimer(this.currentTime);
    },
    overTimer() {
      return calcTimer(this.duration);
    }
  },
  watch: {},
  methods: {
    plays() {
      if (!this.list || this.list.length == 0) {
        console.log("暂无音频数据~");
        return;
      }
      this.playloading();
      this.succes = !this.succes;
      if (this.succes) {
        this.videoContext.play();
      } else {
        common_vendor.index.hideLoading();
        this.videoContext.pause();
      }
    },
    beishu() {
      this.shows = !this.shows;
    },
    // 倍速
    setRate(index, item) {
      this.bsid = item.id;
      this.bsindex = index;
      this.shows = false;
      this.videoContext.playbackRate(item.id);
    },
    // 更新进度条 
    timeupdate(event) {
      if (this.lock)
        return;
      var currentTime, duration;
      if (event.detail.detail) {
        currentTime = event.detail.detail.currentTime;
        duration = event.detail.detail.duration;
      } else {
        currentTime = event.detail.currentTime;
        duration = event.detail.duration;
      }
      this.currentTime = currentTime;
      this.duration = duration;
    },
    // 拖动进度条
    sliderChange(data) {
      if (this.slideYes && !this.succes) {
        this.videoContext.play();
        this.succes = true;
      }
      this.videoContext.seek(data.detail.value);
    },
    //拖动中
    sliderChanging(data) {
      if (data.detail.value == 0) {
        this.succes = false;
        this.videoContext.pause();
      }
      this.currentTime = data.detail.value;
    },
    // 视频加载完成
    loadedmetadata(data) {
      this.duration = data.detail.duration;
    },
    sig() {
      if (!this.list || this.list.length == 0) {
        console.log("暂无音频数据~");
        return;
      }
      this.num -= 1;
      if (this.num < this.list.length) {
        this.loading = true;
        this.playloading();
      }
      if (this.num + 1 < this.list.length && this.num + 1 != 1) {
        this.jia = false;
        this.jian = false;
      } else {
        this.jian = true;
        this.jia = false;
      }
      this.recorPath = this.list[this.num].recorPath;
      if (this.switAud) {
        this.succes = true;
        setTimeout(() => {
          this.videoContext.play();
        }, 100);
      } else {
        this.succes = false;
      }
    },
    xig() {
      if (!this.list || this.list.length == 0) {
        console.log("暂无音频数据~");
        return;
      }
      this.num += 1;
      if (this.num < this.list.length) {
        this.loading = true;
        this.playloading();
      }
      if (this.num + 1 < this.list.length) {
        this.jia = false;
        this.jian = false;
      } else {
        this.jia = true;
        this.jian = false;
      }
      this.recorPath = this.list[this.num].recorPath;
      if (this.switAud) {
        this.succes = true;
        setTimeout(() => {
          this.videoContext.play();
        }, 100);
      } else {
        this.succes = false;
      }
    },
    nosig() {
      common_vendor.index.showToast({
        title: "到头了~",
        icon: "none"
      });
    },
    noxig() {
      common_vendor.index.showToast({
        title: "没有更多了~",
        icon: "none"
      });
    },
    kt() {
      if (!this.list || this.list.length == 0) {
        console.log("暂无音频数据~");
        return;
      }
      let a = (this.currentTime - Math.floor(15 % 60)).toFixed(0);
      if (a < 1) {
        this.succes = false;
        this.videoContext.pause();
      }
      this.videoContext.seek(a);
    },
    kj() {
      if (!this.list || this.list.length == 0) {
        console.log("暂无音频数据~");
        return;
      }
      let a = (this.currentTime + Math.floor(15 % 60)).toFixed(0);
      this.videoContext.seek(a);
    },
    next(data) {
      this.succes = false;
      if (!this.autoNext) {
        return;
      }
      if (this.num + 1 < this.list.length) {
        this.succes = true;
        this.num += 1;
        this.recorPath = this.list[this.num].recorPath;
        setTimeout(() => {
          this.videoContext.play();
        }, 100);
      } else {
        this.jia = true;
        this.jian = false;
      }
    },
    playloading() {
      if (this.loading) {
        common_vendor.index.showLoading({
          title: "音频缓存中..."
        });
        this.loading = false;
      }
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 1600);
    }
  },
  watch: {}
};
function calcTimer(timer) {
  if (timer === 0 || typeof timer !== "number") {
    return "00:00";
  }
  let mm = Math.floor(timer / 60);
  let ss = Math.floor(timer % 60);
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  return mm + ":" + ss;
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.jian
  }, $data.jian ? {
    b: common_vendor.o((...args) => $options.nosig && $options.nosig(...args))
  } : {
    c: common_vendor.o((...args) => $options.sig && $options.sig(...args))
  }, {
    d: common_vendor.o(($event) => $options.kt()),
    e: $data.succes ? "/static/bofang2.png" : "/static/zt.png",
    f: common_vendor.o(($event) => $options.plays()),
    g: common_vendor.o(($event) => $options.kj()),
    h: $data.jia
  }, $data.jia ? {
    i: common_vendor.o((...args) => $options.noxig && $options.noxig(...args))
  } : {
    j: common_vendor.o((...args) => $options.xig && $options.xig(...args))
  }, {
    k: $data.recorPath,
    l: common_vendor.o((...args) => $options.timeupdate && $options.timeupdate(...args)),
    m: $props.autoplays,
    n: common_vendor.o((...args) => $options.loadedmetadata && $options.loadedmetadata(...args)),
    o: common_vendor.o((...args) => $options.next && $options.next(...args)),
    p: common_vendor.t($options.timer),
    q: common_vendor.o((...args) => $options.sliderChange && $options.sliderChange(...args)),
    r: common_vendor.o((...args) => $options.sliderChanging && $options.sliderChanging(...args)),
    s: $data.duration,
    t: $data.currentTime,
    v: common_vendor.o(($event) => $data.lock = true),
    w: common_vendor.o(($event) => $data.lock = false),
    x: $options.overTimer != "NaN:NaN"
  }, $options.overTimer != "NaN:NaN" ? {
    y: common_vendor.t($options.overTimer)
  } : {}, {
    z: common_vendor.t($props.BsNav[$data.bsindex].bs),
    A: common_vendor.o((...args) => $options.beishu && $options.beishu(...args)),
    B: $data.shows
  }, $data.shows ? common_vendor.e({
    C: $data.show
  }, $data.show ? {
    D: common_vendor.f($props.BsNav, (item, index, i0) => {
      return {
        a: common_vendor.t(item.bs),
        b: index,
        c: common_vendor.o(($event) => $options.setRate(index, item), index),
        d: $data.bsid == item.id ? "#8D48FE" : ""
      };
    })
  } : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0ae104ee"], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/uni_modules/cx-audio-play_2.0.1/cx-audio-play.vue"]]);
wx.createComponent(Component);
