<template>
  <div class="Dog_Go">
    <!-- 狗头启动图 -->
    <img src="~assets/img/LOGO.png" alt />
    <div class="Dog_Tit">甜狗日记</div>
    <!-- 点击进入 -->
    <transition leave-active-class="animated bounceOut">
      <div class="Dog_In" v-show="Dog" @click="DogClick">跳过 {{Time}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Dog: true,
      Time: 5
    };
  },
  methods: {
    DogClick() {
      this.Dog = false;
      setTimeout(() => {
        this.$router.push("/home");
      }, 600);
    },
    // 定义倒计时事件
    DogTime() {
      setInterval(() => {
        this.Time--;
        if (this.Time == 0) {
          this.DogClick();
        }
      }, 1000);
    }
  },
  mounted() {
    this.DogTime();
  }
};
</script>

<style scoped>
.Dog_Go {
  position: relative;
  width: 100vw;
  height: 100vh;
}
img {
  position: absolute;
  width: 50vw;
  height: 50vw;
  left: 25vw;
  top: 30vw;
  padding: 3vw;
  border-radius: 50vw;
  background: #f8c300;
  border: 2vw solid #ffffff;
}
.Dog_Tit {
  position: absolute;
  width: 100vw;
  text-align: center;
  top: 88vw;
  font-size: 10vw;
  font-weight: bold;
  color: #f8c300;
  letter-spacing: 1px;
}
.Dog_In {
  position: absolute;
  width: 58vw;
  height: 13vw;
  left: 21vw;
  line-height: 13vw;
  text-align: center;
  bottom: 10vw;
  font-size: 6vw;
  background: #768feb;
  color: #fff;
  border-radius: 14vw;
}
</style>