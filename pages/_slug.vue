<template>
    <!-- Page Content -->
    <div>
        <section class="post-area section">
            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-lg-10 col-md-12">

                        <div class="main-post">

                            <div class="blog-post-inner">

                                <div class="post-image mb-5">
                                    <img
                                        class="img-fluid"
                                        :src="post.image"
                                        alt=""
                                        v-if="post.image"
                                        loading="lazy"
                                    />
                                    <b-skeleton-img v-else></b-skeleton-img>
                                </div>

                                <div class="post-info">

                                    <div class="left-area">
                                        <a class="avatar" href="#">
                                            <img v-if="post.user" :src="`https://ui-avatars.com/api/?background=random&name=${post.user.name}`" alt="Profile Image">
                                            <b-skeleton type="avatar" v-else></b-skeleton>
                                        </a>
                                    </div>
                            

                                    <div class="middle-area">
                                        <a class="name" href="#"><b>Katy Liu</b></a>
                                        <h6 class="date">on Sep 29, 2017 at 9:48 am</h6>
                                    </div>

                                </div><!-- post-info -->

                                <h3 class="title" v-if="post.title">{{ post.title }}</h3>
                                <b-skeleton width="85%" v-else></b-skeleton>

                                <div class="para" v-if="post.body">
                                    <p v-html="post.body"></p>
                                </div>
                                <div v-else>
                                    <b-skeleton width="100%"></b-skeleton>
                                    <b-skeleton width="100%"></b-skeleton>
                                    <b-skeleton width="100%"></b-skeleton>
                                    <b-skeleton width="100%"></b-skeleton>
                                    <b-skeleton width="100%"></b-skeleton>
                                </div>

                                <ul class="tags">
                                    <li><a href="#" v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</a></li>
                                </ul>

                                <div class="d-flex justify-content-start align-items-center">
                                    <ul class="tags m-0">
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
                            </div><!-- blog-post-inner -->

                            <div class="post-icons-area">
                                <ul class="post-icons">
                                    <li><a href="#"><i class="ion-heart"></i>57</a></li>
                                    <li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
                                    <li><a href="#"><i class="ion-eye"></i>138</a></li>
                                </ul>

                                <ul class="icons">
                                    <li>SHARE : </li>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div><!-- main-post -->
                    </div><!-- col-lg-8 col-md-12 -->

                </div><!-- row -->

            </div><!-- container -->
            
	    </section><!-- post-area -->

        <section class="comment-section section">
            <div class="container">
                
                <div class="row justify-content-center">

                    <div class="col-lg-8 col-md-12">
                        <h4 class="text-center"><b>POST COMMENT</b></h4>
                        <div class="comment-form">
                            <form method="post" @submit.prevent="onCommentSubmit">
                                <div class="row">

                                    <div class="col-sm-6">
                                        <input type="text" aria-required="true" v-model="form.name" name="contact-form-name" class="form-control"
                                            placeholder="Enter your name" aria-invalid="true" required >
                                    </div><!-- col-sm-6 -->
                                    <div class="col-sm-6">
                                        <input type="email" aria-required="true" v-model="form.email" name="contact-form-email" class="form-control"
                                            placeholder="Enter your email" aria-invalid="true" required>
                                    </div><!-- col-sm-6 -->

                                    <div class="col-sm-12">
                                        <textarea name="contact-form-message" v-model="form.body" rows="2" class="text-area-messge form-control"
                                            placeholder="Enter your comment" required></textarea >
                                    </div><!-- col-sm-12 -->
                                    <div class="col-sm-12">
                                        <button class="submit-btn" type="submit" id="form-submit"><b>POST COMMENT</b></button>
                                    </div><!-- col-sm-12 -->

                                </div><!-- row -->
                            </form>
                        </div><!-- comment-form -->

                        <h4><b>COMMENTS({{ post.comments ? post.comments.length : 0 }})</b></h4>

                        <div class="commnets-area">

                            <div class="comment" v-for="(comment, index) in post.comments" :key="comment.id">

                                <div class="post-info">

                                    <div class="left-area">
                                        <a class="avatar" href="#">
                                            <img v-if="comment.user" :src="`https://ui-avatars.com/api/?background=random&name=${comment.user.name}`" alt="Profile Image">
                                            <b-skeleton type="avatar" v-else></b-skeleton>
                                        </a>
                                        
                                    </div>

                                    <div class="middle-area">
                                        <a class="name" href="#" v-if="comment.user"><b>{{ comment.user.name }}</b></a>
                                        <h6 class="date">on Sep 29, 2017 at 9:48 am</h6>
                                    </div>

                                    <div class="right-area">
                                        <h5 class="reply-btn"><a href="#">Reply</a></h5>
                                        <h5 class="reply-btn" v-if="comment.user.id === $auth.user.id">
                                            <a href="#" @click.prevent="deleteComment(comment, index)">Delete</a>
                                        </h5>
                                    </div>

                                </div><!-- post-info -->

                                <p v-html="comment.body"></p>

                            </div>

                        </div><!-- commnets-area -->

                        <a class="more-comment-btn" href="#"><b>VIEW MORE COMMENTS</b></a>

                    </div><!-- col-lg-8 col-md-12 -->

                </div><!-- row -->

            </div><!-- container -->
        </section>

        
    </div>
    <!-- /.container -->
</template>

<script>
export default {
    name:'SinglePostComponent',
    
    data(){
        return {
            form:{
                post_id: '',
                user_id: this.$auth.user.id,
                name: this.$auth.user.name,
                email: this.$auth.user.email,
                body:''
            },
            post: {},
            next: {},
            prev: {},
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
            this.$axios.$get('/post?slug=' + this.$route.params.slug).then(response => {
                this.post = response.post;
                this.next = response.next;
                this.prev = response.prev,
                this.form.post_id = response.post.id
            }).catch(error =>{
                console.log(error);
            });
        },
        Prev(){
            this.$router.push('/'+this.prev.slug)
        },
        Next() {
            this.$router.push('/'+this.next.slug)
        },
        onCommentSubmit(){
            if(this.$auth.loggedIn){
                this.$axios.$post('/comment', this.form).then(response => {
                    this.post.comments.push(response)
                    console.log('response',response)
                    this.$toast.success('Comment Success')
                }).catch(error =>{
                    console.log(error);
                });
            }
            else{
                this.$toast.error('You must logging in...')
            }
        },
        deleteComment(comment, index){
            if(confirm('Are you sure?')){
                this.$axios.$post('/comment', {id:comment.id}).then(response => {
                    this.post.comments.splice(index, 1)

                    console.log('response',response)
                    this.$toast.success('Comment successfully delete')
                }).catch(error =>{
                    console.log(error);
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '~/assets/css/single-post.scss';
</style>
