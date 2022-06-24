import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
// import createListView from "../views/CreateListView.js";
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
      // component: createListView("NewsView"), // url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            emitter.emit("end:spinner");
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
      // component: createListView("AskView"),
      component: AskView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            emitter.emit("end:spinner");
            next();
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
      component: JobsView,
      beforeEnter: (to, from, next) => {
        emitter.emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            emitter.emit("end:spinner");
            next();
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
