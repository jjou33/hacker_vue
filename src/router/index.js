import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import createListView from "../views/CreateListView.js";
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
        HOC 사용
      */
      component: createListView("NewsView"), // url 주소로 갔을 때 표시될 컴포넌트
    },
    {
      path: "/ask",
      name: "ask",
      /*
        Navigation Guard 사용
        Mixin 사용
      */
      component: AskView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
            // emitter.emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView("JobsView"),
      /*
        Navigation Guard 사용
        Mixin 사용
      */
      component: JobsView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
            // emitter.emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      },
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
