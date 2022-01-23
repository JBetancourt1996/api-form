export default {
    head: {
        title: "Form",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content:
                    "",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    components: true,
    loading: { color: "#2c5282", height: "5px" },
    plugins: ["~/plugins/vee-validate.js",


    ],

    build: {
        postcss: { plugins: { tailwindcss: {}, autoprefixer: {}, }, },
        transpile: ["vee-validate/dist/rules"],

        extend(config, ctx) { }
    },
    buildModules: [

        '@nuxt/postcss8',
    ],
    css: ['@/assets/css/main.css',],
    modules: ["@nuxtjs/axios",],





};
