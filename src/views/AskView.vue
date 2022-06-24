<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import { emitter } from "../utils/mitt.js";
export default {
  components: {
    ListItem,
  },
  mounted() {
    emitter.emit("end:spinner");
  },
};
</script>

<style></style>
