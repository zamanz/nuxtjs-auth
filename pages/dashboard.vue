<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">Profile</div>
                        <div class="card-body">
                            <pre>
                                {{ $auth.user}}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    head:{
        title:"Dashboard"
    },
    middleware:'auth'
}
</script>

<style scoped>

</style>
