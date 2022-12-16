<template>
  <!-- other try with another form  -->

  <form @submit.prevent="taskStoreGetter()">
    <button
      type="button"
      v-on:click="toggleModal()"
      class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
      data-modal-toggle="staticModal"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    </button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">
              Enter the details of your card here
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleModal()"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <label
              for="Title"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Choose a title</label
            >
            <input
              v-model="title"
              type="select"
              id="Title"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <label
              for="cars"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Choose a Status</label
            >
            <select
              v-model="status"
              id="status"
              name="status"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="1">New</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="taskStoreGetter()"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </form>
</template>

<script>
import tasksStore from "../store/task";
import userStore from "../store/user";

import { mapStores } from "pinia";

export default {
  name: "large-modal",

  data() {
    return {
      showModal: false,
      title: "",
      status: 1,
    };
  },

  methods: {
    showform() {
      this.mostrarform = !this.mostrarform;
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },

    //function to get the info from user store and call the function of Taskstore

    taskStoreGetter() {
      this.tasksStore.addnewTask(
        this.title,
        this.userStore.user.id,
        this.status
      );
      if (this.title.length < 3) {
        return alert("Please enter more than 3 characters");
      }

      this.toggleModal();
    },
    //Task.addnewTask(this.title, this.user_id, this.status)"
  },

  computed: {
    ...mapStores(tasksStore, userStore),
  },
};
</script>

<style></style>
