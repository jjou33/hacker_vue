import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js";

export default {
  FETCH_USERS({ commit }, name) {
    return fetchUserInfo(name)
      .then((response) => {
        console.log(4);
        commit("SET_USER", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then((response) => {
        commit("SET_ITEM", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
