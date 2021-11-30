<template>
  <div>
    <img
      v-for="(item, index) in message"
      v-ml-lazy="item"
      alt=""
      :key="index"
    />
  </div>
</template>
<script>
export default {
  name: "mlLazy",
  data() {
    return {
      message: [
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
        "https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg",
      ],
    };
  },
  methods: {},
  components: {},
  mounted: function () {},
};
</script>
<style scoped>
img {
  width: 100%;
  height: 200px;
}
</style>
