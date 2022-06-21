import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutation.js";
import actions from "./actions.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsks(state) {
      return state.asks;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedUsers(state) {
      return state.user;
    },
  },
  mutations,
  actions,
});
