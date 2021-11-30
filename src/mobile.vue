<template>
  <div>
    <nav-bar
      left-text
      @click-left="se"
      :title="$router.history.current.meta.name"
      :left-arrow="true"
    ></nav-bar>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created: function () {},
  methods: {
    se() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  background: #fafafa;
  min-height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
