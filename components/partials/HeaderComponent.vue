<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <nav class="navbar-expand-lg navbar-light header-area">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                
                        <ul class="navbar-nav" v-if="$auth.loggedIn">

                            <li class="nav-item" v-if="$auth.loggedIn">
                                <nuxt-link class="nav-link" :to="localePath('/')">{{ $t('header.home') }}</nuxt-link>
                            </li>


                            <li class="nav-item" v-if="$auth.loggedIn">
                                <nuxt-link class="nav-link" :to="localePath('/profile')">{{ $t('header.profile') }}</nuxt-link>
                            </li>
                            <li class="nav-item" v-if="$auth.loggedIn">
                                <a href="#" class="nav-link" @click.prevent="$auth.logout()">{{ $t('header.logout') }}</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :to="localePath('/posts')">Posts</nuxt-link>
                            </li>
                        </ul>

                        <ul class="navbar-nav" v-if="!$auth.loggedIn">                                    
                            <li class="nav-item" >
                                <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
                            </li>
                        </ul>

                        <div class="dropdown">
                            <button class="btn btn-link p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ currentLocal.name }}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li
                                    v-for="(local, index) in availableLocales"
                                    :key="index">
                                    <nuxt-link class="dropdown-item" :to="switchLocalePath(local.code)">
                                        {{ local.name }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        },
        currentLocal(){
            let current_local = this.$i18n.locales.filter(i => i.code == this.$i18n.locale);
            return current_local[0];
        }
    }
}
</script>

<style scoped>
    .header-area{
        background: #fafafa;
        padding: 5px 10px;
    }
</style>
