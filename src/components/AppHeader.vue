<template>

  <div class="sticky top-0 flex justify-between items-center  w-screen h-16 px-10 bg-white bg-opacity-75">
    <img src="../assets/images/potion (1).png" alt="" />
    <p class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700">
      Potion
    </p>

    <!-- <input class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="" placeholder="Create a new task">  -->
    <div id="navbarNav" v-show="menuActive" class="flex flex-row  ml-10 ">
    
      <burger-menu @toggle-menu="menuActive = !menuActive" :active="menuActive"></burger-menu>

    
      <ul class= "links md:flex flex-col md:flex-row md:justify-around items-center my-7 hidden text-center">
        <li>
          <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="/landing">Home</a>
        </li>
        <li>
          <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="/">Tasks</a>
        </li>
        <li>
          <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Profile</a>
        </li>
   
    </ul>
  </div>





    <signOut />
  </div>



</template>

<script>

import Burger from './Burger.vue';


export default {
        name: 'Burger',
        props: {
            active: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        methods: {
            toggleActive () {
                this.$emit('toggle-menu')
            }
        }
    }
</script>
