<template>
  <div>
    <ul class="item-list">
      <li v-bind:key="item.id" v-for="item in listItems" class="post">
        <!-- 포인트 영영 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
              >{{ item.user }}</router-link
            >
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const routeName = this.$route.name;
    let actionName = "";
    if (routeName !== null && routeName === "news") {
      actionName = "FETCH_NEWS";
    } else if (routeName === "asks") {
      actionName = "FETCH_ASKS";
    } else if (routeName === "jobs") {
      actionName = "FETCH_JOBS";
    } else {
      console.log(actionName);
    }
    this.$store.dispatch(actionName);
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name !== null && name === "news") {
        return this.$store.state.news;
      } else if (name === "asks") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      } else {
        console.log(name);
      }
      return null;
    },
  },
};
</script>

<style scoped>
.item-list {
  margin: 0px;
  padding: 0px;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.item-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
