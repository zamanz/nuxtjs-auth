<template>
    <div class="preloader" v-if="isLoading">
        <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: "Loading",
    computed: {
        ...mapState('loading', ['isLoading'])
    },
}
</script>

<style scoped>
    .preloader {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
