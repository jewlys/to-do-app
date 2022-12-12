<template>
    <AppHeader />

    <Footer />

    <button @click="login"></button>
</template>
<script>
// import { mapStore } from 'pinia'
// import userStore from '../stores/user'
export default {
    methods: {
        login() {
        }
    },
    components: { AppHeader, Footer }
}

import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';
</script>