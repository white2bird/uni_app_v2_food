"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_le_audio = common_vendor.resolveComponent("le-audio");
  _component_le_audio();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Voices",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const { $request } = instance.appContext.config.globalProperties;
    const audioActiveIndex = common_vendor.ref(0);
    const showAudioListIcon = common_vendor.ref(false);
    const showAudioSpeedIcon = common_vendor.ref(true);
    const autoplay = common_vendor.ref(false);
    const audioList = common_vendor.ref([
      // {
      // 	title: 'aaa',
      // 	fileUrl: 'http://localhost:8080/static/sample-3s.mp3'
      // },
      // {
      // 	title: 'aaa',
      // 	fileUrl: 'http://localhost:8080/static/sample-3s.mp3'
      // }
    ]);
    const getData = () => {
      $request({
        url: "/resources/getResourcesByType",
        method: "POST",
        data: {
          pageNo: 1,
          pageSize: 100,
          type: [2]
        }
      }).then((res) => {
        const list = res.data.map((item) => {
          item.fileUrl = item.href;
          return item;
        });
        audioList.value = list;
      });
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activeIndex: audioActiveIndex.value,
          audioData: audioList.value,
          showAudioListIcon: showAudioListIcon.value,
          showAudioSpeedIcon: showAudioSpeedIcon.value,
          autoplay: autoplay.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ed48b289"], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/Voices/Voices.vue"]]);
wx.createPage(MiniProgramPage);
