<template>
    <div>
        <HeaderComponent/>
        <Nuxt />
        <SpinnerComponent v-if="isLoading"/>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('loading', ['isLoading'])
    },
}
</script>
<style leng="scss">
    body{
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        word-wrap: break-word;
        background: #FFFFFF;
        color: #000;
    }
    
    /* @media only screen and (max-width: 1200px) {
        .container-fluid{
            background: red;
        }
    }

    @media screen and (max-width: 992px) {
        body {
            background-color: blue;
            color: white;
        }
    } */
</style>
