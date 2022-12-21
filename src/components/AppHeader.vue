<template>
  <nav class="flex items-center justify-between flex-wrap sticky bg-indigo-100 bg-opacity-50 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="fill-current h-8 w-8 mr-2" width="54" height="54" src="../assets/images/potionpink.png" />
      <span class="font-semibold text-xl tracking-tight text-white hover:animate-spin">Potion</span>
    </div>
    <div @click="toggleNav" class=" block lg:hidden">
      <button 
        class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-300 hover:border-red-300">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

    </div>
    <div :class="showMenu ? 'flex' : 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="/" class=" text-white block mt-4 lg:inline-block lg:mt-0  hover:font-bold mr-4">
          Home
        </a>
        <a href="/dashboard" class=" text-white block mt-4 lg:inline-block lg:mt-0 hover:font-bold mr-4">
          Tasks
        </a>
       
      </div>


      <div>
        <a href="#" @click="logOut"
          class="inline-block text-sm px-4 py-2 ml-32 md:ml-[47rem]  leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-200 hover:bg-white mt-4 lg:mt-0">Log
          out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import userStore from "../store/user";
import { supabase } from "../supabase";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      search: '',
      showMenu: false
    }
  },
  computed: {
    ...mapStores(userStore),
  },
  filteredList() {
    return
  },
  methods: {
    async logOut() {
      this.userStore.logOut();
    },
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style>

</style>
