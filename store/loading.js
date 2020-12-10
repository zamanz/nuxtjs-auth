// store/loading.js

export const state = () => ({
    isLoading: false
})

export const mutations = {
    setLoadingState(state, status) {
        state.isLoading = status
    }
}
