<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <nav class="navbar-expand-lg navbar-light header-area">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav" v-if="$auth.loggedIn">

                            <li class="nav-item" v-if="$auth.loggedIn">
                                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                            </li>

                            <li class="nav-item" v-if="$auth.loggedIn">
                                <nuxt-link class="nav-link" to="/profile">{{ $auth.user.name }}</nuxt-link>
                            </li>
                            <li class="nav-item" v-if="$auth.loggedIn">
                                <a href="" class="nav-link" @click.prevent="$auth.logout()">Logout</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav" v-if="!$auth.loggedIn">                                    
                            <li class="nav-item" >
                                <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link href="#" class="nav-link" to="/register">Register</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "HeaderComponent"
}
</script>

<style scoped>
    .header-area{
        background: #fafafa;
        padding: 5px 10px;
    }
</style>
