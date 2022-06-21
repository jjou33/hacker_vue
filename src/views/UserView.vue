<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ userInfo: "fetchedUsers" }),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USERS", userName);
  },
};
</script>

<style></style>
