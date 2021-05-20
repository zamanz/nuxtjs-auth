<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card mt-3">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>
                            {{ $t('profile.title') }}
                        </h3>
                        <div>
                            <NuxtLink :to="switchLocalePath('en')" v-if="$i18n.locale == 'bn'">English</NuxtLink>
                            <NuxtLink :to="switchLocalePath('bn')" v-if="$i18n.locale == 'en'">বাংলা</NuxtLink>
                            <a href="#" @click.prevent="$auth.logout()">Logout</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <pre>
                            {{ $auth.user}}
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
    name: "ProfileComponent",
    head(){
        return {
            title:"Profile"
        }
    },
    middleware:'auth',
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        },
        currentLocal(){
            let current_local = this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
            return current_local[0];
        }
    },
    mounted(){
        console.log('Available Locales', this.availableLocales, 'Current Local', this.currentLocal)
    }
}
</script>

<style scoped>

</style>
