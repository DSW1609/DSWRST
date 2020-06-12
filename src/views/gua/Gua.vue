<template>
  <div class="Gua">
    <!-- 背景图 -->
    <img class="Gua_Bg" src="~assets/img/guagua/guagua_bg.png" alt />
    <!-- 左上角活动规则 -->
    <div class="Gua_Gz">游戏规则</div>
    <div class="Gua_Gz Gua_Tc" @click="Gua_No">退出</div>
    <!-- 制作地图 -->
    <div class="Gua_Map">
      <!-- 线条 -->
      <div v-for="(G,index) in 5" :key="index" class="Gua_Map_X" :class="'Gua_X' +index"></div>
      <!-- ＃ -->
      <div class="Gua_Jing">
        <img src="~assets/img/guagua/jing.png" alt />
      </div>
      <!-- 放上青蛙 -->
      <img
        @touchmove="Gua_Move($event,'.Gua_Gua1')"
        class="Gua_Gua Gua_Tsf1 Gua_Gua1"
        src="~assets/img/guagua/gua1.png"
        alt
      />
      <img
        @touchmove="Gua_Move($event,'.Gua_Gua2')"
        class="Gua_Gua Gua_Tsf1 Gua_Gua2"
        src="~assets/img/guagua/gua1.png"
        alt
      />
      <img
        @touchmove="Gua_Move($event,'.Gua_Gua3')"
        class="Gua_Gua Gua_Tsf2 Gua_Gua3"
        src="~assets/img/guagua/gua2.png"
        alt
      />
      <img
        @touchmove="Gua_Move($event,'.Gua_Gua4')"
        class="Gua_Gua Gua_Tsf2 Gua_Gua4"
        src="~assets/img/guagua/gua2.png"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Gua_No() {
      this.$router.push("/home");
    },
    Gua_Move(e, obj) {
      // 获得当前点击的元素
      let Move = document.querySelector(obj);
      // 获得当前的X坐标
      let X = e.changedTouches[0].clientX - 30;
      // 获得当前的Y坐标
      let Y = e.changedTouches[0].clientY - 30;
      Move.style.left = X + "px";
      Move.style.top = Y + "px";
    }
  }
};
</script>

<style scoped>
.Gua_Gua {
  position: fixed;
  width: 18vw;
  height: 18vw;
}
.Gua_Tsf1 {
  top: 30vw;
  transform: rotate(180deg);
}
.Gua_Tsf2 {
  top: 110vw;
}
.Gua_Gua1,
.Gua_Gua3 {
  left: 0;
}
.Gua_Gua2,
.Gua_Gua4 {
  left: 82vw;
}

.Gua_Map_X {
  position: absolute;
  width: 1vw;
  height: 90vw;
  border-radius: 1vw;
  background: #d77748;
}
.Gua_X1 {
  right: 0;
}
.Gua_X2 {
  left: 44.5vw;
  top: -45vw;
  transform: rotate(90deg);
}
.Gua_X3 {
  height: 126vw;
  left: 44.5vw;
  top: -18vw;
  transform: rotate(45deg);
}
.Gua_X4 {
  height: 126vw;
  left: 44.5vw;
  top: -18vw;
  transform: rotate(-45deg);
}
.Gua_Jing {
  position: relative;
  width: 30vw;
  height: 30vw;
  margin: auto;
  top: 62vw;
  border-radius: 30vw;
  border: 1vw solid #d77748;
  background: #5f9089;
}
.Gua_Jing img {
  width: 30vw;
}
.Gua {
  position: relative;
  width: 100vw;
  letter-spacing: 1px;
}
.Gua_Bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.Gua_Gz {
  position: absolute;
  width: 24vw;
  height: 8vw;
  line-height: 8vw;
  font-size: 4vw;
  text-align: center;
  color: #fff;
  left: 2vw;
  margin-top: 8vw;
  border-radius: 8vw;
  background: rgba(255, 255, 255, 0.3);
}
.Gua_Tc {
  width: 20vw;
  left: 78vw;
  background: rgba(255, 0, 0, 0.6);
}
.Gua_Map {
  position: relative;
  width: 90vw;
  height: 90vw;
  margin: 0 auto;
  top: 35vw;
}
</style>