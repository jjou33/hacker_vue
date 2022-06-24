import ListView from "./ListView.vue";
import { emitter } from "../utils/mitt.js";
export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션들
    name: name,
    created() {
      /*
        HOC 를 이용할때는 하위 코드가 필요함
        router 에서 createListView 를 불러오고 name 을 전달하면 
        ListView란 중간 컴포넌트를 만들고 FETCH_LIST 는 전달받은 name 을 기준으로
        각 조건에 맞는 action 을 실행하게 된다.

        이후 조건에 Listview 에서는 ListItem 컴포넌트를 통해 화면에 데이터를 뿌리게 된다.

      */
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
