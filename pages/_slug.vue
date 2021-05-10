<template>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <!-- Post Content Column -->
            <div class="col-lg-8">
                <div class="single-post card">
                    <div class="card-body">
                        <!-- Title -->
                        <h1 class="mt-4" v-if="post.title">{{ post.title }}</h1>
                        <b-skeleton width="85%" v-else></b-skeleton>

                        <!-- Author -->
                        <p class="lead" v-if="post.user">by<a href="#">{{ post.user.name }}</a></p>
                        <b-skeleton width="50%" v-else></b-skeleton>
                        
                        <hr />
                        <!-- Date/Time -->
                        <p v-if="post.posted">Posted on {{ post.posted }}</p>
                        <b-skeleton width="30%" v-else></b-skeleton>
                        <hr />
                        <!-- Preview Image -->
                        <img
                            class="img-fluid rounded"
                            :src="post.image"
                            alt=""
                            v-if="post.image"
                        />
                        <b-skeleton-img v-else></b-skeleton-img>
                        <hr />
                        <!-- Post Content -->
                        <p class="lead" v-if="post.body" v-html="post.body"></p>
                        <div v-else>
                            <b-skeleton width="100%"></b-skeleton>
                            <b-skeleton width="100%"></b-skeleton>
                            <b-skeleton width="100%"></b-skeleton>
                            <b-skeleton width="100%"></b-skeleton>
                            <b-skeleton width="100%"></b-skeleton>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <ul class="pagination justify-content-center my-4">
                    <li class="page-item" v-if="prev">
                        <a class="page-link" href="#" @click.prevent="Prev">&larr; Older</a>
                    </li>
                    <li class="page-item disabled" v-else>
                        <a class="page-link" href="#">&larr; Older</a>
                    </li>
                    <li class="page-item" v-if="next">
                        <a class="page-link" href="#" @click.prevent="Next">Newer &rarr;</a>
                    </li>
                    <li class="page-item disabled" v-else>
                        <a class="page-link" href="#">&larr; Older</a>
                    </li>
                </ul>
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
            prev: {},
            isLoding: false
        }
    },
    beforeMount(){
        this.getInitialPost();
    },
    mounted(){
        window.addEventListener('scroll', this.getNextPost)
    },
    methods:{
        getInitialPost() {
            this.$axios.$get('/post?slug=' + this.$route.params.slug).then((response) => {
                this.post = response.post;
                this.next = response.next;
                this.prev = response.prev
                console.log(response)
            });
        },
        Prev(){
            this.$router.push('/'+this.prev.slug)
        },
        Next() {
            this.$router.push('/'+this.next.slug)
        }
    }
};
</script>

<style lang="scss" scoped></style>
