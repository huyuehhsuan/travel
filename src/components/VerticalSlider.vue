<template>
  <div class="container">
    <div class="slider-container">
      <div class="left-slider">
        <div style="background-color: #ffc44f">
          <h1>Nature</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style="background-color: #ff367f">
          <h1>Travel</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style="background-color: #66a1ff">
          <h1>Freedom</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style="background-color: #e6f1f5">
          <h1>Explore</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="right-slider">
        <div
          style="
            background-image: url('https://images.unsplash.com/photo-1455448972184-de647495d428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80');
          "
        ></div>
        <div
          style="
            background-image: url('https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
          "
        ></div>
        <div
          style="
            background-image: url('https://images.unsplash.com/photo-1571623330223-dd78c862712d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80');
          "
        ></div>
        <div
          style="
            background-image: url('https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
        ></div>
      </div>
      <div class="active-buttons">
        <button class="down-button" @click="changeSlide('down')">
          <i class="fa-solid fa-arrow-down"></i>
        </button>
        <button class="up-button" @click="changeSlide('up')">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalSlider",
  data() {
    return {
      activeSliderIndex: 0,
    };
  },
  mounted() {
    const leftSlider = document.querySelector(".left-slider");
    const rightSlider = document.querySelector(".right-slider");
    const slidesLength = rightSlider.querySelectorAll("div").length;
    leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;
  },
  methods: {
    changeSlide(direction) {
      const sliderContainer = document.querySelector(".slider-container");
      const rightSlider = document.querySelector(".right-slider");
      const leftSlider = document.querySelector(".left-slider");
      const slidesLength = rightSlider.querySelectorAll("div").length;
      const slideHeight = sliderContainer.clientHeight;
      if (direction === "up") {
        this.activeSliderIndex++;
        if (this.activeSliderIndex > slidesLength - 1) {
          this.activeSliderIndex = 0;
        }
      }

      if (direction === "down") {
        this.activeSliderIndex--;
        if (this.activeSliderIndex < 0) {
          this.activeSliderIndex = slidesLength - 1;
        }
      }
      rightSlider.style.transform = `translateY(-${
        slideHeight * this.activeSliderIndex
      }px)`;
      leftSlider.style.transform = `translateY(${
        slideHeight * this.activeSliderIndex
      }px)`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  height: 100vh;
  margin: 0;
}
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.left-slider {
  height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s;
}
.left-slider > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.left-slider h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}
.right-slider {
  height: 100%;
  width: 65%;
  position: absolute;
  top: 0;
  left: 35%;
  transition: transform 0.5s;
}
.right-slider > div {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}
button {
  background-color: #fff;
  border: none;
  color: rgb(153, 153, 153);
  font-size: 1rem;
  padding: 1rem;
}
button:hover {
  color: rgb(66, 66, 66);
  cursor: pointer;
}
button:focus {
  outline: none;
}
.slider-container .active-buttons button {
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 10;
}
.slider-container .active-buttons .down-button {
  transform: translateX(-100%);
  border-radius: 5px 0 0 5px;
}
.slider-container .active-buttons .up-button {
  transform: translateY(-100%);
  border-radius: 0 5px 5px 0;
}
</style>
