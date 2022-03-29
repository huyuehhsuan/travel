<template>
  <div class="home">
    <Navbar />
    <VerticalSlider />
    <router-view></router-view>
  </div>
</template>

<script>
import VerticalSlider from "@/components/VerticalSlider.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: { VerticalSlider, Navbar },
};
</script>
