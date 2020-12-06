<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <nav class="navbar-expand-lg navbar-light">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">

                                    <li class="nav-item" v-if="!$auth.loggedIn">
                                        <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
                                    </li>
                                    <li class="nav-item" v-if="!$auth.loggedIn">
                                        <nuxt-link href="#" class="nav-link" to="/register">Register</nuxt-link>
                                    </li>


                                    <li class="nav-item" v-if="$auth.loggedIn">
                                        <nuxt-link class="nav-link" to="/profile">{{ $auth.user.name }}</nuxt-link>
                                    </li>
                                    <li class="nav-item" v-if="$auth.loggedIn">
                                        <a href="" class="nav-link" @click.prevent="$auth.logout()">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
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

</style>
