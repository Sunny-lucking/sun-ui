<template>
  <div style="padding-bottom: 24px" class="mobile-show">
    <img src="@/assets/favicon.png" />
    <p class="ptex">sun-ui，简洁，便利！</p>
    <div class="liLink" v-for="(item, key, index) in listData" :key="index">
      <template v-if="item.name !=='开发指南'">
        <sun-cell
          @click="onChooseMenu(key)"
          :height="'47px'"
          :size="'16px'"
          :title="item.name"
          is-link
        ></sun-cell>
        <div class="liLinks" :style="style(item)">
          <sun-cell
            v-for="(subItem, index) in listData[key].list"
            @click="onGotoCompDemo(subItem.router)"
            ref="cell"
            :title="subItem.value"
            is-link
            :key="index"
          ></sun-cell>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { listDataMixin } from "@/constants/listDataMixin";

export default {
  name: "Button",
  mixins: [listDataMixin],
  data() {
    return {};
  },
  methods: {
    style(item) {
      return {
        height: !item.isExpand ? "0px" : `${item.list.length * 39}px`,
      };
    },
    onGotoCompDemo(router) {
      this.$router.push({ path: router });
    },
    onChooseMenu(key) {
      this.listData[key].isExpand = !this.listData[key].isExpand;
    },
  },
  created() {},
};
</script>
<style scoped lang="scss">
.mobile-show {
  &::-webkit-scrollbar {
    display: none;
  }
}
img {
  width: 37%;
  display: block;
  margin: 0 auto;
  margin-top: 29px;
  margin-bottom: 24px;
}
.button {
  margin-top: 20px;
}
.liLink {
  overflow: hidden;
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
}
.liLinks {
  height: 0px;
  transition: height 0.6s;
  background: white;
}
.ptex {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 14px;
}
</style>
