<template>
  <div>
    <div v-bind:key="item.id" v-for="item in fetchedAsks">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsks"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style></style>
