<template>
    <div class="card bg-transparent border-0">
        <div class="card-body">
            <h6>{{ $auth.user ? $auth.user.name: '' }} </h6>
            <p>Post Your Ad</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddPostComponent ',
    data() {
        return {
            errors: [],
            isLoading: false
        }
    },

    methods: {
        
    },
}
</script>
<style lang="scss">
    
</style>