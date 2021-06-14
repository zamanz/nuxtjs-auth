<template>
    <div>
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Profile List</h2>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="user.id">
                                    <td class="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                                        {{ index + 1 }}.
                                    </td>
                                    <td class="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                                        <NuxtLink :to="`/profile/${user.username}`" class="flex items-center no-underline hover:underline">
                                            <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                                                <img class="w-full h-full rounded-full" :src="`https://ui-avatars.com/api/?background=random&name=${user.name}`" alt="" />
                                            </div>
                                            <div class="ml-3 d-flex items-center">
                                                <p class="text-gray-900 whitespace-no-wrap m-0">
                                                    {{ user.name }}
                                                </p>
                                            </div>
                                        </NuxtLink>
                                    </td>
                                    <td class="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{ user.email }}
                                        </p>
                                    </td>
                                    <td>
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            users(){
                return this.$store.getters.getUsers
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>