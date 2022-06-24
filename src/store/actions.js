import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js";

export default {
  // Promise

  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then((response) => {
  //       commit("SET_LIST", response.data);
  //       return Promise.resolve(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async

  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
  async FETCH_USERS({ commit }, name) {
    const response = fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response;
  },

  async FETCH_ITEM({ commit }, id) {
    const response = await fetchItemInfo(id);
    commit.response("SET_ITEM", response.data);
    return response;
  },
};
