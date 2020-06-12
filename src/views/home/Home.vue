<template>
  <div class="Home">
    <div class="Head">
      <img src="~assets/img/HEAD.png" alt />
    </div>
    <!-- 日期天气栏 -->
    <div class="Dog_Date">- 2020年{{Dog_Mou}}月{{Dog_Date}}日 星期{{Dog_W[indey]}} 天气{{DOg_T[indey]}} -</div>
    <!-- 背景心心图 -->
    <img class="Dog_Love" @click="Love_CK" src="~assets/img/Love.svg" alt />
    <div class="Dog_Te">
      <span v-html="List[indez]"></span>
    </div>
    <div class="Dog_CK Dog_CK_R" @click="Dog_CK">
      <img src="~assets/img/GO.png" alt />
    </div>
    <div class="Dog_CK Dog_CK_L" @click="Dog_CK_L">
      <img src="~assets/img/GO.png" alt />
    </div>
    <!-- 按钮提示 -->
    <div class="Dog_T">
      <img class="Dog_TI Dog_TI_0" src="~assets/img/Dog_T0.png" alt />
      <img class="Dog_TI Dog_TI_1" src="~assets/img/Dog_T1.png" alt />
    </div>
    <!-- TOAST -->
    <transition
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <div class="Dog_Toast" @click="Toast_CK" v-show="isToast" v-html="TTE"></div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      List: [],
      // 控制日记页数
      indez: 0,
      // 控制日期
      indey: 2,
      // 初始月
      Dog_Mou: 4,
      // 初始日
      Dog_Date: 1,
      // 初始星期？
      Dog_W: ["一", "二", "三", "四", "五", "六", "日"],
      // 初始天气
      DOg_T: ["🌤", "⛅", "☀", "⛈", "🌦", "❄", "🌀"],
      // 显示弹窗
      isToast: false,
      // 弹窗文字
      TTE: ""
    };
  },
  methods: {
    addList() {
      var appKey = "e04cf6ab6dca1a657620264e87f1b257";
      var api = "http://api.tianapi.com/txapi/tiangou/index?key=" + appKey;
      axios.get(api).then(res => {
        this.List.push(res.data.newslist[0].content);
      });
    },
    more() {
      for (let index = 0; index < 3; index++) {
        this.addList();
      }
    },
    Dog_CK() {
      if (this.List.length - 2 == this.indez) {
        this.more();
      }
      this.indez += 1;
      if (this.indey < 6) {
        this.indey += 1;
      } else {
        this.indey = 0;
      }
      if (this.Dog_Date < 30) {
        this.Dog_Date += 1;
      } else {
        this.Dog_Date = 1;
        this.Dog_Mou += 1;
      }
    },
    Dog_CK_L() {
      if (this.indez == 0) {
        this.indez = 0;
        this.TTE = "没了, 从今天才开始甜的🐶";
        this.isToast = true;
        setTimeout(() => {
          this.isToast = false;
        }, 1100);
      } else {
        this.indez -= 1;
        if (this.Dog_Date == 1) {
          this.Dog_Date = 30;
          this.Dog_Mou -= 1;
        } else {
          this.Dog_Date -= 1;
        }
        if (this.indey == 0) {
          this.indey = 6;
        } else {
          this.indey -= 1;
        }
      }
    },
    Love_CK() {
      if (this.isToast == false) {
        this.TTE = "青蛙跳井🐸";
        this.isToast = true;
      } else {
        this.isToast = false;
      }
    },
    Toast_CK() {
      this.isToast = false;
      setTimeout(() => {
        this.$router.push("/gua");
      }, 600);
    }
  },
  mounted() {
    this.more();
  }
};
</script>

<style scoped>
.Dog_T {
  position: fixed;
  width: 100vw;
  height: 10vw;
  bottom: 20vw;
}
.Dog_TI {
  position: absolute;
  width: 12vw;
}
.Dog_TI_0 {
  left: 7vw;
}
.Dog_TI_1 {
  right: 7vw;
}
.Dog_Toast {
  position: fixed;
  width: 70vw;
  height: 12vw;
  line-height: 11vw;
  background: #fdfdfd;
  border: 0.5vw solid #622b12;
  border-radius: 5vw;
  text-align: center;
  color: #f9ae5d;
  font-weight: bold;
  font-size: 4.5vw;
  letter-spacing: 1px;
  left: 15vw;
  bottom: 50vw;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.Dog_Toast::before {
  position: absolute;
  content: "";
  width: 1vw;
  height: 100vh;
  top: 12vw;
  left: 50%;
  background: #fdfdfd;
}
.Home {
  width: 100vw;
  height: 100vh;
}
.Head {
  position: relative;
  width: 100vw;
  background: #19224d;
}
.Head img {
  position: relative;
  width: 100vw;
  margin-top: 8vw;
  top: -1px;
}
.Dog_Date {
  position: relative;
  width: 100vw;
  height: 10vw;
  line-height: 10vw;
  top: -5vw;
  color: #fff;
  text-align: center;
  font-size: 5vw;
  letter-spacing: 1px;
  background: #2d3e8c;
  border-bottom: 1px dashed #ffffff;
}
.Dog_CK {
  position: fixed;
  width: 15vw;
  height: 15vw;
  border-radius: 15vw;
  font-size: 5vw;
  bottom: 5vw;
  right: 5vw;
  animation: 2s Dog_Im linear infinite;
  transform: rotate(10deg);
}
.Dog_CK_L {
  left: 5vw;
}
.Dog_CK_L img {
  transform: rotateY(180deg);
}
.Dog_CK img {
  width: 15vw;
  height: 15vw;
}
@keyframes Dog_Im {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
.Dog_Te {
  position: relative;
  width: 100vw;
  top: -3vw;
  margin-bottom: 3vw;
  color: #fff;
  font-size: 5vw;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 2vw;
  line-height: 7.6vw;
  text-indent: 6vw;
  text-decoration: underline;
}
.Dog_Love {
  position: fixed;
  width: 30vw;
  height: 30vw;
  left: 35vw;
  bottom: 20vw;
}
</style>