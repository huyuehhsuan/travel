<template>
  <div>
    <router-link to="/" class="back">&lt; Back</router-link>
    <div class="container">
      <div class="img">
        <img :src="cityList[cityData.id - 1].img" alt="" />
      </div>

      <div class="cityInfo">
        <h1>{{ cityData.city.toUpperCase() }}</h1>
        <p>
          {{ cityList[cityData.id - 1].description }}
        </p>
      </div>
    </div>
    <Scroll />
  </div>
</template>

<script>
import Scroll from "@/components/Scroll.vue";
export default {
  name: "Detial",
  components: { Scroll },
  data() {
    return {
      cityData: { id: 1, city: "tokyo" },
      cityList: [
        {
          id: 1,
          city: "tokyo",
          img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          description:
            "tokto Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 2,
          city: "newyork",
          img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "newyork Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 3,
          city: "bangkok",
          img: "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          description:
            "bangkok Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 4,
          city: "paris",
          img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "paris Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 5,
          city: "seoul",
          img: "https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "seoul Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 6,
          city: "taipei",
          img: "https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          description:
            "taipei Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.query.Id) {
      this.cityData = this.cityList[this.$route.query.Id - 1];
    } else {
      this.cityData = this.cityList[0];
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
}
.back {
  display: block;
  padding: 20px 80px;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
}
.container .img {
  width: 50%;
  overflow: hidden;
  text-align: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
}
.container .img img {
  width: 100%;
  object-fit: cover;
}
.container .cityInfo {
  width: 50%;
  padding: 2rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
}
</style>