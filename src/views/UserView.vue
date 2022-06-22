<template>
  <div>
    <user-profile :itemInfo="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ "Joined " + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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
