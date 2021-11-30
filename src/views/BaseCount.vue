<template>
  <div>
    <p class="title">基础用法</p>
    <base-count v-slot="timeObj" :time="10000">
      <div>{{ timeObj }}</div>
    </base-count>

    <br /><br />

    <p class="title">获取---时：分：秒</p>
    <base-count v-slot="timeObj" :time="10000">
      <div style="width:100%">{{ timeObj.hh }}:{{ timeObj.mm }}:{{ timeObj.ss }}</div>
    </base-count>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {},
  mounted: function () {},
};
</script>
<style scoped>
.button {
  margin-top: 20px;
}
div {
  text-align: center;
  font-size: 15px;
  color: #999;
  margin-top: 10px;
}
</style>
