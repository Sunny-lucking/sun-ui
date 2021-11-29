<template>
  <div>
    <input
      type="text"
      v-model="method"
      placeholder="需要使用的方法名字，例如：isFigure"
    />
    <input type="text" v-model="value" placeholder="验证的内容" />
    <button @click="onValidate">提交</button>
  </div>
</template>
<script>
import Utils from "../vue-tool/packages/Utils";
export default {
  name: "INavBar",
  data() {
    return {
      value: "",
      method: "",
    };
  },
  props: {},
  methods: {
    onValidate() {
      if (this.method && this.value) {
        alert(Utils[this.method](this.value));
      }
    },
  },
};
</script>
<style scoped>
input {
  width: 95%;
  height: 29px;
  border: 1px solid #eee;
  margin-top: 10px;
  text-indent: 13px;
}
button {
  width: 80%;
  height: 31px;
  display: block;
  margin: 0 auto;
  border: 0;
  background: #00b7ff;
  color: white;
  margin-top: 12px;
}
</style>