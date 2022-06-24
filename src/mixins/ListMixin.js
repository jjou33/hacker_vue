import { emitter } from "../utils/mitt.js";
export default {
  created() {
    console.log(this.$route.name);
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("fetched");
        emitter.emit("end:spinner");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
