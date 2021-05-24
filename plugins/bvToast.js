export default ({}, inject) => {
    inject('toast', (title, message, variant='primary') => {
        $nuxt.$bvToast.toast(message, {
            title: title,
            autoHideDelay: 5000,
            variant:variant
        });
    });
}
