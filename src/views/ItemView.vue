<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :profileInfo="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{ itemInfo.user }}
        </router-link>
        <template slot="time">{{ "Posted " + itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>
        {{ itemInfo.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      itemInfo: "fetchedItems",
    }),
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", askId);
  },
};
</script>
