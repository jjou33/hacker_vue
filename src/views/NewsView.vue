<template>
  <div>
    <div v-bind:key="user.id" v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => (this.users = res.data))
      .catch();
  },
  methods: {},
};
</script>

<style></style>
