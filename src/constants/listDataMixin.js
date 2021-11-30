export const listDataMixin = {
  data() {
    return {
      listData: {
        guide: [{ name: "start", router: "brief", value: "快速开始" }],
        way: [
          { name: "Utils", router: "Utils", value: "工具方法" },
          { name: "Image", router: "Picture", value: "图片处理" },
          { name: "Cache", router: "Cache", value: "数据缓存" },
          { name: "Form", router: "FormHttp", value: "模拟表单" },
        ],
        baseComp: [
          { name: "Icon", router: "Icon", value: "图标" },
          { name: "Cell", router: "Cell", value: "单元格" },
          { name: "List", router: "List", value: "瀑布流滚动" },
          { name: "NavBar", router: "NavBar", value: "导航栏" },
          { name: "Button", router: "Button", value: "按钮" },
          { name: "Swipe", router: "Swipe", value: "轮播" },
          { name: "Sticky", router: "Sticky", value: "粘贴定位" },
          { name: "Switch", router: "Switch", value: "开关" },
          { name: "mlLazy", router: "mlLazy", value: "图片懒加载" },
          { name: "Loading", router: "Loadings", value: "加载" },
        ],
        feedbackComp: [
          { name: "sunAlert", router: "sunAlert", value: "弹框" },
          { name: "Toast", router: "Toast", value: "轻提示" },
          { name: "Popup", router: "Popup", value: "弹出层" },
        ],
      }
    }
  }
}