<template>
  <div class="footbanner">
    <img
      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
      alt="footbanner"
      class="bg-img"
    />

    <div class="footbanner-text">
      <h3 class="footbanner-title">現在立即展開旅程！</h3>
      <a class="effect effect-1">預定出發</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style lang="scss" scoped>
.footbanner {
  position: relative;
  .bg-img {
    width: 100%;
    object-fit: cover;
  }
  .footbanner-text {
    position: absolute;
    width: 400px;
    height: 150px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    @media screen and (max-width: 576px) {
      width: 180px;
      height: 80px;
    }
  }
  .footbanner-title {
    font-size: 36px;
    color: #fff;
    margin-bottom: 42px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-weight: 700;
    @media screen and (max-width: 576px) {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 14px;
    }
  }

  .effect {
    background-color: rgb(255, 255, 255);
    display: inline-block;
    position: relative;
    color: #551a8b;
    text-transform: capitalize;
    padding: 20px 0px;
    width: 150px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 576px) {
      width: 100px;
      padding: 10px 0px;
    }
  }
  .effect.effect-1 {
    transition: all 0.2s linear 0s;

    &:before {
      content: "\f178";
      font-family: FontAwesome;
      font-size: 15px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0;
      top: 0;
      opacity: 0;
      height: 100%;
      width: 40px;
      transition: all 0.2s linear 0s;
    }

    &:hover {
      text-indent: -10px;

      &:before {
        opacity: 1;
        text-indent: 0px;
      }
    }
  }
}
</style>