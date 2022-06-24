import { emitter } from "../utils/mitt.js";
// import { store } from "../store/store.js";
export default {
  // created() {
  //   emitter.emit("start:spinner");
  //   store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => {
  //       // emitter.emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  mounted() {
    emitter.emit("end:spinner");
  },
};
