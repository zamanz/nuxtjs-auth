export default ({ app, store }, inject) => {
    inject("notifier", {
        snackBar(msg = '', color = '') {
            store.commit("snackbar/setSnack", { msg, color });
        }
    });
};
