<template>
  <div class="sun-sticky" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sun-sticky",
  props: {
    top: {
      type: [Number, String],
      default: 1,
    },
  },
  computed: {
    style() {
      return {
        top: this.top + "px",
        "z-index": this.zIndex,
      };
    },
  },
};
</script>
<style>
.sun-sticky {
  position: sticky;
  top: 30px;
}
</style>