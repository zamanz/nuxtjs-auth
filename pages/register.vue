<template>
    <div class="container">
        <div class="justify-content-center d-flex align-items-center vh-100">
            <div class="col-md-5 col-sm-12">
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
                            <p class="text-center">Sign up to start your session</p>

                            <form @submit.prevent="register" class="p-1">
                                <div class="form-group mt-2">
                                    <label for="name">Name:</label>
                                    <input id="name" type="text" class="form-control" v-model="form.name" placeholder="Name">
                                    <InlineError :errors="errors" v-if="errors" field="name" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="email">Email Address:</label>
                                    <input id="email" type="email" class="form-control" v-model="form.email" placeholder="Email Address">
                                    <InlineError :errors="errors" v-if="errors" field="email" />
                                </div>

                                <div class="form-group mt-3">
                                    <label for="password">Password:</label>
                                    <input id="password" type="password" class="form-control" v-model="form.password" placeholder="Password" autocomplete="current-password">
                                    <InlineError :errors="errors" v-if="errors" field="password" />
                                </div>

                                <div class="form-group my-3">
                                    <label for="password_confirmation">Confirm Password:</label>
                                    <input id="password_confirmation" type="password" class="form-control" v-model="form.password_confirmation" placeholder="Confirm Password">
                                </div>

                                <div class="d-flex justify-content-between">
                                    <nuxt-link to="/login">Login</nuxt-link>
                                    <button type="submit" class="btn btn-success text-light" v-if="!isLoading">Register</button>
                                    <button type="button" class="btn btn-success" v-else disabled>Loading</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.login-card-body -->
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    layout:'empty',
    head:{
        title: 'Register'
    },
    middleware:'guest',
    data(){
        return {
            form: {
                name:'',
                email: '',
                password: '',
                password_confirmation:'',
            },
            errors: [],
            isLoading : false
        }
    },
    mounted(){

    },
    methods:{
        register(){
            this.isLoading = true;
            this.$axios.$post('/auth/register',this.form).then((response) =>{
                this.isLoading = false;
                this.$auth.loginWith('local',{data:{email:this.form.email,password:this.form.password}})
            }).catch((error)=>{
                this.isLoading = false;
                if(error.response.status === 422){
                    this.errors = this.$validationError(error.response)
                }
                this.$notifier.snackBar(error.response.data.message, 'bg-danger')
                console.log(this.errors)
            })
        }
    }

}
</script>