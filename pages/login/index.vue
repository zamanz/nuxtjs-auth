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
                            <div class="text-center mb-4 mt-3">
                                <h1 class="mb-2 font-medium text-lg">Sign in</h1>
                                <p>Use your Email Address</p>
                            </div>

                            <form @submit.prevent="login" class="p-1">
                                
                                <div class="form-group">
                                    <v-text-field
                                        label="Email Addrsss"
                                        outlined
                                        v-model="form.email"
                                        type="text"
                                    ></v-text-field>
                                    <InlineError :errors="errors" v-if="errors" field="email" />
                                </div>
                                <div class="form-group mt-4">
                                        <v-text-field
                                        label="Password"
                                        outlined
                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                        v-model="form.password"
                                        :type="show ? 'text' : 'password'"
                                        @click:append="show = !show"
                                    ></v-text-field>
                                    <InlineError :errors="errors" v-if="errors" field="password" />
                                </div>

                                <p class="mt-5 mb-0">Not your computer? Then use guest mode to sign in personally</p>
                                <a href="">Learn more</a>
                                
                                <div class="d-flex justify-content-between">
                                    <nuxt-link to="/register">Create a account</nuxt-link>
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
            show:false,
            errors: [],
            checked:false,
            form: {
                email: '',
                password: '',
            },
            isLoading: false,
        }
    },
    methods: {
        async login() {
            let redirect = localStorage.getItem('auth.redirect') || '/';
            this.isLoading = true;
            console.log()
            try {
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })

                await this.$router.push(redirect);
            }
            catch (error) {
                this.isLoading = false;
                this.errors = this.$validationError(error.response);
                this.$notifier.snackBar(error.response.data.message, 'bg-danger')
                console.log('Error',error.response)
            }
            
        }
    },
}
</script>

<style scoped>
    body{
        background: green;
    }
</style>