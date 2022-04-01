<template>
  <div>
    <ChoicePicker />
    <Boxes />
    <Jumbotron />
  </div>
</template>

<script>
import Boxes from "@/components/Boxes.vue";
import ChoicePicker from "@/components/ChoicePicker.vue";
import Jumbotron from "@/components/Jumbotron.vue";
export default {
  name: "Content",
  components: { ChoicePicker, Boxes, Jumbotron },
};
</script>

<style>
</style>