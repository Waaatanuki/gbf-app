// 引入axios
import axios from "axios";

// 创建实例
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
        if (error.message.includes("timeout")) {
            console.log("网络超时");
        }
        return Promise.reject(error);
    }
);

export default instance;
