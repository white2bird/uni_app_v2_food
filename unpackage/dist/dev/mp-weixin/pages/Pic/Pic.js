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
      photoList: [],
      rows: 10,
      page: 1,
      isGet: true,
      loadTxt: ""
    };
  },
  onLoad() {
    this.getPhoto();
  },
  onReachBottom() {
    this.getPhoto();
  },
  methods: {
    /* 获取照片 */
    getPhoto() {
      if (!this.isGet) {
        return;
      }
      this.isGet = false;
      new Promise((success, error) => {
        if (this.page == 1) {
          common_vendor.index.showLoading({
            title: "加载中",
            mask: true
          });
        } else {
          this.loadTxt = "正在加载中";
        }
        this.$request({
          url: "/resources/getResourcesByType",
          method: "POST",
          data: {
            pageNo: 1,
            pageSize: 100,
            type: [3]
          }
        }).then((res) => {
          console.log(res.data, "ppp");
          const list = res.data.map((item) => {
            item.index = item.id;
            item.url = item.href;
            return item;
          });
          success(list);
        });
      }).then((res) => {
        if (this.page == 1) {
          common_vendor.index.hideLoading();
        }
        console.log("out", res);
        this.photoList = [...this.photoList, ...res];
        this.showImages();
      });
    },
    /* 显示照片 */
    showImages() {
      let index = (this.page - 1) * this.rows;
      let show = () => {
        if (index < this.photoList.length) {
          this.$set(this.photoList[index], "active", true);
          index++;
        } else {
          clearInterval(interval);
          this.loadTxt = "上拉加载更多";
          this.page++;
          this.isGet = true;
        }
      };
      let interval = setInterval(() => {
        show();
      }, 100);
    },
    /* 预览照片 */
    previewPhoto(e) {
      let index = e.currentTarget.dataset.index;
      let list = this.photoList.map((item, index2) => {
        return item.url;
      });
      common_vendor.index.previewImage({
        current: list[index],
        /* 传 Number H5 端出现不兼容 */
        urls: list
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.photoList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.title),
        c: index,
        d: item.active ? 1 : "",
        e: index,
        f: common_vendor.o((...args) => $options.previewPhoto && $options.previewPhoto(...args), index)
      };
    }),
    b: common_vendor.t($data.loadTxt)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/Pic/Pic.vue"]]);
wx.createPage(MiniProgramPage);
