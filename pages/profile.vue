<template>
    <div class="container">
        {{ $auth.user}}
    </div>
</template>

<script>
export default {
    name: "profile",
    middleware:'auth'
}
</script>

<style scoped>

</style>
