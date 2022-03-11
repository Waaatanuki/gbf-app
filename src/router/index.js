import { createRouter, createWebHashHistory } from "vue-router";
import OtherPage from "../pages/OtherPage.vue";
import HomePage from "../pages/HomePage.vue";
import EvokerPage from "../pages/EvokerPage.vue";
import HihiiroSuki from "../pages/HihiiroSuki.vue";
import HihiiroSukiDetail from "../components/HihiiroSukiDetail.vue";
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
        children: [
            {
                path: "cb",
                name: "cb",
                component: HihiiroSukiDetail,
            },
            {
                path: "tuyobaha",
                name: "tuyobaha",
                component: HihiiroSukiDetail,
            },
            {
                path: "akx",
                name: "akx",
                component: HihiiroSukiDetail,
            },
            {
                path: "gurande",
                name: "gurande",
                component: HihiiroSukiDetail,
            },
        ],
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
