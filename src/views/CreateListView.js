import ListView from "./ListView.vue";
import { emitter } from "../utils/mitt.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션들
    name: name,
    created() {
      emitter.emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            emitter.emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 500);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
