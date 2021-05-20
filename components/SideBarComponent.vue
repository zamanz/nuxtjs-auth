<template>
    <div class="card bg-transparent border-0">
        <div class="card-body p-0">
            <button class="btn btn-primary w-100 mb-2" type="button" @click.prevent="loginFacebook">Facebook</button>
            <button class="btn btn-danger w-100" @click="loginGoogle">Google</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'SideBarComponent',
    data() {
        return {
            errors: [],
            isLoading: false
        }
    },

    methods: {
        loginFacebook() {
            console.log('facebook')
            this.$auth.loginWith('facebook');
        },

        loginGoogle(){
            window.open(process.env.baseURL + '/auth/redirect/google');
        }
    },
}
</script>