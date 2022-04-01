<template>
  <div class="backtotop" @click="goTop" :class="isTop ? 'backTopAfter' : ''">
    <div class="back-up">Top</div>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      scrollNum: 0, //滾動距離
      isTop: false, //是否顯示回到頂部按鈕
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  methods: {
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.backtotop {
  width: 50px;
  height: 50px;
  padding: 10px;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.3);
  text-align: center;
  position: fixed;
  right: 4%;
  bottom: -60px;
  border-radius: 100%;
  z-index: 10;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.back-up {
  vertical-align: middle;
  height: 1.5rem !important;
  width: 2rem !important;
}
.backtotop:hover {
  background-color: rgba(51, 51, 51, 0.7);
  transition: 0.3s ease-in-out;
}
.backTopAfter {
  transition: 0.3s ease-in-out;
  bottom: 60px;
}

@media screen and (max-width: 768px) {
  .backTopAfter {
    width: 30px;
    height: 30px;
    padding: 0;
  }
  .back-up {
    height: 0.85rem !important;
    width: 0.85rem !important;
  }
}
</style>