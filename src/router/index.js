import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/evokerpage",
        name: "EvokerPage",
        component: () => import("../views/EvokerPage.vue"),
    },
    {
        path: "/guildwarsplan",
        name: "GuildWarsPlan",
        component: () => import("../views/GuildWarsPlan.vue"),
    },
    {
        path: "/critcalc",
        name: "CritCalc",
        component: () => import("../views/Tool/CritCalc.vue"),
    },
    {
        path: "/gachacalc",
        name: "GachaCalc",
        component: () => import("../views/Tool/GachaCalc.vue"),
    },
    {
        path: "/hihiirosuki",
        name: "HihiiroSuki",
        component: () => import("../views/HihiiroSuki.vue"),
    },
    // {
    //     path: "/guildwarsmonitor",
    //     name: "GuildWarsMonitor",
    //     component: () => import("../views/Tool/GuildWarsMonitor.vue"),
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
