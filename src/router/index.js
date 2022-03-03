import { createRouter, createWebHashHistory } from "vue-router";
import OtherPage from "../pages/OtherPage.vue";
import HomePage from "../pages/HomePage.vue";
import EvokerPage from "../pages/EvokerPage.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/otherpage",
        name: "OtherPage",
        component: OtherPage,
    },
    {
        path: "/evokerpage",
        name: "EvokerPage",
        component: EvokerPage,
    },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
