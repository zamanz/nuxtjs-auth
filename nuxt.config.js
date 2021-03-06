export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Simple Nuxt Experimental Project",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            // { rel: "stylesheet", href: "/css/bootstrap.min.css" }
        ],
        script: [
            { type: "text/javascript", src: "/js/bootstrap.bundle.min.js" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/sass/app.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: "~/plugins/axios",
            mode: "client"
        },
        {
            src: "~/plugins/notifier",
            mode: "client"
        },
        { src: "~/plugins/validation" }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://bootstrap-vue.org
        'bootstrap-vue/nuxt',
        // https://vuetifyjs.com
        "@nuxtjs/vuetify",
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "nuxt-i18n",
        "@nuxtjs/auth",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios"
    ],

    i18n: {
        strategy: "prefix_and_default",
        locales: [
            {
                code: "en",
                name: "English",
                file: "en-US.js"
            },
            {
                code: "bn",
                name: "বাংলা",
                file: "bn-BD.js"
            }
        ],
        defaultLocale: "en",
        langDir: "language/",
        lazy: true,
        vueI18n: {
            fallbackLocale: "en"
        }
    },

    auth: {
        // Options
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: "/auth/login",
                        method: "post",
                        propertyName: "token"
                    },
                    logout: {
                        url: "/auth/logout",
                        method: "post",
                        propertyName: false
                    },
                    user: {
                        url: "/auth/current-user",
                        method: "get",
                        propertyName: "user"
                    }
                },
                tokenType: "Bearer",
                tokenName: "Authorization"
            },

            github: {
                client_id: "d9810f8ceaee1badb42d",
                client_secret: "7c9e230dccc0713fa62fa7bbf4b35a8717229a9d",
                redirect_uri: "http://localhost:3000/login/redirect"
            },
            facebook: {
                userinfo_endpoint: "https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email",
                client_id: "672111516771724",
                redirect_uri: "http://localhost:3000/login/redirect",
                scope: ["public_profile", "email"]
            },
            google: {
                client_id: "452750114138-fvel7uca5h57datku8tfr7ag9q8qme41.apps.googleusercontent.com",
                redirect_uri: "http://localhost:3000/login/redirect"
            }
        },

        redirect: {
            login: "/login",
            home: "/profile"
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "http://demo-laravel.test/api/v1"
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        //use for only bootstrap compile warning
        babel: {
            compact: true
        },

    },
    loading: {
        color: 'green',
        height: '3px'
    }
};
