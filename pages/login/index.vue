<template>

    <div class="container">
        <div class="justify-content-center d-flex align-items-center vh-100">
            <div class="col-md-5 col-sm-12">
                <div class="w-100">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <form @submit.prevent="login()">
                                <div class="form-group mt-2">
                                    <label for="email">Email Addrsss:</label>
                                    <input type="text" name="email" class="form-control" id="email" v-model="form.email" placeholder="Username or email" required>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="password">Password:</label>
                                    <input type="password" name="password" id="password" class="form-control" v-model="form.password" placeholder="Password" required>
                                </div>
                                <p class="btn btn-link text-decoration-none text-dark px-0" @click.prevent="show()" id="show_password">Show password</p>
                                <button type="submit" class="btn btn-success w-100 signin-btn">Sign In</button>
                            </form>
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <button class="btn btn-primary w-50 mx-1" type="button" @click.prevent="loginFacebook">Facebook</button>
                            <button class="btn btn-danger w-50 mx-1" @click="loginGoogle">Google</button>
                        </div>
                    </div>
                </div>
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
            errors: [],
            form: {
                email: 'zaman7u@gmail.com',
                password: '12345678',
            },
            isLoading: false
        }
    },

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
            }
            catch (error) {
                this.errors = error.response.data.errors;
                console.log(this.errors)
            }
            
        },
        loginFacebook() {
            console.log('facebook')
            this.$auth.loginWith('facebook');
        },

        loginGoogle(){
            window.open(process.env.baseURL + '/auth/redirect/google');
        },
        show() {
            let input = document.getElementsById("password"),
                type = input.getAttribute("type");

            if(type === "password") {
                input.type = "text";
                document.getElementById('show_password').innerHTML="Hide password";
            } else {
                input.type = "password";
                document.getElementById('show_password').innerHTML="Show password";
            }
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
