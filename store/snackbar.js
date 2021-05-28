export const state = () => ({
    snack: '',
    color: ''
})
  
export const mutations = {
    setSnack(state, payload) {
        state.snack = payload.msg
        state.color = payload.color
    }
}