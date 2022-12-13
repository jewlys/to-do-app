<script setup>


import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "./components/AppHeader.vue"
import Footer from "./components/Footer.vue"
import Dashboard from './pages/Dashboard.vue';






</script>

<template>
	<RouterView />
	<Dashboard/>
	<AppHeader />


</template>


<style>
.group:hover .group-hover\:flex {
	display: flex !important;
}
</style>


