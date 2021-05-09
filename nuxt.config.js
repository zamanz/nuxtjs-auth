require('dotenv').config();
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Simple Nuxt Demo Project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' }
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {
            src: '~/plugins/axios',
            mode: 'client',
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        'nuxt-i18n',
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        'bootstrap-vue/nuxt',
    ],
    bootstrapVue: {
        icons: false
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL
    },

    auth: {
        // Options
        strategies: {
            
            local: {
                endpoints: {
                    login: { url: '/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/auth/logout', method: 'post', propertyName: false },
                    user: { url: '/auth/current-user', method: 'get', propertyName: 'user' }
                },
                tokenType: 'Bearer',
                tokenName:'Authorization'
            },

        },
        redirect: {
            login: '/login',
            home: '/'
        }
    },
    i18n: {
        strategy: 'prefix_and_default',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.js'
            },
            {
                code: 'bn',
                name: 'বাংলা',
                file: 'bn-BD.js'
            },
        ],
        defaultLocale: 'en',
        langDir: 'language/',
        lazy: true,
        vueI18n: {
            fallbackLocale: 'en',
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        babel: {
            compact: true
        }
    },
    server:{
        host: ''
    }
}
