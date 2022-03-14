import { createRouter, createWebHashHistory } from "vue-router";
import OtherPage from "../pages/OtherPage.vue";
import HomePage from "../pages/HomePage.vue";
import Kosenjou from "../pages/Kosenjou.vue";
import EvokerPage from "../pages/EvokerPage.vue";
import HihiiroSuki from "../pages/HihiiroSuki.vue";
import HihiiroSukiDetail from "../pages/HihiiroSukiDetail.vue";
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/kosenjou",
        name: "Kosenjou",
        component: Kosenjou,
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
                path: ":raidName",
                name: "HihiiroSukiDetail",
                component: HihiiroSukiDetail,
                props: true,
                beforeEnter: (to, from, next) => {
                    if (from.name != "HihiiroSuki") {
                        next("/hihiirosuki");
                    } else {
                        next();
                    }
                },
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
