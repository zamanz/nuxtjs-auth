<template>
    <div class="row d-flex justify-content-center align-items-center py-3 mb-3 banner">
        <div class="col-md-6">
            <div class="text-end px-3">
                <img src="@/assets/images/banner.svg" alt="">
            </div>
        </div>
        <div class="col-md-6">
            <div class="content px-3">
                <h2>বাংলার প্রোগ্রামিং নেটওয়ার্ক</h2>
                <p class="mt-3 text-dark-secondary">
                    <span># ব্লগ</span>
                    <span># টিউটোরিয়াল</span>
                    <span># চ্যালেঞ্জ</span>
                    <span># আলোচনা</span>
                </p>

                <button class="btn btn-secondary" v-if="!$auth.loggedIn" @click="login">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-dark-secondary">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    <span>যুক্ত হোন</span>
                </button>

            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerComponent",
    methods:{
        login(){
            this.$notifier.snackBar('Hello, I\'m a snackbar', 'bg-danger')
            console.log('Login');
        }
    }
};
</script>
<style lang="scss">
    .banner{
        background: #FDF9F3;
    }
</style>

