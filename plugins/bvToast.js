export default ({app, store}, inject) => {
    inject('bToast', (title, message, variant='primary') => {
        $nuxt.$bvToast.toast(message, {
            title: title,
            autoHideDelay: 5000,
            variant:variant
        });
    });
}
