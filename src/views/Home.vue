<template>
  <div class="home">
    <Navbar />
    <VerticalSlider />
    <router-view></router-view>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import VerticalSlider from "@/components/VerticalSlider.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "Home",
  components: { VerticalSlider, Navbar, Footer, BackToTop },
};
</script>
