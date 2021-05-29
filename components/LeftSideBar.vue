<template>
    <div class="card bg-transparent border-0">
        <div class="card-body">
            <h6>নির্বাচিত ট্যাগ সমূহ</h6>
            <ul class="navbar-nav">
                <li v-for="(tag, index) in tags" :key="index" class="p-1 mb-1">
                    <a href="" class="text-decoration-none text-dark">
                        <span># {{ tag.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'LeftSideBarComponent',
    data() {
        return {
            errors: [],
            isLoading: false
        }
    },

    computed:{
        tags(){
            return this.$store.getters.getTags
        }
    },
}
</script>
<style lang="scss">
    
</style>