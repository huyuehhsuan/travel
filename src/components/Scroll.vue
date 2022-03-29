<template>
  <div>
    <section style="min-height: unset">
      <h1 class="text-jump">ScrollDown &#8595;</h1>
      <!-- <h1 class="text-pop">ScrollDown &#8595;</h1>
      <h1 class="text-flip">ScrollDown &#8595;</h1>
      <h1 class="text-blink">ScrollDown &#8595;</h1> -->
    </section>
    <section>
      <div class="container reveal fade-bottom">
        <h2>WEATHER</h2>
        <div class="text-container">
          <div class="img-box">
            <img
              src="https://images.unsplash.com/photo-1555090975-4bbd0039351b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt=""
            />
          </div>
          <div class="text-box">
            <h3>四季分明 雨水充沛 氣候宜人</h3>
            <p>
              美國大部分地區都受到冬季季風的影響，大陸性明顯，但紐約位於美國東北，地處阿巴拉契亞山脈的背風一側，使得冬季風的影響止於中央大平原，加之墨西哥灣暖流為紐約增溫增溼，全年降水均勻，年降水量超過一千毫米，降水的天數可達123天，年平均溫度在10攝氏度左右，無霜期能夠達到全年的四分之三，形成了典型的溫帶海洋性氣候。
            </p>
            <p>
              受海洋性氣候的影響，紐約的夏季沒有過分炎熱，六月到九月份的平均溫度約為二十一攝氏度，降水最集中在7月份，同時也是溫度最高的時節，單月降水量可達100毫米左右，月平均溫度約27.5攝氏度，也會出現30度以上的天氣，空氣溼度大，午後常常有雷陣雨造訪，悶熱而潮溼，不宜進行長時間的戶外活動。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container reveal">
        <h2>CUISINE</h2>
        <div class="text-container">
          <div class="text-box reveal fade-left">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="img-box reveal fade-right">
            <img
              src="https://images.unsplash.com/photo-1555090975-4bbd0039351b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container reveal fade-right">
        <h2>FESTIVAL</h2>
        <div class="text-container">
          <div class="img-box reveal fade-right">
            <img
              src="https://images.unsplash.com/photo-1555090975-4bbd0039351b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt=""
            />
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  mounted() {
    window.addEventListener("scroll", this.reveal);
    const textJump = document.querySelector(".text-jump");
    textJump.innerHTML = textJump.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-jump span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textPop = document.querySelector(".text-pop");
    textPop.innerHTML = textPop.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-pop span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textFlip = document.querySelector(".text-flip");
    textFlip.innerHTML = textFlip.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-flip span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textBlink = document.querySelector(".text-blink");
    textBlink.innerHTML = textBlink.textContent.replace(
      /\S/g,
      "<span>$&</span>"
    );
    document.querySelectorAll(".text-blink span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
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

<style lang="scss">
section {
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1) {
  color: gray;
}
section:nth-child(2) {
  color: #ffffff;
  background: rgb(255, 73, 73);
}
section:nth-child(3) {
  color: rgb(255, 73, 73);
}
section:nth-child(4) {
  color: #ffffff;
  background: rgb(255, 73, 73);
}
section .container {
  margin: 100px;
  @media screen and (max-width: 700px) {
    margin: 0;
  }
}
section h1 {
  font-size: 3rem;
  margin: 20px;
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
section h2 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}

section .text-container {
  display: flex;
}
section .text-container .img-box {
  width: 50%;
  margin: 20px;
}
section .text-container .img-box img {
  width: 100%;
}
section .text-container .text-box {
  width: 50%;
  margin: 20px;
  padding: 2rem;
  background: rgb(255, 203, 62);
}
section .text-container .text-box h3 {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }
  section .text-container {
    flex-direction: column;
  }
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