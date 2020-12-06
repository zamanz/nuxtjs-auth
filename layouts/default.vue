<template>
  <div>
      <HeaderComponent/>
      <Nuxt />
      <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from "~/components/partials/HeaderComponent";
import FooterComponent from "~/components/partials/FooterComponent";
export default {
    components: {FooterComponent, HeaderComponent}
}
</script>
