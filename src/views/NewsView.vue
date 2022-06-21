<template>
  <div>
    <div v-bind:key="user.id" v-for="user in fetchedNews">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
  methods: {},
};
</script>

<style></style>
