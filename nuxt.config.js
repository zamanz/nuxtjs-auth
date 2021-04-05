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
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js' }
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/scss/master.scss'
    ],

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
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/auth',
        'nuxt-i18n',
    ],

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
                    user: { url: '/auth/user', method: 'get', propertyName: 'user' }
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
        defaultLocale: 'bn',
        langDir: 'language/',
        lazy: true,
        vueI18n: {
            fallbackLocale: 'en',
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    server:{
        host: ''
    }
}
