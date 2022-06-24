<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import { emitter } from "../utils/mitt.js";
import ListMixin from "../mixins/ListMixin.js";
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   // this.$store
  //   //   .dispatch("FETCH_LIST", this.$route.name)
  //   //   .then(() => {
  //   //     console.log("fetched");
  //   //     emitter.emit("end:spinner");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // },
};
</script>

<style></style>
