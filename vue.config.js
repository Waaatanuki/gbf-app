const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: "./",
    devServer: {
        proxy: {
            "/api": {
                target: "https://info.gbfteamraid.fun/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
});
