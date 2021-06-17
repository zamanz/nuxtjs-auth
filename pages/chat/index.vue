<template>
    <div class="container-fluid my-6">
        <div class="grid grid-cols-4 gap-4">
            <div class="flex-1 justify-between flex flex-col h-screen">
                <div class="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <div v-if="users.length > 0">
                        <div v-for="(user, index) in users" :key="index" class="mb-2">
                            <NuxtLink :to="`/chat?user=${user.username}`" class="text-decoration-none text-dark" v-if="$auth.user.id != user.id">
                                <div class="d-flex align-items-center">
                                    <img :src="`https://ui-avatars.com/api/?background=random&name=${user.name}`" class="rounded-full" alt="Profile Image">
                                    <div class="ms-3">
                                        <p class="m-0">{{ user.name }}</p>
                                        <p class="m-0 flex items-center">
                                            <span class="text-green-500">
                                                <svg width="10" height="10">
                                                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                                                </svg>
                                            </span>
                                            <span class="px-2">{{ user.user_created_at }}</span>
                                        </p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div v-else>
                        <div class="d-flex align-items-center mb-2" v-for="(item, index) in 10" :key="index">
                            <v-skeleton-loader type="avatar"></v-skeleton-loader>
                            <v-skeleton-loader type="sentences" width="150" class="ms-2"></v-skeleton-loader>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-span-3">
                <ChatBox v-if="$route.query.user != null"/>
                <div v-else>
                    <h1>Please select a conversation...</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        data(){
            return {
                user: ''
            }
        },
        computed:{
            users(){
                return this.$store.getters.getUsers
            }
        },
        methods:{
            selected(user){
                this.user = user
            }
        }
    }
</script>
<style lang="scss" scoped>
    .scrollbar-w-2::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
    }

    .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
        --bg-opacity: 1;
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--bg-opacity));
    }

    .scrollbar-thumb-blue::-webkit-scrollbar-thumb {
        --bg-opacity: 1;
        background-color: #edf2f7;
        background-color: rgba(237, 242, 247, var(--bg-opacity));
    }

    .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
    }
</style>