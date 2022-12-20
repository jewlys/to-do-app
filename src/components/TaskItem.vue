<template>
  <div id="taskitem"
    class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
    <button @click="$emit('remove')"
      class="dropdown absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
      <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
      <div class="dropdown-content">
        <a @click="toggleModal()" href="#">edit</a>
        <a @click="deleteTasks()" href="#">Delete</a>
        <!-- here is the code for the modal popup-->
        <form @submit.prevent="taskStoreGetter()">
          <div v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 class="text-3xl font-semibold">
                    Enter the details of your card here
                  </h3>
                  <button
                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="toggleModal()">
                    <span
                      class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <label for="Title" class="block mb-2 text-sm font-medium text-gray-900">Choose a title</label>
                  <input v-model="task.title" type="select" id="Title"
                    class="flex-wrap shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required />
                  <label for="cars" class="block mb-2 text-sm font-medium text-gray-900">Choose a Status</label>
                  <select v-model="status" id="status" name="status"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="1">New</option>
                    <option value="2">In Progress</option>
                    <option value="3">Done</option>
                  </select>
                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    class="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="toggleModal()">
                    Close
                  </button>
                  <button
                    class="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="updateTask()">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      </div>
    </button>

    <span v-if="chooseStatus(1)"
      class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100  rounded-full">{{
          chooseStatus()
      }}</span>
    <span v-else-if="chooseStatus(2)"
      class="flex items-center h-6 px-3 text-xs font-semibold text-blue-500 bg-green-100  rounded-full">{{
          chooseStatus()
      }}</span>
    <span v-else-if="chooseStatus(3)"
      class="flex items-center h-6 px-3 text-xs font-semibold text-red-500 bg-green-100  rounded-full">{{
          chooseStatus()
      }}</span>

    <div class="annoyingtext">
      <p class="truncate ...">{{ task.title }}</p>
    </div>
  </div>
</template>

<script>
import tasksStore from "../store/task";
import userStore from "../store/user";
import { mapStores } from "pinia";

export default {
  name: "largeModal",
  data() {
    return {
      showModal: false,
      title: "",
      status: 1,
    };
  },
  props: {
    task: Object,
  },

  computed: {
    ...mapStores(tasksStore, userStore),
  },
  methods: {
    deleteTasks() {
      this.tasksStore.deleteTasks(this.task.id);
      console.log(this.tasksStore.deleteTasks(this.task.id));
    },

    updateTask() {
      this.tasksStore.updateTask(this.task.title, this.status, this.task.id);
    },

    chooseStatus() {
      if (this.task.status === 1) return "new";
      else if (this.task.status === 2) return "In progress";
      else if (this.task.status === 3) return "Done";
    },

    toggleModal: function () {
      this.showModal = !this.showModal;
      this.status = this.task.status;
    },
    showform() {
      this.mostrarform = !this.mostrarform;
    },

    taskStoreGetter() {
      this.tasksStore.addnewTask(
        this.title,
        this.userStore.user.id,
        this.status
      );
      if (this.title.length < 3) {
        return alert("Please enter more than 3 caracthers");
      }

      this.toggleModal();
    },

    //     remove: function (task) {
    //         this.tasks.splice(this.tasks.indexOf(task), 1);
    //  },
  },
};
</script>

<style>
.annoyingtext {
  max-width: 100%;
}

.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
