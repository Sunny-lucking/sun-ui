<template>
  <div style="padding-bottom: 24px" class="mobile-show">
    <img src="@/assets/favicon.png" />
    <p class="ptex">vueTool，简洁，便利！</p>
    <div class="liLink" v-for="(item, key, index) in message" :key="index">
      <sun-cell
        @click="messageUfclick(index)"
        :height="'47px'"
        :size="'16px'"
        :title="key"
        is-link
      ></sun-cell>
      <div class="liLinks" :style="style(message[key], messageUf[index])">
        <sun-cell
          @click="router(items.router)"
          ref="cell"
          :title="items.value"
          is-link
          v-for="(items, index) in message[key]"
          :key="index"
        ></sun-cell>
      </div>
    </div>
  </div>
</template>
<script>
import indexs from "./index.vue";
import { listDataMixin } from "@/constants/listDataMixin";

export default {
  name: "Button",
  mixins: [listDataMixin],
  data() {
    return {
      message: [],
      messageUf: [],
    };
  },
  methods: {
    style(item, bller) {
      return {
        height: !bller ? "0px" : `${item.length * 39}px`,
      };
    },
    router(router) {
      this.$router.push({ path: router });
    },
    messageUfclick(index) {
      var msg = JSON.parse(JSON.stringify(this.messageUf));
      msg[index] = !msg[index];
      this.messageUf = msg;
    },
  },
  created() {
    var messageUf = [];
    var index = Object.keys(this.listData).length;
    for (var i = 0; i < index; i++) {
      messageUf.push(false);
    }
    this.messageUf = messageUf;
    this.message = this.listData;
  },
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
