<script setup>


import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "./components/AppHeader.vue"
import Footer from "./components/Footer.vue"






</script>

<template>
	<RouterView />
	<AppHeader />

	<div id="app">
        <To Do />
    </div>
	
	<Footer />

</template>

<style scoped>

</style>
