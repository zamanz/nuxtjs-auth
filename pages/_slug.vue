<template>
    <!-- Page Content -->
    <div class="single-post-area">
        <section class="post-area section">
            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-md-8">

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
                                    <v-skeleton-loader type="image" v-else></v-skeleton-loader>
                                </div>

                                <div class="post-info">

                                    <div class="left-area">
                                        <a class="avatar d-flex align-items-center justify-content-center" href="#">
                                            <img v-if="post.user" :src="`https://ui-avatars.com/api/?background=random&name=${post.user.name}`" alt="Profile Image">
                                            <v-skeleton-loader type="avatar" v-else></v-skeleton-loader>
                                        </a>
                                    </div>
                            

                                    <div class="middle-area">
                                        <a class="name" href="#" v-if="post.user"><b>{{ post.user.name }}</b></a>
                                        <v-skeleton-loader type="sentences" v-else></v-skeleton-loader>
                                        <h6 class="date" v-if="post.posted">on {{ post.posted }}</h6>
                                    </div>

                                </div><!-- post-info -->

                                <h3 class="title" v-if="post.title">{{ post.title }}</h3>
                                <v-skeleton-loader type="sentences" v-else></v-skeleton-loader>

                                <div class="para" v-if="post.body">
                                    <p v-html="post.body"></p>
                                </div>
                                <div v-else>
                                    <v-skeleton-loader type="paragraph"></v-skeleton-loader>
                                    <v-skeleton-loader type="text"></v-skeleton-loader>
                                    <v-skeleton-loader type="text"></v-skeleton-loader>
                                    <v-skeleton-loader type="sentences"></v-skeleton-loader>
                                </div>

                                <ul class="tags">
                                    <li><a href="#" v-for="(tag, index) in post.tags" :key="index">{{ tag.name }}</a></li>
                                </ul>

                                <div class="d-flex justify-content-start align-items-center">
                                    <ul class="tags m-0">
                                        <li class="page-item" v-if="prev">
                                            <a class="page-link" href="#" @click.prevent="previous">&larr; Older</a>
                                        </li>
                                        <li class="page-item disabled" v-else>
                                            <a class="page-link" href="#">&larr; Older</a>
                                        </li>
                                        <li class="page-item" v-if="next">
                                            <a class="page-link" href="#" @click.prevent="nextPost">Newer &rarr;</a>
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
                    </div><!-- col-md-8 --->

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
                                        <a class="avatar d-flex justify-content-center align-items-center" href="#">
                                            <img v-if="comment.user" :src="`https://ui-avatars.com/api/?background=random&name=${comment.user.name}`" alt="Profile Image">
                                            <v-skeleton-loader type="avatar" v-else></v-skeleton-loader>
                                        </a>
                                        
                                    </div>

                                    <div class="middle-area">
                                        <a class="name" href="#" v-if="comment.user"><b>{{ comment.user.name }}</b></a>
                                        <h6 class="date">on Sep 29, 2017 at 9:48 am</h6>
                                    </div>

                                    <div class="right-area">
                                        <h5 class="reply-btn"><a href="#">Reply</a></h5>
                                        <h5 class="reply-btn" v-if="$auth.loggedIn">
                                            <a href="#" @click.prevent="deleteComment(comment, index)" v-if="comment.user.id === $auth.user.id">Delete</a>
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
        <template>
            <div class="text-center my-2">
                <v-btn
                    dark
                    color="orange darken-2"
                    @click="snackbar = true"
                >
                    Open Snackbar
                </v-btn>

                <v-snackbar v-model="snackbar" :timeout="timeout">{{ text }}</v-snackbar>
            </div>
        </template>
    </div>
    <!-- /.container -->
</template>

