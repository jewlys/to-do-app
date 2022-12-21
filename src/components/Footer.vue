<template>
  <footer
    class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022
      <a href="https://flowbite.com/" class="hover:underline">Potion™</a>. All
      Rights Reserved.
    </span>
  </footer>
</template>

<script>
import tasksStore from "../store/task";

export default {
  components: {
    tasksStore,
  },
};
</script>
