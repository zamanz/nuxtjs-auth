<template>
    <div class="header__area py-1">
        <div class="container-fluid">
            <div class="row d-flex align-items-center">
                <div class="col-lg-3 col-md-3">
                    <div class="nav-brand">
                        <h2 class="m-0">
                            <NuxtLink to="/" class="brand__link">
                                TECH DIARY
                            </NuxtLink>
                        </h2>
                    </div>
                </div>

                <div class="col-lg-5 d-none d-lg-block">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control search__input__box" placeholder="সার্চ করুন">
                            <button type="button" class="btn bg-light">
                                Search
                            </button>                            
                        </div>
                    </form>
                </div>

                <div class="col-lg-4 col-md-9">
                    <nav class="navbar navbar-expand py-0 d-flex justify-content-end">
                        <div id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item nav__item__rounded" title="Home">
                                    <NuxtLink to="/" class="nav-link d-flex align-items-center justify-content-center active" aria-current="page">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
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
                                    <NuxtLink to="/profile" class="nav-link d-flex align-items-center justify-content-center">
                                        <span>{{ $auth.user.name }}</span>
                                    </NuxtLink>
                                </li>

                                <li class="nav-item" v-else>
                                    <NuxtLink class="nav-link d-flex align-items-center justify-content-center" to="/login">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                        <span>প্রবেশ করুন</span>
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
        background: #1E1E1E;
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
</style>