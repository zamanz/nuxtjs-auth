<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">{{ $t('dashboard.title') }}</div>
                        <div class="card-body">
                            <p>{{ $t('dashboard.content') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'home',
    middleware:'auth',
    mounted(){
        console.log(process.env.NODE_ENV);
    }
}
</script>

<style>
.subtitle {
    font-weight: 300;
    font-size: 30px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
