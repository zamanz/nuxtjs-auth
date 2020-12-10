// plugins/axios.js

export default function ({$axios, store}) {
    $axios.onRequest(config => {
        if (process.client) {
            // loading status
            const enablePreloader = config.enablePreloader === undefined ? true : !! config.enablePreloader;
            // set loading
            store.commit('loading/setLoadingState', enablePreloader)
        }

    })

    $axios.onResponse(response => {
        if (process.client) {
            // continuous loading
            const continuousPreloaderOnResponse = !!response.config.continuousPreloaderOnResponse
            store.commit('loading/setLoadingState', continuousPreloaderOnResponse)
        }

    })

    $axios.onError(error => {
        if (process.client) {
            // continuous loading
            const continuousPreloaderOnError = !!error.response.config.continuousPreloaderOnError
            // stop loading
            store.commit('loading/setLoadingState', continuousPreloaderOnError)
        }
    })
}
