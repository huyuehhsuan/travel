<template>
  <div class="home">
    <Navbar />
    <VerticalSlider />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import VerticalSlider from "@/components/VerticalSlider.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { VerticalSlider, Navbar, Footer },
};
</script>
