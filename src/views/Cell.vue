<template>
  <div>
    <p class="title">基础用法</p>
    <sun-cell title="标题" value="这是内容"></sun-cell>
    <sun-cell
      title="标题"
      seat="left"
      is-link
      label="描述信息"
      value="这是内容"
    ></sun-cell>
    <p class="title">单元格大小</p>
    <sun-cell title="标题" value="这是内容" height="50px"></sun-cell>
    <sun-cell
      title="标题"
      seat="left"
      label="描述信息"
      value="这是内容"
      height="50px"
    ></sun-cell>
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
.title {
  font-size: 14px;
  color: #999;
  margin-top: 14px;
  margin-bottom: 13px;
  text-indent: 10px;
}
</style>
