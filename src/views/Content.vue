<template>
  <div>
    <ChoicePicker />
    <Boxes />
  </div>
</template>

<script>
import Boxes from "@/components/Boxes.vue";
import ChoicePicker from "@/components/ChoicePicker.vue";
export default {
  name: "Content",
  components: { ChoicePicker, Boxes },
};
</script>

<style>
</style>