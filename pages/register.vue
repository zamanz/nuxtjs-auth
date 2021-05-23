<template>
    <div class="container">
        <div class="justify-content-center d-flex align-items-center vh-100">
            <div class="col-md-5 col-sm-12">
                <div class="w-100">
                    <div class="card">
                        <div class="card-body">
                            <p class="text-center">Sign up to start your session</p>

                            <form @submit.prevent="register">
                                <div class="form-group mt-2">
                                    <label for="name">Name:</label>
                                    <input id="name" type="text" class="form-control" v-model="form.name" placeholder="Name">
                                </div>
                                <div class="form-group mt-3">
                                    <label for="email">Email Address:</label>
                                    <input id="email" type="email" class="form-control" v-model="form.email" placeholder="Email Address">
                                </div>

                                <div class="form-group mt-3">
                                    <label for="password">Password:</label>
                                    <input id="password" type="password" class="form-control" v-model="form.password" placeholder="Password" autocomplete="current-password">
                                </div>

                                <div class="form-group my-3">
                                    <label for="password_confirmation">Confirm Password:</label>
                                    <input id="password_confirmation" type="password" class="form-control" v-model="form.password_confirmation" placeholder="Confirm Password">
                                </div>
                                
                                <button type="submit" class="btn btn-success w-100" v-if="!isLoading">Register</button>
                                <button type="button" class="btn btn-success w-100" v-else>Loading</button>

                            </form>
                        </div>
                        <!-- /.login-card-body -->
                    </div>
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
                console.log(error.response)
            })
        }
    }

}
</script>
