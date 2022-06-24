import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import createListView from "../views/CreateListView.js";
// import { NewsView, AskView } from "../views/";
import { emitter } from "../utils/mitt.js";
import { store } from "../store/store.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news", // url 주소
      name: "news",
      /*
        HOC 를 사용했을때 라우터에서 이동 시 createListView 를 불러온다.
      */
      // component: createListView("NewsView"), // url 주소로 갔을 때 표시될 컴포넌트

      /*
        라우터 네비게이션 가드를 활용해서 진행한다.

        Mixin 혹은 HOC 를 사용했을때는 listItem 이라는 공통의 리스트를 두고
        이동할때마다 해당 리스트에 fetch를 통해 데이터를 업데이트 해서 뿌려주는식이다.

        하지만, 속도가 느릴때 기존에 남아있던 데이터가 출력되는 현상이 발생할 가능성이 있기 때문에
        네비게이션 가드를 통해 정합성을 좀 더 맞출 수 있다.

      */
      component: NewsView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      /*
        HOC 를 사용했을때 라우터에서 이동 시 createListView 를 불러온다.
        createListView.js 에서 fetch 로직을 실행하고 ListView 를 통해 ListItem 컴포넌트를 불러와 뿌려준다.
      */
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
