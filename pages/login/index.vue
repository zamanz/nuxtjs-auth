<template>
    <div class="full-wrapper">
        <div class="wrapper">
            <!-- Alert message -->
            <!--<div class="alert alert-danger">
               Incorrect username or password.
           </div>-->
           <!-- End: Alert message -->

            <!-- Title -->
            <h2 class="mt-5">Sign In</h2>
            <!-- End: title -->
            <!-- Sign in form -->
            <form @submit.prevent="login()">
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                    <input type="text" name="email" class="form-control" v-model="form.email" placeholder="Username or email" required>
                </div>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                    <input type="password" name="password" class="form-control" v-model="form.password" placeholder="Password" required>
                    <a href="#" class="pass-eye" @click="show()"><i class="fas fa-eye"></i></a>
                </div>
                <button type="submit" class="btn btn-block w-100 mt-3 pb-2 signin-btn">Sign In</button>
            </form>
            <!-- End: Sign in form -->

            <!-- sign in text -->
            <a href="">Forgot password</a>
            <p class="mt-2">Don't have an account? <a href="">Sign Up</a></p>
            <!-- End: sign In text -->
            <div class="row">
                <div class="col-md-6">
                    <button class="btn btn-primary" @click="loginFacebook">Facebook</button>
                </div>

                <div class="col-md-6">
                    <button class="btn btn-danger" @click="loginGoogle">Google</button>
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
            form: {
                email: 'zaman7u@gmail.com',
                password: '12345678',
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
                enablePreloader: true, // enable prelaoder
                await this.$router.push('/dashboard')
            }
            catch (e) {
                console.log('Error: ' + e)
            }
            
        },
        loginFacebook() {
            window.open(process.env.baseURL + '/auth/redirect/facebook', '_blank');
        },

        loginGoogle(){
            window.open(process.env.baseURL + '/auth/redirect/google', '_blank');
        },
        show() {
            let input = document.getElementsByName("password")[0],
                type = input.getAttribute("type");

            if(type === "password") {
                input.type = "text";
                document.querySelector('.fa-eye').classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                document.querySelector('.fa-eye').classList.remove("fa-eye-slash");
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
