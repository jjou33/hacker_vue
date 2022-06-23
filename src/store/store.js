import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutation.js";
import actions from "./actions.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedUsers(state) {
      return state.user;
    },
    fetchedItems(state) {
      return state.item;
    },
    fetchedList(state) {
      return state.list;
    },
  },
  mutations,
  actions,
});
