<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixin/ListMixin.js";
// import { emitter } from "../utils/mitt.js";
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
};
</script>

<style></style>
