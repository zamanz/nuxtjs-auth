
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt auth',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css' }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@assets/scss/master.scss'
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
        '@nuxtjs/auth'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL:'https://api.kzaman.me/api/v1'
    },

    auth: {
        // Options
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'access_token' },
                    logout: { url: '/logout', method: 'post', propertyName: false },
                    user: { url: '/user', method: 'get', propertyName: 'user' }
                },
                tokenType: 'Bearer',
                tokenName:'Authorization'
            },
            facebook: {
                client_id: '672111516771724',
                client_secret:'8a23357938450747a907d695b5957367',
            },
            github: {
                client_id: 'd9810f8ceaee1badb42d',
                client_secret: 'c55b5428a0611fc680893b8603b63d8a7e0bd6ff'
            },
            google: {
                client_id: '847620353260-5qj0hpo06bcf4228nitofeu6ogc5ouq8.apps.googleusercontent.com'
            },
        },
        redirect: {
            login: '/login'
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
