<template>
    <div class="header__area py-1">
        <div class="container-fluid">
            <div class="row d-flex align-items-center">
                <div class="col-lg-3 col-md-3">
                    <div class="nav-brand">
                        <h2 class="m-0">
                            <NuxtLink to="/" class="brand__link">
                                BLOG
                            </NuxtLink>
                        </h2>
                    </div>
                </div>

                <div class="col-lg-5 d-none d-lg-block">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control search__input__box" placeholder="সার্চ করুন">
                            <button type="button" class="btn submit__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>                            
                        </div>
                    </form>
                </div>

                <div class="col-lg-4 col-md-9">
                    <nav class="navbar navbar-expand py-0 d-flex justify-content-end">
                        <div id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item nav__item__rounded" title="Home">
                                    <NuxtLink to="/" class="nav-link d-flex align-items-center justify-content-center" aria-current="page">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                        </svg>
                                    </NuxtLink>
                                </li>

                                <li class="nav-item nav__item__rounded" title="Chat">
                                    <NuxtLink to="/chat" class="nav-link d-flex align-items-center justify-content-center" aria-current="page">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                    </NuxtLink>
                                </li>

                                <li class="nav-item nav__item__rounded d-lg-none d-block" title="Search">
                                    <a class="nav-link d-flex align-items-center justify-content-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </a>
                                </li>
                                
                                <li class="nav-item nav__item__rounded" title="New post">
                                    <a class="nav-link d-flex align-items-center justify-content-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </a>
                                </li>

                                <li class="nav-item nav__item__rounded" title="Dark Mode">
                                    <a class="nav-link d-flex align-items-center justify-content-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                        </svg>
                                    </a>
                                </li>

                                <li class="nav-item" v-if="$auth.loggedIn">
                                    <div class="dropdown">
                                        <a href="#" class="nav-link dropdown-toggle d-flex align-items-center justify-content-center" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span>{{ $auth.user.name }}</span>
                                        </a>
                                        <ul class="dropdown-menu user_dropdown shadow py-0" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <NuxtLink class="dropdown-item d-flex align-items-center" :to="`/profile/${$auth.user.username}`">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                                    </svg>
                                                    <span class="ms-1">My Profile</span>
                                                </NuxtLink>
                                            </li>

                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                                                    </svg>
                                                    <span class="ms-1">Dashboard</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                    </svg>
                                                    <span class="ms-1">New Post</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                                    </svg>
                                                    <span class="ms-1">Bookmark</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="$auth.logout()">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                    </svg>
                                                    <span class="ms-1">Logout</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>

                                <li class="nav-item" v-else>
                                    <NuxtLink class="nav-link d-flex align-items-center justify-content-center pe-0" to="/login">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                        <span class="d-none d-lg-block ps-1">প্রবেশ করুন</span>
                                    </NuxtLink>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .header__area{
        background: #1F2937;
        color: #ffffff;
        position: sticky;
        top: 0;
        z-index: 99999;
    }
    .brand__link{
        text-decoration: none;
        color: #ffffff;
    }
    .nav__item__rounded{
        width: 2rem;
        height: 2rem;
        background: #6B7280;
        margin: 0px 10px;
        border-radius: 50%;
        a{
            color: #ffffff;
            
        }
    }
    .user_dropdown{
        left: initial;
        right: -50px !important;
        margin-top: 8px;
        border: none;
        border-radius: 2px;
        li{
            a{
                color: #000
            }
        }
    }
    .nav-item{
        a{
            color: #ffffff;
        }
    }
    .search__input__box{
        background: #4B5563;
        color: #CFD3DA;
        border: 1px solid #6b7280;
        padding: 10px;
    }
    .submit__btn{
        background: #4B5563;
        color: #CFD3DA;
        border-top: 1px solid #6b7280 !important;
        border-right: 1px solid #6b7280 !important;
        border-bottom: 1px solid #6b7280 !important;        
        :active{
            outline: 0;
        }
    }
</style>