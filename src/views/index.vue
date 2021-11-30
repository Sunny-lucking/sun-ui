<template>
  <div class="index">
    <div class="nav" v-if="!mobile">
      <img
        class="nav-logo"
        @click="routerClick('brief')"
        src="@/assets/favicon.png"
        alt
      />
      <div class="nav-title" @click="routerClick('brief')">阳光 UI</div>
      <div class="right-link">
        <img
          src="@/assets/fluidicon.png"
          @click="onGotoAddress('https://github.com/Sunny-lucking/sun-ui')"
          class="fluidicon"
          alt
        />
        <img
          src="@/assets/c426a1116301d1fd178c51522484127a.png"
          @click="onGotoAddress('https://www.npmjs.com/package/vue-tool')"
          class="npm"
          alt
        />
      </div>
    </div>
    <div class="left" v-if="!mobile">
      <ul>
        <div v-for="(item, key, index) in listData" :key="index">
          <p class="title-left">{{ item.name }}</p>
          <li
            v-for="(subItem, index) in listData[key].list"
            :class="{ active: compon === subItem.router }"
            @click="routerClick(subItem.router)"
            :key="index"
          >
            <span>{{ subItem.name }}</span>
            <span>{{ subItem.value }}</span>
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
import { listDataMixin } from "@/constants/listDataMixin";
export default {
  name: "index",
  mixins: [listDataMixin],
  data() {
    return {
      compon: "",
      mobile: false,
      iframeSrc: "index2.html#/brief",
    };
  },
  methods: {
    routerClick(rou) {
      this.$router.push({ name: rou });
      this.compon = rou;
      this.iframeSrc = `index2.html#/${rou}`;
    },
    onGotoAddress(url) {
      window.open(url);
    },
  },
  components: {},
  created() {
    this.iframeSrc = `index2.html` + location.hash;
    if (document.body.offsetWidth < 400) {
      this.mobile = true;
    }
  },
};
</script>
<style scoped lang="scss">
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
  overflow-y: auto;
  width: 230px;
  position: fixed;
  top: 60px;

  p {
    font-weight: 800;
    color: #333;
  }

  ul {
    border-right: 1px solid #eee;
    min-height: 100%;
    text-indent: 9px;
    li {
      list-style: none;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #333;

      &:hover,
      &.active {
        color: peru;
      }

      span {
        &:not(:first-child):last-child {
          margin-left: 5px;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
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
</style>