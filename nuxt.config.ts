// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: "QTIM",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
                { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" },
                { name: "title", content: "QTIM" },
            ],
        },
    },
    telemetry: false,
    devtools: { enabled: true },
    modules: [["@pinia/nuxt", { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] }]],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "./assets/scss/index.scss" as *;',
                },
            },
        },
    },
})
