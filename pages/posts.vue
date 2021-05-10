<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Post List</div>
                    <div class="card-body" v-if="posts.length > 0">
                        <!-- Blog Post -->
                        <div class="card mb-4" v-for="post in posts" :key="post.id">
                            <img class="card-img-top" :src="post.image" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title">{{ post.title }}</h3>
                                <p class="card-text">{{ post.description }}</p>
                                <nuxt-link :to="`/${post.slug}`" class="btn btn-success">Read More &rarr;</nuxt-link>
                            </div>
                            <div class="card-footer text-muted">
                                Posted on {{ post.posted }} by
                                <a href="#">{{ post.user.name }}</a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border text-success" role="status" v-if="isLoding">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" v-else>
                        <div class="card" v-for="(item, index) in 6" :key="index">
                            <div class="card-img-top">
                                <b-skeleton-img></b-skeleton-img>
                            </div>
                            
                            <div class="card-body">
                                <h3 class="card-title"><b-skeleton width="85%"></b-skeleton></h3>
                                <p class="card-text"><b-skeleton width="85%"></b-skeleton></p>
                                <b-skeleton width="10%"></b-skeleton>
                            </div>
                            <div class="card-footer text-muted">
                                <b-skeleton width="85%"></b-skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sidebar Widgets Column -->
            <div class="col-md-4">

                <!-- Search Widget -->
                <div class="card mb-4">
                    <h5 class="card-header">Search</h5>
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-append">
                                <button class="btn btn-secondary" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Categories Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Categories</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">HTML</a>
                                    </li>
                                    <li>
                                        <a href="#">Freebies</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS</a>
                                    </li>
                                    <li>
                                        <a href="#">Tutorials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Side Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Side Widget</h5>
                    <div class="card-body">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature
                        the new Bootstrap 4 card containers!
                    </div>
                </div>

            </div>
        </div>
    </div>
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
        window.addEventListener('scroll', this.getNextPosts)
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
        }
    }
}
</script>
