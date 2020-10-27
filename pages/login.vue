<template>
    <div>
        <div class="login">
            <div class="card" style="width: 80%;">
                <div class="card-body">
                    <p class="login-box-msg text-center">Sign in to start your session</p>

                    <form @submit.prevent="login">
                        <div class="form-group mb-3">
                            <label for="email">email address</label>
                            <input id="email" type="email" class="form-control" v-model="form.email" placeholder="Email Address">
                        </div>

                        <div class="form-group mb-3">
                            <label for="password">password</label>
                            <input id="password" type="password" class="form-control" v-model="form.password" placeholder="Password" autocomplete="current-password">
                        </div>
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-primary btn-block" v-if="!isLoading">Sign In</button>
                                <button type="button" class="btn btn-primary btn-block disable" v-else>Loading</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <p class="mb-1 text-center">
                        <a href="">I forgot my password</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout:'empty',
        head:{
            title: 'Login'
        },

        data(){
            return {
                form: {
                    email: 'zamn.info@gmail.com',
                    password: '12345678',
                },
                isLoading : false
            }
        },
        mounted(){

        },
        methods:{
            async login() {
                try {
                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.form.email,
                            password: this.form.password
                        }
                    })
                } catch (e) {
                    console.log('Error: ' + e)
                }
            }
        }

    }
</script>

<style>
    .login{
        margin: 0 auto;
        width: 600px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
