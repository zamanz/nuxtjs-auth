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
<style lang="css">
    body{
        font-size: 15px;
        font-family: 'SolaimanLipi', Arial, sans-serif !important;
        width: 100%;
        height: 100%;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        word-wrap: break-word;
        background: #FFFFFF;
        color: #000;
    }

    @media screen and (min-width: 992px) {
        .container-fluid{
            padding-left: 50px !important;
            padding-right: 50px !important;
        }
    }
</style>
