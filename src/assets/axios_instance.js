import axios from "axios";
import qs from "qs";
const instance = axios.create({
    baseURL: "/api",
    timeout: 10000,
});

instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

const request = {};
const requestType = {
    teamraidlist: {
        describe: "获取最近一次的团战id和名称",
        url: "/web/teamraid",
    },
    getGuildrank: {
        describe: "获取查询条件相关的团列表",
        url: "/web/guildrank",
    },
    getGuildrankChartById: {
        describe: "获取指定团最近一天的详细贡献",
        url: "/web/guildrank",
    },
    getGuildDayPoint: {
        describe: "获取指定团最近一次团战的整体贡献",
        url: "/web/guildrank",
    },
    getGuildrankChartByRank: {
        describe: "获取指定团排名的贡献情况",
        url: "/web/guildrank",
    },
    getUserrank: {
        describe: "获取查询条件相关的用户列表",
        url: "/web/userrank",
    },
    getUserrankChartById: {
        describe: "获取指定用户最近一天的详细贡献",
        url: "/web/userrank",
    },
    getUserDayPoint: {
        describe: "获取指定用户最近一次团战的整体贡献",
        url: "/web/userrank",
    },
    getUserrankChartByRank: {
        describe: "获取指定用户排名的贡献情况",
        url: "/web/userrank",
    },
};

// 获取请求
request.getResponse = async (method, params) => {
    try {
        await instance.post("/login");
    } catch (error) {
        const response = await instance.post(
            requestType[method].url,
            qs.stringify({
                method,
                params: JSON.stringify(params),
            })
        );
        if (response.data.result.length == 0) {
            return "";
        } else {
            return response.data.result;
        }
    }
};

export { instance, request };
