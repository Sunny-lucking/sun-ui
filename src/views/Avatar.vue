<template>
  <div>
    <p class="title">默认</p>
    <avatar defaultAvatar='https://pic3.zhimg.com/v2-09c709d9258a389842292dd030482003_is.jpg'></avatar>
    <br><br>
    <p class="title">在直播中</p>
    <avatar defaultAvatar='https://pic3.zhimg.com/v2-09c709d9258a389842292dd030482003_is.jpg' :isLive="true"></avatar>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
<style scoped>
.button {
  margin-top: 20px;
}
div{
      text-align: center;
    font-size: 15px;
    color: #999;
    margin-top: 10px;
}
</style>
