<template>
    <div class="post__list">
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
                        <v-skeleton-loader type="image" v-else></v-skeleton-loader>
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
                    <div class="col-6 p-0 d-flex align-items-center">
                        <v-skeleton-loader type="avatar"></v-skeleton-loader>
                        <v-skeleton-loader type="sentences" width="150" class="ms-2"></v-skeleton-loader>
                    </div>
                    <div class="col-6 p-0 d-flex justify-content-end">
                        <v-skeleton-loader type="chip"></v-skeleton-loader>
                        <v-skeleton-loader type="chip" class="ms-2"></v-skeleton-loader>
                    </div>
                </div>
                <div class="card-body p-0">
                    <v-skeleton-loader type="image"></v-skeleton-loader>
                    <v-skeleton-loader type="paragraph" class="mt-2"></v-skeleton-loader>
                    <v-skeleton-loader type="text"></v-skeleton-loader>
                    <v-skeleton-loader type="text"></v-skeleton-loader>
                    <v-skeleton-loader type="text"></v-skeleton-loader>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center align-items-center py-2">
            <a class="btn btn-success" href="#" @click.prevent="loadMore" v-if="!isLoding"><b>LOAD MORE</b></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'PostComponent',
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
        window.addEventListener('scroll', this.getNextPosts)
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.getNextPosts)
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