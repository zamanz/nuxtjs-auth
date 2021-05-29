<template>
    <span class="text-danger">
        <small class="form-text text-danger" v-for="(error,index) in errors" :key="index">{{ error[field] }}</small>
    </span>
</template>
<script>
export default {
    props:["errors","field"],
}
</script>