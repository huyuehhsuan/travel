<template>
  <div class="box-container">
    <div class="img-wrapper" v-for="item in dataList" :key="item.id">
      <img class="blur" :src="item.img" />
      <router-link
        :to="{ name: 'Detial', query: { Id: item.id } }"
        class="content fade"
      >
        <p>{{ item.city.toUpperCase() }}</p>
        <p>探索地點<i class="fa-solid fa-arrow-right icon"></i></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boxes",
  data() {
    return {
      dataList: [
        {
          id: 1,
          city: "tokyo",
          img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          city: "newyork",
          img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          id: 3,
          city: "bangkok",
          img: "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          id: 4,
          city: "paris",
          img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          id: 5,
          city: "seoul",
          img: "https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          id: 6,
          city: "taipei",
          img: "https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box-container {
  max-width: 1200px;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-items: center;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.img-wrapper {
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.img-wrapper > img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
}

.img-wrapper > .content {
  position: absolute;
  inset: 0;
  font-size: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-wrapper > .content:hover {
  cursor: pointer;
}
.img-wrapper .content p {
  font-size: 1rem;
  color: #fff;
}
.icon {
  animation-name: icon;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.img-wrapper > img,
.img-wrapper > .content {
  transition: 500ms ease-in-out;
}

.img-wrapper:hover > img.blur {
  filter: blur(5px);
}

.img-wrapper:hover > img.gray {
  filter: grayscale(1);
}

.img-wrapper:hover > img.zoom {
  transform: scale(1.1);
}

.img-wrapper > .content.fade {
  opacity: 0;
}
.img-wrapper:hover > .content.fade {
  opacity: 1;
}

.img-wrapper > .content.slide-left {
  transform: translateX(-100%);
}
.img-wrapper:hover > .content.slide-left {
  transform: translateX(0);
}

.img-wrapper > .content.slide-right {
  transform: translateX(100%);
}
.img-wrapper:hover > .content.slide-right {
  transform: translateX(0);
}

.img-wrapper > .content.slide-down {
  transform: translateY(-100%);
}
.img-wrapper:hover > .content.slide-down {
  transform: translateY(0);
}

.img-wrapper > .content.slide-up {
  transform: translateY(100%);
}
.img-wrapper:hover > .content.slide-up {
  transform: translateY(0);
}
@keyframes icon {
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(10px);
  }
}
</style>
