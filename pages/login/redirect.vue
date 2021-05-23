<template>
   <div class="preloader">
        <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status"></div>
    </div>
</template>

<script>
    export default {
        middleware:'auth',
        layout:'empty',
        redirect:false,
        data(){
            return {
                auth_data : null
            }
        },
        created(){
            this.auth_data = {
                strategy: this.$auth.strategy.name,
                ...this.$auth.user
            }
            console.log(this.auth_data);
        },
        mounted(){
            this.$auth.logout();
            this.loginSubmit(this.auth_data);
        },
        methods:{
            async loginSubmit(data){
                try {
                    await this.$auth.loginWith('local', { data: data });
                    this.$router.push("/profile/"+this.$auth.user.username);
                } catch (error) {
                    console.log("[Login submit Error]",error.response);
                }
            },
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