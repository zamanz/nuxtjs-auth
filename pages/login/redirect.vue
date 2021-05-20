<template>
   <div class="preloader">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
    </div>
</template>

<script>
    export default {
        middleware:'guest',
        layout:'empty',
        data(){
            return{
                token: this.$route.query.token ?? null
            }
        },
        mounted(){
            console.log("Token " + this.token);
            this.$auth.setToken('local', 'Bearer ' + this.token);
            this.$auth.setStrategy('local')
            this.$auth.fetchUser().then(() =>{
                return this.$router.push('/dashboard')
            }).catch((error) => {
                this.$auth.logout()
                console.log(error);
            })
        }
    }
</script>
<style>
    .preloader {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1050;
        background: rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>