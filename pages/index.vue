<template>
    <div class="container-fluid">
        <BannerComponent />
        <div class="row">
            <div class="col-md-3">
                <LeftSideBarComponent />
            </div>
            
            <PostComponent />

            <div class="col-md-3">
                <RightSideBarComponent />
            </div>
        </div>
        

    </div><!-- container -->
</template>

<script>

export default {
    name:'Posts',
    
}
</script>