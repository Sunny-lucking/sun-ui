<template>
  <div class="index">
    <div class="nav" v-if="!mobile">
      <img
        class="nav-logo"
        @click="briefClick('brief')"
        src="@/assets/favicon.png"
        alt
      />
      <div class="nav-title" @click="briefClick('brief')">阳光 UI</div>
      <div class="right-link">
        <img
          src="@/assets/fluidicon.png"
          @click="fluidicon('https://github.com/Sunny-lucking/sun-ui')"
          class="fluidicon"
          alt
        />
        <img
          src="@/assets/c426a1116301d1fd178c51522484127a.png"
          @click="fluidicon('https://www.npmjs.com/package/vue-tool')"
          class="npm"
          alt
        />
      </div>
    </div>
    <div class="left" v-if="!mobile">
      <ul>
        <p class="zhinan">开发指南</p>
        <p class="list" @click="briefClick('brief')">快速上手</p>
        <p class="title-left">方法</p>
        <li
          @click="routerClick(item.router)"
          :key="index + 1000"
          v-for="(item, index) in way"
        >
          <span>{{ item.value }}</span>
        </li>
        <div class="mari" v-for="(items, key, index) in message" :key="index">
          <p class="title-left">{{ key }}</p>
          <li
            @click="routerClick(item.router)"
            :key="index"
            v-for="(item, index) in message[key]"
          >
            {{ item.name }}
            <span>{{ item.value }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="main markdown-body" v-if="!mobile">
      <router-view></router-view>
    </div>
    <div class="right" :style="mobile ? 'top: 2%;left: 8%;' : ''">
      <img
        src="https://mint-ui.github.io/docs/static/img/phone.5909f66.png"
        alt
      />
      <div class="right-main">
        <iframe :src="iframeSrc" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import sunAlert from "../sun-ui/packages/sunAlert";
export default {
  name: "index",
  data() {
    return {
      compon: "",
      mobile: false,
      iframeSrc: "index2.html#/brief",
      way: [
        { name: "工具方法", router: "Utils", value: "工具方法" },
        { name: "图片处理", router: "Picture", value: "图片处理" },
        { name: "数据缓存", router: "Cache", value: "数据缓存" },
        { name: "模拟表单", router: "FormHttp", value: "模拟表单" },
      ],
      message: {
        基础组件: [
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
        反馈组建: [
          { name: "sunAlert", router: "sunAlert", value: "弹框" },
          { name: "Toast", router: "Toast", value: "轻提示" },
          { name: "Popup", router: "Popup", value: "弹出层" },
        ],
      },
    };
  },
  methods: {
    routerClick: function (rou) {
      this.$router.push({ name: rou });
      this.compon = rou;
      this.iframeSrc = `index2.html#/${rou}`;
    },
    briefClick(url) {
      this.$router.push({ path: url });
      this.iframeSrc = `index2.html#/${url}`;
    },
    fluidicon(url) {
      window.open(url);
    },
  },
  components: {},
  created: function () {
    this.iframeSrc = `index2.html` + location.hash;
    if (document.body.offsetWidth < 400) {
      this.mobile = true;
      sunAlert({
        title: "提示",
        content: "建议采用PC端查看应用",
        confirmButtonText: "确认",
        showCancelButton: false,
        success: function () {},
      });
    }
  },
};
</script>
<style scoped lang="scss">
.mari {
  height: auto !important;
}
.title-left {
  font-size: 15px;
  font-weight: 800 !important;
  margin-top: 17px;
  color: #666 !important;
}
.list {
  font-size: 14px;
  margin-top: 25px;
  margin-bottom: 17px;
  font-weight: 500 !important;
}
/* 内容是main */
.right-main {
  height: 79%;
  width: 89%;
  background: white;
  position: absolute;
  top: 11%;
  left: 5.5%;
}
iframe {
  width: 100%;
  height: 100%;
}
h2,
h3 {
  font-weight: 500;
}

.index,
.left {
  height: 100%;
}
.left {
  height: 91%;
}
.left p {
  font-weight: 800;
  color: #333;
}

.main {
  width: 53%;
  height: 100%;
  min-width: 427px;
  /* margin-left: 53px; */
  margin: 0 auto;
  position: relative;
  left: -100px;
  margin-top: 96px;
}

.left {
  overflow-y: auto;
  width: 230px;
  position: fixed;
  top: 60px;
}

.right {
  width: 320px;
  height: 640px;
  margin-right: 20px;
  position: fixed;
  right: 30px;
  top: 70px;
}

.right img {
  width: 100%;
  height: 100%;
}

.zhinan {
  padding-top: 25px;
}

.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 3%;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 10;
  top: 0;

  .nav-logo {
    width: 40px;
  }

  .nav-title {
    margin-left: 10px;
    font-size: 18px;
  }

  .right-link {
    position: absolute;
    right: 100px;
    .fluidicon,
    .npm {
      width: 26px;
    }
    .npm {
      margin-left: 10px;
    }
  }
}

ul li {
  list-style: none;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  color: #333;
}

ul li > span {
  color: #999;
  font-size: 12px;
}

ul {
  border-right: 1px solid #eee;
  min-height: 100%;
  text-indent: 9px;
}

ul li:hover {
  color: rgb(128, 158, 182);
}
</style>