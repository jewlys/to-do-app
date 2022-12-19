<template>
  <AppHeader />

  <div
    class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"
  >
    <div class="px-10 mt-6">
      <h1 class="text-2xl font-bold">Team Project Board</h1>
    </div>
    <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      <!-- 
Here begins the huge code for the header columns
-->

      <div id="dropzone1" class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">To do</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
            >{{ tasksStore.getTasksbyStatus(1).length }}</span
          >
        </div>
        <TaskItem
          v-for="(task, index) in tasksStore.getTasksbyStatus(1)"
          :key="index"
          :task="task"
        />
        <NewTask
          class="relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        />
      </div>
      <div id="dropzone2" class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">Doing</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
            >{{ tasksStore.getTasksbyStatus(2).length }}</span
          >
        </div>
        <TaskItem
          v-for="(task, index) in tasksStore.getTasksbyStatus(2)"
          :key="index"
          :task="task"
        />
        <NewTask
          class="relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        />
      </div>
      <div id="dropzone1" class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">Done</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
            >{{ tasksStore.getTasksbyStatus(3).length }}</span
          >
        </div>
        <TaskItem
          v-for="(task, index) in tasksStore.getTasksbyStatus(3)"
          :key="index"
          :task="task"
        />
        <NewTask
          class="relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        />
      </div>
      <div class="flex-shrink-0 w-6"></div>
    </div>
  </div>

  <!-- Component End -->

  <Footer />

  <!-- Component End -->
</template>

<script>
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import tasksStore from "../store/task";
import Draggable from "vue3-draggable";
import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";

import { mapStores } from "pinia";

export default {
  data() {
    // we define user store inside a const

    return {
      newTask: NewTask,
      taskItem: TaskItem,
    };
  },

  components: {
    NewTask,
    TaskItem,
    Draggable,
    AppHeader,
    Footer,
  },

  methods: {
    //    deleteThisRow: function (index) {
    //     this.tasks.splice(index, 1);
    //  },

    //   removeTask(index) {
    //     this.task.splice(index, 1)

    //   },

    deleteTasks(itemID) {},

    updateTask(itemID) {},
  },
  computed: {
    ...mapStores(tasksStore),
  },

  ColumTotalsByStatus() {
    return this.tasksStore.tasks.status;
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>
