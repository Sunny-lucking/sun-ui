<template>
  <div class="navs-bar">
    <p class="title">基础用法</p>
    <nav-bar
      left-text="左侧"
      title="标题"
      right-text="按钮"
      :left-arrow="true"
    ></nav-bar>
    <p class="title">高级用法</p>
    <nav-bar left-text="左侧" title="标题" :left-arrow="true">
      <sun-icon name="home" slot="right" size="18px" color="#ab97c3"></sun-icon>
    </nav-bar>
  </div>
</template>

<script>
export default {
  name: "INavBar",
  props: {},
  computed: {},
  methods: {},
};
</script>
<style type="text/css" scoped>
.title {
  font-size: 14px;
  color: #999;
  margin-top: 14px;
  text-indent: 10px;
  margin-bottom: 13px;
}
</style>