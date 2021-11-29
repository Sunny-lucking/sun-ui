<template>
  <div>
    <div :class="Switch" @click="routerClick">
      <div :class="switchRou"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sun-switch",
  data() {
    return {
      switchType: false,
    };
  },
  model: {},
  methods: {
    routerClick() {
      this.switchType = !this.switchType;
      this.$emit("input", this.switchType);
      this.$emit("change", this.switchType);
    },
  },
  computed: {
    Switch() {
      return [
        "Switch",
        {
          "Switch-false": !this.switchType,
        },
      ];
    },
    switchRou() {
      return [
        "Switch-rou",
        {
          "Switch-rou-true": this.switchType,
        },
      ];
    },
  },

  components: {},
  created: function () {},
};
</script>
<style scoped>
.Switch {
  position: relative;
  width: 65px;
  height: 32px;
  background: #8b9fea;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: background-color 0.3s;
}
.Switch-false {
  background: #fff;
}
.Switch-rou {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  top: -1px;
  left: 0px;
  background: #fff;
  transition: transform 0.35s;
  box-sizing: border-box;
  border: 1px solid #eee;
}
.Switch-rou-true {
  transform: translate(32px, 0px);
}
</style>