<template>
    <div class="card bg-transparent border-0 mb-3">
        <div class="card-body p-0">
            <div v-if="$auth.loggedIn">
                <textarea name="" id="" rows="3" class="form-control"></textarea>
            </div>
            <div v-else>
                <p>Login</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddPost',
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