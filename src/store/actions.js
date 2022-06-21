import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
      })
      .catch();
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch();
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASKS", data);
      })
      .catch();
  },
  FETCH_USERS({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch();
  },
};
