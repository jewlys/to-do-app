<template>
  <div
    class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
    draggable="true"
  >
    <button
      @click="$emit('remove')"
      class="dropdown absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
    >
      <svg
        class="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
      <div class="dropdown-content">
        <a href="#">Edit</a>
        <a @click="deleteTasks()" href="#">Delete</a>
      </div>
    </button>

    <span
      class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full"
      >{{ chooseStatus() }}</span
    >

    <p>{{ task.title }}</p>
  </div>
</template>

<script>
import tasksStore from "../store/task";
import { mapStores } from "pinia";

export default {
  props: {
    task: Object,
  },

  computed: {
    ...mapStores(tasksStore),
  },
  methods: {
    deleteTasks() {
      this.tasksStore.deleteTasks(this.task.id);
      console.log(this.tasksStore.deleteTasks(this.task.id));
    },

    chooseStatus() {
      if (this.task.status === 1) return "new";
      else if (this.task.status === 2) return "In progress";
      else if (this.task.status === 3) return "Done";
    },

    //     remove: function (task) {
    //         this.tasks.splice(this.tasks.indexOf(task), 1);
    //  },
  },
};
</script>

<style>
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
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
