<template>
    <div class="container">
        <div class="justify-content-center d-flex align-items-center vh-100">
            <div class="col-lg-5 col-md-12">
                <div class="w-100">
                    <v-card :loading="isLoading">
                        <template slot="progress">
                            <v-progress-linear
                                color="bg-success"
                                height="5"
                                indeterminate
                            ></v-progress-linear>
                        </template>

                        <div class="card-body p-4">
                            <div class="text-center my-2">
                                <h3>Sign in</h3>
                                <p>Continue to Gmail</p>
                            </div>

                            <form @submit.prevent="login()" class="p-1">
                                <div class="form-group mt-2">
                                    <label for="email" class="mb-1">Email Addrsss:</label>
                                    <input type="text" name="email" class="form-control" id="email" v-model="form.email" placeholder="Username or email" required>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="password" class="mb-1">Password:</label>
                                    <input type="password" name="password" id="password" class="form-control" v-model="form.password" placeholder="Password" required>
                                </div>
                                <div class="form-check my-2">
                                    <input class="form-check-input" type="checkbox" @click="show()" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault" @click="show()">Show password</label>
                                </div>
                                
                                <div class="d-flex justify-content-between">
                                    <p>অ্যাকাউন্ট তৈরি করুন</p>
                                    <button type="submit" class="btn btn-success signin-btn text-light">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </v-card>
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
            this.isLoading = true;
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
                this.isLoading = false;
                this.errors = error.response.data.errors;
                console.log(this.errors)
            }
            
        },
        loginFacebook() {
            console.log('facebook')
            this.$auth.loginWith('facebook');
        },

        loginGoogle(){
            console.log('google')
            this.$auth.loginWith('google');
        },
        show() {
            let input = document.getElementById("password"),
                type = input.getAttribute("type");

            if(type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        }
    },
}
</script>

<style>
    html,body{
        overflow: hidden;
        height: 100vh;
    }
</style>
