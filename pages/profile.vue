<template>
    <div class="container">
        <pre>
            user:{{ $auth.user}}
        </pre>
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
