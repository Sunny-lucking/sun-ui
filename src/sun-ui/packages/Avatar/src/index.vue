<template>
  <div class="_avatar" :style="style" @click="onClick">
    <img :src="src || defaultAvatar" v-if="!lazy" />
    <img v-lazy="src || defaultAvatar" v-else />
    <div
      v-if="!hideLiveLable && isLive"
      class="live-label"
      :class="liveLablePos"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    width: {
      type: [String, Number],
      default: "50px",
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: "",
    },
    defaultAvatar: {
      type: String,
      default: "",
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    hideLiveLable: {
      type: Boolean,
      default: false,
    },
    liveLablePos: {
      type: String,
      default: "middle",
    },
    borderColor: {
      type: String,
      default: "orange",
    },
    borderSize: {
      type: [String, Number],
      default: "1px",
    },
  },
  computed: {
    style() {
      const avatarStyle = {};
      if (this.width) {
        const width = +this.width ? `${+this.width / 75}rem` : this.width;
        avatarStyle.width = width;
        avatarStyle.height = width;
      }
      if (this.borderSize && this.borderColor) {
        const paddingStyle = +this.borderSize
          ? `${+this.borderSize / 75}rem`
          : this.borderSize;
        avatarStyle.padding = paddingStyle;
        avatarStyle.background = this.borderColor;
      }
      return avatarStyle;
    },
  },
  methods: {
    onClick() {
      this.$emit("handleAvatarClick");
    },
  },
};
</script>

<style lang='scss' scoped>
._avatar {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  // border-width: 3px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
  .live-label {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 10%);
    background-size: 100% 100%;
    width: 80%;
    height: 26.7%;
    background-image: url("./live.png");
  }
}
</style>
