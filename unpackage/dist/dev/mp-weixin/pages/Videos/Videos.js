"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const instance = common_vendor.getCurrentInstance();
    const { $request } = instance.appContext.config.globalProperties;
    return {
      $request
    };
  },
  data() {
    return {
      list: [],
      currentId: 0,
      scrollH: 0,
      scrollTop: 0,
      height: 0,
      windowHeight: 0
    };
  },
  onLoad() {
    let that = this;
    this.getList();
    common_vendor.index.getSystemInfo({
      success: function(res) {
        that.windowHeight = res.windowHeight;
      }
    });
  },
  onPageScroll(res) {
    this.scrollH = res.scrollTop;
    if (this.scrollH > this.scrollTop || this.scrollH + this.windowHeight < this.scrollTop) {
      const e = common_vendor.index.createVideoContext("video" + this.currentId, this);
      e.pause();
    }
  },
  onHide() {
    this.currentId = 0;
  },
  methods: {
    play(id, i) {
      this.currentId = id;
      if (this.height == 0) {
        common_vendor.index.createSelectorQuery().select(".col").boundingClientRect((res) => {
          this.height = res.height;
          this.scrollTop = res.height * (i + 0.5);
        }).exec();
      } else {
        this.scrollTop = this.height * (i + 0.5);
      }
    },
    getList() {
      this.$request({
        url: "/resources/getResourcesByType",
        method: "POST",
        data: {
          pageNo: 1,
          pageSize: 100,
          type: [1]
        }
      }).then((res) => {
        this.list = res.data.map((item) => {
          item.img = item.thumbnail;
          item.video = item.href;
          item.videoId = item.id;
          item.name = item.title;
          return item;
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: $data.currentId == item.videoId
      }, $data.currentId == item.videoId ? {
        b: "video" + item.videoId,
        c: item.video
      } : {
        d: item.img
      }, {
        e: common_vendor.t(item.name),
        f: index,
        g: common_vendor.o(($event) => $options.play(item.videoId, index), index)
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/Videos/Videos.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
