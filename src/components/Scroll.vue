<template>
  <div class="scroll-container">
    <section>
      <div class="container reveal fade-bottom">
        <h2>WEATHER</h2>
        <div class="text-container">
          <div class="img-box">
            <img :src="detial[id - 1].weather.img" alt="" />
          </div>
          <div class="text-box">
            <h3>{{ detial[id - 1].weather.title }}</h3>
            <p>{{ detial[id - 1].weather.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container reveal">
        <h2>CUISINE</h2>
        <div class="text-container">
          <div class="text-box reveal fade-left">
            <h3>{{ detial[id - 1].cuisice.title }}</h3>
            <p>{{ detial[id - 1].cuisice.text }}</p>
          </div>
          <div class="img-box reveal fade-right">
            <img :src="detial[id - 1].cuisice.img" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container reveal fade-right">
        <h2>FESTIVAL</h2>
        <div class="text-container">
          <div class="img-box reveal fade-right">
            <img :src="detial[id - 1].festival.img" alt="" />
          </div>
          <div class="text-box">
            <h3>{{ detial[id - 1].festival.title }}</h3>
            <p>{{ detial[id - 1].festival.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import detialList from "@/data/detialList.json";
export default {
  name: "Scroll",
  props: ["id"],
  data() {
    return {
      detial: detialList,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.reveal);
  },
  methods: {
    reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-container {
  margin: 80px auto;
}
section {
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1) {
  color: #173057;
}
section:nth-child(2) {
  color: #173057;
  background: #66a1ff;
  @media screen and (max-width: 576px) {
    background: transparent;
  }
}
section:nth-child(3) {
  color: #173057;
}
section:nth-child(4) {
  color: #173057;
  background: #66a1ff;
  @media screen and (max-width: 576px) {
    background: transparent;
  }
}
section .container {
  margin: 100px;
  @media screen and (max-width: 576px) {
    margin: 0;
  }
}
section h1 {
  font-size: 3rem;
  margin: 20px;
  @media screen and (max-width: 576px) {
    font-size: 2rem;
    text-align: center;
  }
}
section h2 {
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 576px) {
    margin-top: 20px;
    color: #999;
  }
}
section span {
  display: inline-block;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-delay: var(--delay);
  /* animation-iteration-count: infinite; */
}
section .text-jump span {
  animation-name: text-jump;
}
section .text-pop span {
  animation-name: text-pop;
}
section .text-flip span {
  animation-name: text-flip;
}
section .text-blink span {
  animation-name: text-blink;
}
section .text-container {
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
}
section:nth-child(2) .text-container {
  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
  }
}
section .text-container .img-box {
  width: 50%;
  margin: 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
  }
}
section .text-container .img-box img {
  width: 100%;
}
section .text-container .text-box {
  width: 50%;
  margin: 20px;
  padding: 2rem;
  background: rgb(255, 226, 145);
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
    background: transparent;
  }
}
section .text-container .text-box h3 {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
.active.text-jump {
  animation: text-jump 0.4s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes text-jump {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes text-pop {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
@keyframes text-flip {
  0%,
  100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
}
@keyframes text-blink {
  0%,
  100% {
    color: inherit;
  }
  50% {
    color: yellow;
  }
}
</style>