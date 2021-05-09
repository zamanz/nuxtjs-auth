<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Post List</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-sm-12" v-for="post in posts" :key="post.id">
                                    <!-- Blog Post -->
                                    <div class="card mb-4">
                                        <img class="card-img-top" :src="post.image" alt="Card image cap">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ post.title }}</h3>
                                            <p class="card-text">{{ post.description }}</p>
                                            <a href="#" class="btn btn-primary">Read More &rarr;</a>
                                        </div>
                                        <div class="card-footer text-muted">
                                            Posted on {{ post.posted }} by
                                            <a href="#">{{ post.user.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Pagination -->
                            <ul class="pagination justify-content-center mb-4">
                                <li class="page-item">
                                    <a class="page-link" href="#">&larr; Older</a>
                                </li>
                                <li class="page-item disabled">
                                    <a class="page-link" href="#">Newer &rarr;</a>
                                </li>
                            </ul>
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
    </div>
</template>

<script>

export default {
    name:'PostsComponent',
    data(){
        return {
            posts: [],
            current_page: 2,
        }
    },
    beforeMount(){
        this.getInitialPosts();
    },
    mounted(){
        console.log(process.env.NODE_ENV);
        this.getNextPosts();
    },
    methods:{
        getInitialPosts() {
            this.$axios.$get('/posts').then((response) => {
                this.posts = response.posts.data;
            });
        },
        getNextPosts() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    let page = this.current_page++;
                    this.$axios.$get('/posts?page='+ page).then((response) => {
                        this.posts.push(response.posts.data)
                    });
                    console.log(bottomOfWindow, this.posts)
                }
                
                
            }
        }
    }
}
</script>
