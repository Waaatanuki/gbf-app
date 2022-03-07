import { createRouter, createWebHashHistory } from "vue-router";
import OtherPage from "../pages/OtherPage.vue";
import HomePage from "../pages/HomePage.vue";
import EvokerPage from "../pages/EvokerPage.vue";
import HihiiroSuki from "../pages/HihiiroSuki.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/evokerpage",
        name: "EvokerPage",
        component: EvokerPage,
    },
    {
        path: "/hihiirosuki",
        name: "HihiiroSuki",
        component: HihiiroSuki,
    },
    {
        path: "/otherpage",
        name: "OtherPage",
        component: OtherPage,
    },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
