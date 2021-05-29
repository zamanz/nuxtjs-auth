<template>
    <div class="container-fluid">
        <Banner />
        <div class="row">
            <div class="col-md-3">
                <LeftSideBar />
            </div>
            
            <div class="col-md-6">
                <AddPost />
                <PostList />
            </div>

            <div class="col-md-3">
                <RightSideBar />
            </div>
        </div>
        
    </div><!-- container -->
</template>

<script>

export default {
    name:'Home',
    
}
</script>