<script>
export default {
    name:'SinglePostComponent',
    data(){
        return {
            snackbar: false,
            text: 'My timeout is set to 2000.',
            timeout: 1000,
            post: {},
            next: {},
            prev: {},
            isLoding: false,
            form:{
                post_id: '',
                user_id: this.$auth.loggedIn ? this.$auth.user.id : '',
                name: this.$auth.loggedIn ? this.$auth.user.name : '',
                email: this.$auth.loggedIn ? this.$auth.user.email : '',
                body:''
            },
        }
    },
    beforeMount(){
        this.getInitialPost();
    },
    mounted(){
        
        //window.addEventListener('scroll', this.getNextPost)
    },
    methods:{
        randomNumber(){
            return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        },
        getInitialPost() {
            this.$axios.$get('/post?slug=' + this.$route.params.slug).then(response => {
                this.post = response.post;
                this.next = response.next;
                this.prev = response.prev;
                this.form.post_id = response.post.id
            }).catch(error =>{
                console.log(error);
            });
        },
        previous(){
            this.$router.push('/'+this.prev.slug)
        },
        nextPost() {
            this.$router.push('/'+this.next.slug)
        },
        onCommentSubmit(){
            if(this.$auth.loggedIn){
                this.$axios.$post('/comment', this.form).then(response => {
                    this.post.comments.push(response)
                    console.log('response',response)
                    this.$notifier.snackBar('Comment Success')
                }).catch(error =>{
                    console.log(error);
                });
            }
            else{
                this.$notifier.snackBar('You must logging in...')
            }
        },
        deleteComment(comment, index){
            if(confirm('Are you sure?')){
                this.$axios.$post('/comment', {id:comment.id}).then(response => {
                    this.post.comments.splice(index, 1)

                    console.log('response',response)
                    this.$notifier.snackBar('Comment successfully delete')
                }).catch(error =>{
                    console.log(error);
                });
            }
        }
    }
};
</script>

