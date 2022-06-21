<template>
  <div>
    <p v-bind:key="item.id" v-for="item in fetchedAsks">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
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
