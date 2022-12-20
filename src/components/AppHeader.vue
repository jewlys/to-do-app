<template>
  <nav class="flex items-center justify-between flex-wrap sticky bg-pink-200 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="fill-current h-8 w-8 mr-2" width="54" height="54" src="../assets/images/potionpink.png" />
      <span class="font-semibold text-xl tracking-tight">Potion</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-red-300 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-500 mr-4">
          H ome
        </a>
        <a href="/dashboard" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400 mr-4">
          Tasks
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400">
        </a>
      </div>
      <div>
        <a href="#" @click="logOut"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-400 hover:bg-white mt-4 lg:mt-0">Log
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
  computed: {
    ...mapStores(userStore),
  },

  methods: {
    async logOut() {
      {
        this.userStore.logOut();
      }
    },
  },
};
</script>
<style>

</style>
