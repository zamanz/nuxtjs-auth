<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Dashboard</div>
                    <div class="card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda, at blanditiis consequatur laudantium, minus modi molestiae obcaecati officia optio placeat praesentium quae qui velit? Eius expedita minus quo?
                        </p>
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
