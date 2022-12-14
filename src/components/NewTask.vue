<template>
  <div>
    <button @click="showform()"
      class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
      type="button" data-modal-toggle="staticModal">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>



    <!-- form for adding the task-->

    <div class="" v-if="mostrarform" id="defaultModal">
      <form @submit="addnewTask()">

        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <input type="select" id="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required>
        </div>
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
          task
        </button>
      </form>

    </div>
  </div>




</template>

<script>
import Task from "../store/task"
export default {
  data() {


    return {
      mostrarform: true
    }



  },

  methods: {
    showform() {

      this.mostrarform = !this.mostrarform;
    }

  }

};



</script>

<style>
#defaultModal {}
</style>