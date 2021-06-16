<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card mt-3">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>Profile</h3>
                        <div>
                            <NuxtLink :to="switchLocalePath('en')" v-if="$i18n.locale == 'bn'">English</NuxtLink>
                            <NuxtLink :to="switchLocalePath('bn')" v-if="$i18n.locale == 'en'">বাংলা</NuxtLink>
                        </div>
                    </div>
                    <div class="card-body">
                        <pre>
                            {{ user }}
                        </pre>
                        <p>{{ $t('profile.content') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{}
            }
        },
        mounted(){
            this.getUser();
        },
        methods:{
            getUser() {
                this.$axios.$get('/user?username=' + this.$route.params.username).then(response => {
                    this.user = response
                }).catch(error =>{
                    console.log(error);
                });
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>