<template>
    <div class="card bg-transparent border-0 mb-3">
        <div class="card-body p-0">
            <h6>{{ $auth.user ? $auth.user.name: 'User' }} </h6>
            <textarea name="" id="" rows="3" class="form-control"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddPostComponent',
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