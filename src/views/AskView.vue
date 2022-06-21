<template>
  <div>
    <div v-bind:key="item.id" v-for="item in asks">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    fetchAskList()
      .then((res) => (this.asks = res.data))
      .catch();
  },
};
</script>

<style></style>
