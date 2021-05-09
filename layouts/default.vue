<template>
  <div>
      <HeaderComponent/>
      <Nuxt />
      <FooterComponent/>
      <SpinnerComponent v-if="isLoading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('loading', ['isLoading'])
    },
}
</script>
