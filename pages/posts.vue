<template>
    <section class="blog-area section">
        <div class="container">
            <div class="row" v-if="posts.length > 0" ref="postList">
                <div class="col-lg-4 col-md-6" v-for="(post) in posts" :key="post.id">
                    <div class="card h-100">
                        <div class="single-post post-style-1">

                            <div class="blog-image">
                                <img :src="post.image" v-if="post.image" alt="Blog Image" loading="lazy">
                                <b-skeleton-img v-else></b-skeleton-img>
                            </div>

                            <a class="avatar" href="#">
                                <img :src="`https://ui-avatars.com/api/?background=random&name=${post.user.name}`" alt="Profile Image">
                            </a>

                            <div class="blog-info">

                                <h4 class="title">
                                    <NuxtLink :to="`/${post.slug}`">
                                        <b>{{ post.title }}</b>
                                    </NuxtLink>
                                </h4>

                                <ul class="post-footer">
                                    <li><a href="#"><i class="ion-heart"></i>57</a></li>
                                    <li><a href="#"><i class="ion-chatbubble"></i>{{ post.comments.length }}</a></li>
                                    <li><a href="#"><i class="ion-eye"></i>138</a></li>
                                </ul>

                            </div><!-- blog-info -->
                        </div><!-- single-post -->
                    </div><!-- card -->
                </div><!-- col-lg-4 col-md-6 -->
                <div class="d-flex justify-content-center align-items-center col-md-12">
                    <div class="spinner-border text-success" role="status" v-if="isLoding">                        
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-lg-4 col-md-6" v-for="(item, index) in 6" :key="index">
                    <div class="card h-100">
                        <div class="single-post post-style-1">

                            <div class="blog-image">
                                <b-skeleton-img></b-skeleton-img>
                            </div>

                            <a class="avatar d-flex justify-content-center align-items-center" href="#">
                                <b-skeleton type="avatar"></b-skeleton>
                            </a>

                            <div class="blog-info">

                                <h4 class="title">
                                    <b-skeleton width="85%"></b-skeleton>
                                </h4>

                                <ul class="post-footer">
                                    <li><a href="#"><i class="ion-heart"></i>57</a></li>
                                    <li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
                                    <li><a href="#"><i class="ion-eye"></i>138</a></li>
                                </ul>

                            </div><!-- blog-info -->
                        </div><!-- single-post -->
                    </div>
                </div>
            </div>

            <a class="load-more-btn" href="#" @click.prevent="loadMore" v-if="!isLoding"><b>LOAD MORE</b></a>

        </div><!-- container -->
    </section>
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
