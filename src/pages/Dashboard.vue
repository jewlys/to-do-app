<template>
  <AppHeader />

  <div
    class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
    <div class="px-10 mt-6">
      <h1 class="text-2xl font-bold">Team Project Board</h1>
    </div>

    <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      <!-- 
Drop zone begins  for column1-->
      <div id="dropzone" class="  flex flex-col flex-shrink-0 w-72 drag-el" :key="index" @drop="onDrop($event, 1)"
        @dragover.prevent @dragenter.prevent>
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">To do</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">{{
                tasksStore.getTasksbyStatus(1).length
            }}
          </span>

        </div>

        <TaskItem v-for="(task, index) in tasksStore.getTasksbyStatus(1)" :key="index" :task="task" class="card"
          draggable="true" @dragstart="startDrag($event, task.id)" />
        <!--- Drop zone begins  for column2-->

        <NewTask
          class="  relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" />
      </div>
      <div id="dropzone" class=" flex flex-col flex-shrink-0 w-72 drag-el" :key="index" @drop="onDrop($event, 2)"
        @dragover.prevent @dragenter.prevent>
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">Doing</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">{{
                tasksStore.getTasksbyStatus(2).length
            }}</span>

        </div>
        <TaskItem v-for="(task, index) in tasksStore.getTasksbyStatus(2)" :key="index" :task="task" class="card"
          draggable="true" @dragstart="startDrag($event, task.id)" />
        <NewTask
          class="relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" />
      </div>

      <div id="dropzone" class="  flex flex-col flex-shrink-0 w-72 drag-el" :key="index" @drop="onDrop($event, 3)"
        @dragover.prevent @dragenter.prevent>
        <div class="flex items-center flex-shrink-0 h-10 px-2">
          <span class="block text-sm font-semibold">Done</span>
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">{{
                tasksStore.getTasksbyStatus(3).length
            }}</span>

        </div>
        <TaskItem v-for="(task, index) in tasksStore.getTasksbyStatus(3)" :key="index" :task="task" class="card"
          draggable="true" @dragstart="startDrag($event, task.id)" />


        <NewTask
          class="relative flex flex-col items-center p-4 mt-3 bg-slate-200 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" />
      </div>

      <div class="flex-shrink-0 w-6"></div>
    </div>

  </div>



  <Footer />

  <!-- Component End -->
</template>

<script>
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import tasksStore from "../store/task";

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


    startDrag(evt, taskid) {
      console.log('hola')
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      setTimeout(() => {
        evt.target.classList.add('hide');
      }, 1);
      evt.dataTransfer.setData('itemID', taskid)
      console.log(taskid)
      // let finalStatus = tasksStore.getTasksbyStatus(1)
      // return finalStatus


    },
    onDrop(evt, dropzone) {
      const itemID = evt.dataTransfer.getData('itemID')
      if (evt.target.id == 'dropzone')
        evt.target.append(document.getElementById("taskitem"));
      // evt.preventDefault();
      this.tasksStore.updateStatus(dropzone, itemID);


      // for manipulating dropzone
      const dropzones = document.querySelectorAll('#dropzone');

      dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragEnter)
        dropzone.addEventListener('dragover', dragOver);
        dropzone.addEventListener('dragleave', dragLeave);
        dropzone.addEventListener('drop', drop);
      });

      function dragEnter(e) {
        e.target.classList.add('drag-over');
      }

      function dragOver(e) {
        e.target.classList.add('drag-over');
      }

      function dragLeave(e) {
        e.target.classList.remove('drag-over');
      }

      function drop(e) {
        e.target.classList.remove('drag-over');

      }

      // console.log(dropzone, itemID)
      // // let finalStatus = this.tasksStore.tasks.status
      // // return finalStatus
    },




  },
  computed: {
    ...mapStores(tasksStore),

    // listOne() {
    //   return this.tasks.filter((item) => task.status === 1)
    // },
    // listTwo() {
    //   return this.items.filter((item) => item.status === 2)
    // },

    // listThree() {
    //   return this.items.filter((item) => item.status === 3)
    // },
    // ColumTotalsByStatus() {
    //   return this.tasksStore.tasks.status;
    // },
  },



  mounted() {
    this.tasksStore.fetchTasks();
  },




};

</script>



<style scoped>
:hover#drop-zone {}

:hover.card {}

.drag-over {
  transition: all 200ms ease;
  vertical-align: top;

  border: dashed 3px rgb(13, 181, 80);
}
</style>

