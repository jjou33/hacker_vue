<template>
  <div>
    <div v-bind:key="job.id" v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((res) => (this.jobs = res.data))
      .catch();
  },
};
</script>

<style></style>
