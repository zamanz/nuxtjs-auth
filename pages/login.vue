<template>
    <div class="full-wrapper">
        <div class="wrapper">
            <!-- Alert message -->
            <!--<div class="alert alert-danger">
               Incorrect username or password.
           </div>-->
           <!-- End: Alert message -->

            <!-- Title -->
            <h2 class="mt-4">Sign In</h2>
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
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">Remember me</label>
                </div>
                <button type="submit" class="btn btn-block mt-3 signin-btn">Sign In</button>
            </form>
            <!-- End: Sign in form -->

            <!-- sign in text -->
            <a href="">Forgot password</a>
            <p class="mt-2">Don't have an account? <a href="">Sign Up</a></p>
            <!-- End: sign In text -->
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-info btn-sm" @click="loginFacebook">Facebook</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-sm" @click="loginGoogle">Google</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-success btn-sm" @click="loginGithub">Github</button>
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
                email: 'zaman@gmail.com',
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
                await this.$router.push('/profile')
            }
            catch (e) {
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
