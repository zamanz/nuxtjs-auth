<template>
    <div class="container-fluid">
        <BannerComponent />
        <div class="row">
            <div class="col-md-3">
                <LeftSideBarComponent />
            </div>


            <div class="col-md-6">
                <div v-if="posts.length > 0" ref="postList">
                    <div class="card h-100 border-0 mb-3 bg-transparent post" v-for="(post) in posts" :key="post.id">
                        <div class="card-header d-flex justify-content-between p-0 mb-2 border-0 bg-transparent">
                            <div class="d-flex align-items-center">
                                <a class="avatar" href="#">
                                    <img :src="`https://ui-avatars.com/api/?background=random&name=${post.user.name}`" class="img-circle" alt="Profile Image">
                                    <span>{{ post.user.name }}</span>
                                </a>
                            </div>
                            <div class="d-flex align-items-center">
                                <ul class="nav navbar">
                                    <li class="px-1">
                                        <a href="#">
                                            <img src="@/assets/images/heart.svg" alt="">
                                            <span>{{ post.comments.length }}</span>
                                        </a>
                                    </li>

                                    <li class="px-1">
                                        <a href="#">
                                            <img src="@/assets/images/bookmark.svg" alt="">
                                            <span>20</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <NuxtLink :to="`/${post.slug}`">
                                <img :src="post.image" v-if="post.image" class="card-img-top img-rounded" alt="Blog Image" loading="lazy">
                                <b-skeleton-img v-else></b-skeleton-img>
                                <h4 class="title my-3">{{ post.title }}</h4>
                            </NuxtLink>
                            
                            <p>Time: {{ post.posted }}</p>
                            <ul class="nav mb-2">
                                <li class="mx-1" v-for="(tag, index) in post.tags" :key="index">
                                    <NuxtLink :to="`/tags/${tag.slug}`">#{{ tag.name }}</NuxtLink>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div class="d-flex justify-content-center align-items-center col-md-12">
                        <div class="spinner-border text-success" role="status" v-if="isLoding">                        
                        </div>
                    </div>
                </div>
                <div class="row" v-else>

                    <div class="card h-100 border-0 mb-3 bg-transparent post" v-for="(item, index) in 6" :key="index">
                        <div class="card-header d-flex justify-content-between p-0 mb-2 border-0 bg-transparent">
                            <div class="d-flex align-items-center col-6">
                                <div class="avatar d-flex justify-content-start">
                                    <b-skeleton type="avatar"></b-skeleton>
                                </div>
                            </div>
                            <div class="col-6 d-flex justify-content-end icons">
                                <b-skeleton width="20%"></b-skeleton>
                                <b-skeleton width="20%"></b-skeleton>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <b-skeleton-img></b-skeleton-img>
                            <div class="mt-2">
                                <b-skeleton width="90%"></b-skeleton>
                            </div>
                            
                            <b-skeleton width="55%"></b-skeleton>
                            <b-skeleton width="40%"></b-skeleton>
                            
                        </div>
                    </div>
                </div>

                <a class="btn btn-success text-center" href="#" @click.prevent="loadMore" v-if="!isLoding"><b>LOAD MORE</b></a>
            </div>


            <div class="col-md-3">
                <RightSideBarComponent />
            </div>
        </div>
        

    </div><!-- container -->
</template>

<script>

export default {
    name:'PostsComponent',
    data(){
        return {
            posts: [],
            next_page: 2,
            isLoding: false
        }
    },
    beforeMount(){
        this.getInitialPosts();
    },
    mounted(){
        //window.addEventListener('scroll', this.getNextPosts)
    },
    beforeDestroy(){
        //window.removeEventListener('scroll', this.getNextPosts)
    },
    methods:{
        getInitialPosts() {
            this.$axios.$get('/posts').then((response) => {
                this.posts = response.posts.data;                
            });
        },
        getNextPosts() {
            
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                this.isLoding = true;
                let page = this.next_page++;
                this.$axios.$get('/posts?page='+ page).then((response) => {
                    this.posts.push(...response.posts.data)
                    this.isLoding = false;
                });
            }
        },

        loadMore() {
            this.isLoding = true;
            let page = this.next_page++;
            this.$axios.$get('/posts?page='+ page).then((response) => {
                this.posts.push(...response.posts.data)
                this.isLoding = false;
            });
        }

    }
}
</script>
<style>
    .img-rounded{
        border-radius: 5px;
    }
    .img-circle{
        border-radius: 50%;
    }
    .post a{
        text-decoration: none;
        color: #000;
    }
    .icons div{
        margin-left: 10px
    }
</style>