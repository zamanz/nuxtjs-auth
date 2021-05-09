<template>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <!-- Post Content Column -->
            <div class="col-lg-8">
                <div class="single-post">
                    <!-- Title -->
                    <h1 class="mt-4">{{ post.title }}</h1>

                    <!-- Author -->
                    <p class="lead">by<a href="#">{{ post.user? post.user.name:'' }}</a></p>
                    <hr />
                    <!-- Date/Time -->
                    <p>Posted on {{ post.posted }}</p>
                    <hr />
                    <!-- Preview Image -->
                    <img
                        class="img-fluid rounded"
                        :src="post.image"
                        alt=""
                    />
                    <hr />
                    <!-- Post Content -->
                    <p class="lead" v-html="post.body"></p>

                </div>
            </div>

            <!-- Sidebar Widgets Column -->
            <div class="col-md-4">
                <!-- Search Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Search</h5>
                    <div class="card-body">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search for..."
                            />
                            <span class="input-group-append">
                                <button class="btn btn-secondary" type="button">
                                    Go!
                                </button>
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
                        You can put anything you want inside of these side
                        widgets. They are easy to use, and feature the new
                        Bootstrap 4 card containers!
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<script>
export default {
    name:'SinglePostComponent',
    data(){
        return {
            post: {},
            posts: [],
            next: {},
            isLoding: false
        }
    },
    beforeMount(){
        this.getInitialPost();
    },
    mounted(){
        //window.addEventListener('scroll', this.getNextPost)
    },
    methods:{
        getInitialPost() {
            this.$axios.$get('/post?slug=' + this.$route.params.slug).then((response) => {
                this.post = response.post;
                this.next = response.next;
                console.log(response)
            });
        },
        getNextPost() {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                this.isLoding = true;
                if(this.next.slug){
                    this.$axios.$get('/post?slug=' + this.next.slug).then((response) => {
                        this.posts.push(response.post)
                        this.next = response.next
                        this.$router.replace('/'+response.next.slug)
                        this.isLoding = false;
                        console.log(this.posts)
                    });
                }
                
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
