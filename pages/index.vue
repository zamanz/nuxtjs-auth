<template>
    <div>
        <div class="slider"></div><!-- slider -->
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
    name:'HomeComponent',
}
</script>