<style scoped>
    .post-area {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
        border-bottom: 1px solid #eee;
        background: #fff;
    }

    .post-area .post-info {
        position: relative;
        padding: 30px 0;
    }
    .post-image img{
        border-radius: 5px;
    }
    .post-area .post-info .left-area {
        height: 70px;
        width: 70px;
        border-radius: 100px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        margin-top: -35px;
        border: 6px solid #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    }

    .post-area .post-info .middle-area {
        padding-left: 90px;
        display: inline-block;
    }

    .post-area .post-info .date {
        display: inline-block;
        color: #999;
    }

    .post-area .post-info .right-area {
        float: right;
    }


    /* ---------------------------------
    6. MAIN POST ( LEF AREA )
    --------------------------------- */


    .main-post .title {
        margin-bottom: 30px;
    }

    .main-post .para {
        margin: 30px 0;
    }

    .main-post ul.tags {
        margin: 30px 0;
    }

    .main-post ul.tags>li>a {
        padding: 7px 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        float: left;
        border: 1px solid #ddd;
        background: #ddd;
    }

    .main-post ul.tags>li>a:hover {
        background: none;
    }


    /* ICONS */

    .main-post .post-icons-area {
        margin: 30px 0;
        padding: 30px 30px 30px 0;
        overflow: hidden;
        border-top: 1px solid #ddd;
    }

    .main-post ul.post-icons {
        float: left;
    }

    .main-post ul.post-icons>li>a {
        padding-right: 15px;
    }

    .main-post ul.post-icons>li>a>i {
        padding-right: 10px;
        font-size: 1.1em;
        opacity: .5;
    }

    .main-post ul.icons {
        float: right;
    }

    .main-post ul.icons>li>a>i {
        padding-left: 15px;
        font-size: 1.1em;
        opacity: .5;
    }


    /* POST FOOTER */

    .main-post .post-footer.post-info {
        margin-top: 30px;
        padding-right: 30px;
    }

    .main-post .post-footer {
        margin-bottom: 30px;
    }



    /* ---------------------------------
    7. SIDEBAR AREA
    --------------------------------- */

    .info-area .sidebar-area {
        padding: 0 30px 30px;
        margin: 0 0 30px;
        border-bottom: 1px solid #eee;
    }


    /* ABOUT AREA */

    .info-area .title {
        padding: 0;
        margin-bottom: 20px;
    }


    /* SUBSCRIBE AREA */

    .info-area .input-area {
        position: relative;
        height: 50px;
        width: 100%;
        box-shadow: 0px 0px 1px #bbb;
        background: #F5F7F6;
    }

    .info-area .input-area .email-input {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 0 70px 0 20px;
        background: transparent;
        border: 0;
        outline: 0;
    }

    .info-area .input-area .email-input:focus {
        box-shadow: 0px 0px 1px #aaa;
    }

    .info-area .input-area .submit-btn {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 50px;
        background: none;
        border: 0;
        outline: 0;
        margin-right: 10px;
        opacity: .8;
        cursor: pointer;
        transition: all .2s;
    }



    /* TAG AREA */

    .info-area .tag-area {
        padding: 0 30px;
    }

    .tag-area>ul>li>a {
        padding: 7px 12px;
        float: left;
        margin: 0 5px 5px 0;
        border: 1px solid #eee;
        background: #F5F6F8;
    }

    .tag-area>ul>li>a:hover {
        background: none;
    }



    /* ---------------------------------
    8. RECOMENEDED AREA
    --------------------------------- */

    .recomended-area .row div[class^="col"] {
        margin-bottom: 30px;
    }

    .recomended-area {
        text-align: center;
        background: #EDF3F3;
    }

    .recomended-area .single-post {
        height: 100%;
        position: relative;
        padding-bottom: 45px;
        overflow: hidden;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
        border: 1px solid #ddd;
        background: #fff;
    }

    .recomended-area .single-post .title {
        padding: 20px 30px 30px;
    }

    .single-post .avatar {
        margin: 0 auto;
        margin-top: -40px;
        width: 70px;
        height: 70px;
        overflow: hidden;
        z-index: 10;
        border-radius: 100px;
        position: relative;
        border: 7px solid #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    }

    .single-post .post-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
    }

    .single-post .post-footer>li {
        width: 33.33%;
        display: inline-block;
        border-right: 1px solid #fff;
        background: #EDF3F3;
    }

    .single-post .post-footer>li:first-child {
        float: left;
    }

    .single-post .post-footer>li:last-child {
        border: 0px;
        float: right;
    }

    .single-post .post-footer>li>a {
        line-height: 45px;
        width: 100%;
    }

    .single-post .post-footer i {
        display: inline-block;
        margin-right: 10px;
        opacity: .6;
        font-size: 1.1em;
    }



    /* ---------------------------------
    9. POST COMMENT
    --------------------------------- */

    .comment-form {
        margin: 30px 0;
        padding: 30px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
        border: 1px solid #ddd;
        background: #fff;
    }

    .comment-form .form-control {
        margin-bottom: 30px;
        border-radius: 1px;
        border: 0;
        border-bottom: 1px solid #ddd;
        height: 45px;
        line-height: 45px;
        box-shadow: none;
        padding: 0;
        max-width: 100%;
    }

    .comment-form textarea.form-control {
        height: auto;
    }

    .comment-form .form-control:focus {
        border-color: #498BF9;
    }

    .comment-form .submit-btn {
        font-size: .8em;
        border: 0;
        outline: 0;
        padding: 10px 20px;
        cursor: pointer;
        border: 1px solid #D2E2FC;
        background: #D2E2FC;
    }

    .comment-form .submit-btn:hover {
        background: none;
    }



    /* COMMENTS */

    .commnets-area {
        padding: 30px 40px;
        margin: 30px 0;
        overflow: hidden;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
        background: #fff;
    }

    .comment {
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #eee;
    }

    .comment:last-child {
        padding-bottom: 0px;
        margin-bottom: 0px;
        border-bottom: 0px;
    }

    .comment .reply-for {
        margin-bottom: 20px;
    }

    .comment .post-info {
        position: relative;
        padding: 30px 0;
    }

    .comment .post-info .left-area {
        height: 70px;
        width: 70px;
        border-radius: 100px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        margin-top: -35px;
        border: 6px solid #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    }

    .comment .post-info .middle-area {
        padding-left: 90px;
        width: calc(100% - 70px);
        display: inline-block;
    }

    .comment .post-info .date {
        display: inline-block;
        color: #999;
    }

    .comment .post-info .right-area {
        float: right;
    }


    .more-comment-btn {
        display: block;
        margin-bottom: 30px;
        padding: 10px;
        text-align: center;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
        border: 1px solid #fff;
        background: #fff;
        color: #555;
    }

    .more-comment-btn:hover {
        border-color: #ccc;
    }




    /* Screens Resolution : 992px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 1200px) {}

    /* Screens Resolution : 992px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 992px) {

        /* ---------------------------------
        1. PRIMARY STYLES
        --------------------------------- */

        h1 {
            font-size: 4em;
        }

        h2 {
            font-size: 3em;
        }

        h3 {
            font-size: 2em;
        }


        /* COMMoNS */

        .no-left-padding {
            padding-left: 15px;
        }

        .no-right-padding {
            padding-right: 15px;
        }


        /* MENU */

        /* SEARCH AREA */

        header .src-area {
            width: 30%;
        }


        /* ---------------------------------
        6. MAIN POST ( LEF AREA )
        --------------------------------- */

        .main-post {
            border-right: 0px;
        }

        .main-post .blog-post-inner,
        .main-post .post-icons-area {
            padding-right: 0px;
        }


        /* ---------------------------------
        7. SIDEBAR AREA
        --------------------------------- */

        .info-area {
            padding: 30px 0;
        }

        .info-area .sidebar-area,
        .info-area .tag-area {
            padding-left: 0px;
        }


    }


    /* Screens Resolution : 767px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 767px) {

        /* ---------------------------------
        1. PRIMARY STYLES
        --------------------------------- */

        p {
            line-height: 1.4;
        }

        h1 {
            font-size: 3em;
        }

        h2 {
            font-size: 2.5em;
        }

        h3 {
            font-size: 1.8em;
        }

        h4 {
            font-size: 1.5em;
        }

        h5 {
            font-size: 1.2em;
        }

        /* ---------------------------------
        2. COMMONS FOR PAGE DESIGN
        --------------------------------- */

        .section {
            padding: 40px 0 10px;
        }



        /* ---------------------------------
        3. MENU
        --------------------------------- */


        header .main-menu {
            display: none;
            float: none;
            clear: both;
            border-top: 1px solid #ccc;
        }

        header .main-menu>li {
            display: block;
            float: none;
            border-bottom: 1px solid #ddd;
        }

        header .main-menu>li:last-child {
            border-bottom: 0;
        }

        header .main-menu li>a,
        header .main-menu ul.drop-down li>a {
            display: block;
            line-height: 1;
            height: auto;
            padding: 15px;
            background: none;
        }



        /* SEARCH AREA */

        header .src-area {
            width: 100%;
        }


        /* NAV ICON */

        .menu-nav-icon {
            display: inline-block;
        }


        /* ---------------------------------
        10. FOOTER
        --------------------------------- */

        footer {
            padding: 40px 0 0px;
            margin-top: 0px;
        }


    }

    /* Screens Resolution : 479px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 479px) {

        /* ---------------------------------
        1. PRIMARY STYLES
        --------------------------------- */

        body {
            font-size: 14px;
        }

        /* ---------------------------------
        6. MAIN POST ( LEF AREA )
        --------------------------------- */

        /* ICONS */

        .main-post ul.post-icons,
        .main-post ul.icons {
            float: none;
            margin-top: 10px;
        }

        .main-post ul.post-icons>li>a>i,
        .main-post ul.icons>li>a>i {
            padding: 0;
            padding-right: 10px;
        }



    }

    /* Screens Resolution : 359px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 359px) {}

    /* Screens Resolution : 290px
    -------------------------------------------------------------------------- */
    @media only screen and (max-width: 290px) {}

</style>
