import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        meta: { layout: "empty" },
        component: () => import("./../views/login/index"),
    },
    {
        path: "/register",
        name: "register",
        meta: { layout: "empty" },
        component: () => import("./../views/register/index"),
    },
    {
        path: "/",
        name: "Home",
        meta: { layout: "main" },
        component: Home,
    },
    {
        path: "/categories",
        name: "categories",
        meta: { layout: "main" },
        component: () => import("./../views/categories/index"),
    },
    {
        path: "/detail",
        name: "detail",
        meta: { layout: "main" },
        component: () => import("./../views/detail/index"),
    },
    {
        path: "/history",
        name: "history",
        meta: { layout: "main" },
        component: () => import("./../views/history/index"),
    },
    {
        path: "/planning",
        name: "planning",
        meta: { layout: "main" },
        component: () => import("./../views/planning/index"),
    },
    {
        path: "/profile",
        name: "profile",
        meta: { layout: "main" },
        component: () => import("./../views/profile/index"),
    },
    {
        path: "/record",
        name: "record",
        meta: { layout: "main" },
        component: () => import("./../views/record/index"),
    },
    ,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
