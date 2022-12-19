<template>

  <div class="sticky top-0 flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
    <img src="../assets/images/potion (1).png" alt="" />
    <p class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700">
      Potion
    </p>


    <!-- <input class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="" placeholder="Create a new task">  -->
            <Slide right>
    <div class="ml-10">
      <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="/landing">Home</a>
      <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="/">Tasks</a>
      <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Profile</a>
    </div>

    
  </Slide>



    <signOut />
  </div>



</template>

<script>
import { Slide } from 'vue3-burger-menu'


export default {
  components: {
    Slide
  }
}
</script>
<style>

</style>