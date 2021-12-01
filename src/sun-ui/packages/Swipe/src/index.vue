<template>
  <div class="ml-swipe">
    <div
      @touchstart="start"
      @touchend="chend"
      @touchmove="move"
      :style="`transform:translateX(${left}px);transition-duration:${durations}ms;width:${
        (swipeNum + 1) * this.width
      }px`"
      class="ml-swipe-main"
    >
      <slot></slot>
    </div>
    <div v-if="indicators" class="ml-swipe-border">
      <span
        :class="currentIndex - 1 == index ? 'ml-swipe-sele' : ''"
        v-for="(item, index) in swipeNum"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [position=left] - 轮播位置 支持left/right
 * @param {boolean} [touchable=true] - 是否可以通过手势滑动
 * @param {boolean} [indicators=true] - 是否显示底部.... 指示器
 * @param {Number} [autoplay=3000] - 自动轮播时间
 * @param {number} [duration=500] - 动画时间
 * @param {number} [autochange=0] - 自动滑动的位置，返回的索引
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: "ml-swipe",
  data() {
    return {
      swipeNum: null,
      left: 0,
      currentIndex: 1,
      durations: 0,
      touchstartPageX: null,
      targetPagex: 0,
      width: null,
      callback1: "",
      setTimeoutVal: null,
      weizhi: "", //left/right
    };
  },
  methods: {
    chend() {
      if (this.moveDirection == "left") {
        this.transform3d("left");
      } else if (this.moveDirection == "right") {
        this.transform3d("right");
      } else {
        this.transform3d();
      }
      this.moveDirection = "";
      if (!this.touchable) {
        return;
      }
      this.$emit("change", this.currentIndex);
    },
    move(e) {
      if (!this.touchable) {
        return;
      }
      var pagex = e.targetTouches[0].pageX;
      var jisuan = pagex - this.targetPagex;
      var moveDistance = e.targetTouches[0].pageX - this.touchstartPageX;
      if (this.targetPagex != "") {
        this.left += jisuan;
        if (moveDistance > 50) {
          this.moveDirection = "right";
        } else if (moveDistance < -50) {
          this.moveDirection = "left";
        } else {
          this.moveDirection = "";
        }
      }
      this.targetPagex = pagex;
    },
    start(e) {
      this.targetPagex = "";
      this.touchstartPageX = e.targetTouches[0].pageX;
    },
    transform3d(direction) {
      // 开始时候
      clearInterval(this.setTimeoutVal);

      // 补位
      var alternateItem = this.$children[0].$el;
      if (this.currentIndex == this.swipeNum - 1 && direction == "left") {
        alternateItem.style.transform = `translateX(${
          (this.currentIndex + 1) * this.width
        }px)`;
      }
      this.durations = this.duration; //动画滚动时间
      if (direction == "left") {
        this.left = -this.currentIndex * this.width;
        this.currentIndex += 1;
        if (this.currentIndex == this.swipeNum - 1) {
          this.$children[
            this.$children.length - 1
          ].$el.style.transform = `translateX(0px)`;
        }
      }
      if (direction == "right") {
        if (this.currentIndex !== 0) {
          this.currentIndex -= 1;
          this.left = (this.currentIndex - 1) * -this.width;
          alternateItem.style.transform = `translateX(0px)`;
        }
        this.currentIndex == 1
          ? (this.$children[
              this.$children.length - 1
            ].$el.style.transform = `translateX(-${
              this.swipeNum * this.width
            }px)`)
          : "";
      }
      !direction ? (this.left = (this.currentIndex - 1) * -this.width) : "";
      // 结束时候
      var currentIndex = this.currentIndex;
      direction == "left" && currentIndex >= this.swipeNum + 1
        ? (this.currentIndex = 1)
        : "";
      direction == "right" && currentIndex == 0
        ? (this.currentIndex = this.$children.length)
        : "";
      setTimeout(() => {
        this.durations = 0;
        if (direction == "left") {
          if (currentIndex >= this.swipeNum + 1) {
            this.left = 0;
            alternateItem.style.transform = `translateX(0px)`;
            this.$children[
              this.$children.length - 1
            ].$el.style.transform = `translateX(-${
              this.swipeNum * this.width
            }px)`;
          }
        }
        if (direction == "right") {
          if (currentIndex == 0) {
            this.$children[
              this.$children.length - 1
            ].$el.style.transform = `translateX(0px)`;
            this.left = (-this.$children.length + 1) * this.width;
            alternateItem.style.transform = `translateX(${
              this.$children.length * this.width
            }px)`;
          }
        }
        this.$emit("autochange", this.currentIndex);
      }, this.durations);
      this.setTimeoutVal = setInterval(() => {
        this.transform3d(this.weizhi);
      }, this.autoplay);
    },
  },
  mounted() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.swipeNum = this.$children.length;
    var alternateItem = this.$children[this.$children.length - 1].$el;
    alternateItem.style.transform = `translateX(-${
      this.swipeNum * this.width
    }px)`;
    this.setTimeoutVal = setInterval(() => {
      this.transform3d(this.weizhi);
    }, this.autoplay);
    this.weizhi = this.position;
  },
  props: {
    duration: {
      default: 500,
      type: Number,
    },
    autoplay: {
      default: 5000,
      type: Number,
    },
    indicators: {
      default: true,
      type: Boolean,
    },
    position: {
      default: "left",
      type: String,
    },
    touchable: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.ml-swipe {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.ml-swipe-sele {
  background: #ff976a !important;
}

.ml-swipe-main {
  /* overflow: hidden; */
  position: relative;
  height: 100%;
}

.ml-swipe-border {
  position: absolute;
  top: 125px;
  width: 50%;
  text-align: center;
  left: 25%;
}

.ml-swipe-border span {
  width: 8px;
  margin-left: 4px;
  height: 8px;
  display: inline-block;
  background: rgba(87, 86, 86, 0.3);
  border-radius: 50%;
}

.ml-swipe-border span:nth-child(1) {
  margin: 0;
}
</style>