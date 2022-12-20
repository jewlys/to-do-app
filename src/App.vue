<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";

import Footer from "./components/Footer.vue";
export default {

  components: {
  Footer,
  AppHeader,
  }

}
</script>

<template>
  
  <RouterView />
  <Footer />
</template>

<style>
.group:hover .group-hover\:flex {
  display: flex !important;
}
</style>
