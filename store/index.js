export const state = () => ({
    counter: 0,
    tags: [],
    users:[]
})


export const mutations = {
    increment(state, data) {
        state.counter++
    },

    setTags(state, data) {
        state.tags = data
    },

    setUsers(state, data) {
        state.users = data
    }
}

export const getters = {
    getTags(state) {
        return state.tags
    },
    getUsers(state) {
        return state.users
    }
}

export const actions = {
    async nuxtServerInit({commit}){
        try{
            const data = await this.$axios.$get("init");
            commit('setTags', data.tags)
            commit('setUsers', data.users)
            //console.log('Init Data',data)
        }catch(err){
            console.log(err.response);
        }
    },
}
