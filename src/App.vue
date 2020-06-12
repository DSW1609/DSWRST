<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@import "assets/css/base.css";
body {
  background: #2d3e8c;
}
</style>
