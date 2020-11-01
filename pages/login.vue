<template>
    <div>
        <div class="login">
            <div class="card">
                <div class="card-body">
                    <div class="social-btn">
                        <button class="btn btn-outline-success d-block btn-block" @click="loginFacebook">Login With Facebook</button>
                        <button class="btn btn-outline-danger d-block btn-block" @click="loginGoogle">Login With Google</button>
                        <button class="btn btn-outline-info d-block btn-block" @click="loginGithub">Login With Github</button>
                    </div>

                    <p class="login-box-msg text-center">Sign in to start your session</p>
                    <form @submit.prevent="login">
                        <div class="form-group mb-3">
                            <label for="email">email address</label>
                            <input id="email" type="email" class="form-control" v-model="form.email"
                                   placeholder="Email Address">
                        </div>

                        <div class="form-group mb-3">
                            <label for="password">password</label>
                            <input id="password" type="password" class="form-control" v-model="form.password"
                                   placeholder="Password" autocomplete="current-password">
                        </div>
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-outline-success btn-block" v-if="!isLoading">
                                    Login
                                </button>
                                <button type="button" class="btn btn-primary btn-block disable" v-else>Loading</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'empty',
    head: {
        title: 'Login'
    },
    middleware: 'guest',
    data() {
        return {
            form: {
                email: 'zaman@gmail.com',
                password: '1234',
            },
            isLoading: false
        }
    },
    mounted() {},
    methods: {
        async login() {
            try {
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
                await this.$router.push('/profile')
            } catch (e) {
                console.log('Error: ' + e)
            }
        },
        loginFacebook() {
            this.$auth.loginWith('facebook')
            this.$router.push('/profile')
        },
        loginGithub() {
            this.$auth.loginWith('github')
            this.$router.push('/profile')
        },
        loginGoogle(){
            this.$auth.loginWith('google')
            this.$router.push('/profile')
        }
    },
}
</script>

<style>
.login {
    margin: 0 auto;
    width: 50%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login .card{
    width: 100%;
}

.social-btn {
    text-align: center;
    margin-top: 10px;
}
</style>
