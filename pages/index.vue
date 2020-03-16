<template>
  <div class="container">
    <h1>Sample</h1>

    <button @click="onClickWarn">Warn</button>
    <button @click="onClickError">Error</button>
    <button @click="onClickSuccess">Success</button>
    <button @click="onClickClear">Clear</button>

    <notifications group="foo" position="bottom right"></notifications>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('mounted')
  },
  methods: {
    onClickWarn() {
      this.$notifyWrapper.warn({
        title: "TDKN",
        text: "Warn",
        duration: 10000
      });
    },
    onClickError() {
      this.$notifyWrapper.error({
        title: "TDKN",
        text: "Error",
        duration: 10000
      });
    },
    onClickSuccess() {
      this.$notifyWrapper.success({
        title: "TDKN",
        text: "Success",
        duration: 10000
      });
    },
    onClickClear() {
      this.$notifyWrapper.clear();
    }
  }
}
</script>

<style lang="scss">
  .vue-notification {
    padding: 10px;
    margin: 0 5px 5px;

    font-size: 12px;

    color: #ffffff;
    background: #44A4FC;
    border-left: 5px solid #187FE7;

    &.warn {
      background: #ffb648;
      border-left-color: #f48a06;
    }

    &.error {
      background: #E54D42;
      border-left-color: #B82E24;
    }

    &.success {
      background: #68CD86;
      border-left-color: #42A85F;
    }
  }
</style>
