<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-header">
                    <a class="navbar-brand" href="/">NuxtJs</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

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
                                <a href="#" class="nav-link" @click="$auth.logout()">Logout</a>
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
    name: 'TopBar',
    methods:{

    }
}
</script>

<style>
    .bg-header{
        background: #4FAD54;
    }
    a{
        color: #ffffff !important;
    }
</style>
