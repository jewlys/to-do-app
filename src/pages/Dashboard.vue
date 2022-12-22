<template>
  <div class="flex flex-col w-screen h-screen overflow-auto text-gray-700">
    <div
      id="big"
      class="big flex flex-col w-screen h-screen overflow-auto text-gray-700"
    >
      <AppHeader />
      <div class="flex px-10 mt-6">
        <h1 class="text-2xl font-bold">Your Dashboard</h1>
        <form action="">
          <input
            class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
            type="search"
            placeholder="Search for a task.."
            v-model="search"
          />
        </form>
      </div>

      <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        <!-- 
Drop zone begins  for column1-->
        <div
          id="dropzone"
          class="flex flex-col flex-shrink-0 w-72 drag-el"
          :key="index"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">To Do </span>
            <span
              class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-blue-500 bg-white rounded bg-opacity-30"
              >{{ tasksStore.getTasksbyStatus(1).length }}
            </span>
          </div>

          <TaskItem
            v-for="(task, index) in filteredTerms1"
            :key="index"
            :task="task"
            class="card"
            draggable="true"
            @dragstart="startDrag($event, task.id)"
          />
          <div v-if="filteredTerms1.length === 0">
            <img
              src="https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
              alt=""
            />
          </div>
          <!-- <TaskItem v-if="filteredTerms(tasksStore.getTasksbyStatus(1))">Hola</TaskItem> -->
          <!--- Drop zone begins  for column2-->
          <NewTask class="" />
          <div
            v-if="tasksStore.getTasksbyStatus(1).length == 0"
            class="mt-3 text-sm font-medium"
          >
            Sorry, you don't have any cards. Add some to get started!
          </div>

          <div></div>
        </div>
        <div
          id="dropzone"
          class="flex flex-col flex-shrink-0 w-72 drag-el"
          :key="index"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Doing</span>
            <span
              class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-blue-500 bg-white rounded bg-opacity-30"
              >{{ tasksStore.getTasksbyStatus(2).length }}</span
            >
          </div>
          <TaskItem
            v-for="(task, index) in filteredTerms2"
            :key="index"
            :task="task"
            class="card"
            draggable="true"
            @dragstart="startDrag($event, task.id)"
          />
          <div v-if="filteredTerms2.length === 0">
            <img
              src="https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
              alt=""
            />
          </div>

          <NewTask class="" />
          <div v-if="tasksStore.getTasksbyStatus(2).length == 0">
            Sorry, you don't have any cards. Add some to get started!
          </div>
        </div>

        <div
          id="dropzone"
          class="flex flex-col flex-shrink-0 w-72 drag-el"
          :key="index"
          @drop="onDrop($event, 3)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Done</span>
            <span
              class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-blue-500 bg-white rounded bg-opacity-30"
              >{{ tasksStore.getTasksbyStatus(3).length }}</span
            >
          </div>
          <TaskItem
            v-for="(task, index) in filteredTerms3"
            :key="index"
            :task="task"
            class="card"
            draggable="true"
            @dragstart="startDrag($event, task.id)"
          />
          <div v-if="filteredTerms3.length === 0">
            <img
              src="https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
              alt=""
            />
          </div>
          <NewTask class="" />
          <div v-if="tasksStore.getTasksbyStatus(3).length == 0">
            Sorry, you don't have any cards. Add some to get started!
          </div>
          <!-- <NewColumn /> -->
        </div>

        <div class="flex-shrink-0 w-6"></div>
      </div>
    </div>
  </div>

  <!-- Component End -->
</template>

<script>
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import tasksStore from "../store/task";

import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";
import NewColumn from "../components/NewColumn.vue";

import { mapStores } from "pinia";

export default {
  data() {
    // we define user store inside a const
    return {
      newTask: NewTask,
      taskItem: TaskItem,
      search: null,
    };
  },

  components: {
    NewTask,
    TaskItem,
    AppHeader,
    Footer,
    NewColumn,
  },

  methods: {
    //    deleteThisRow: function (index) {
    //     this.tasks.splice(index, 1);
    //  },

    //   removeTask(index) {
    //     this.task.splice(index, 1)

    //   },

    startDrag(evt, taskid) {
      console.log("hola");
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      setTimeout(() => {
        evt.target.classList.add("hide");
      }, 1);
      evt.dataTransfer.setData("itemID", taskid);
      console.log(taskid);
      // let finalStatus = tasksStore.getTasksbyStatus(1)
      // return finalStatus
    },
    onDrop(evt, dropzone) {
      const itemID = evt.dataTransfer.getData("itemID");
      // evt.preventDefault();
      this.tasksStore.updateStatus(dropzone, itemID);

      // for manipulating dropzone
      const dropzones = document.querySelectorAll("#dropzone");

      dropzones.forEach((dropzone) => {
        dropzone.addEventListener("dragenter", dragEnter);
        dropzone.addEventListener("dragover", dragOver);
        dropzone.addEventListener("dragleave", dragLeave);
        dropzone.addEventListener("drop", drop);
      });

      function dragEnter(e) {
        e.target.classList.add("drag-over");
      }

      function dragOver(e) {
        e.target.classList.add("drag-over");
      }

      function dragLeave(e) {
        e.target.classList.remove("drag-over");
      }

      function drop(e) {
        e.target.classList.remove("drag-over");
      }

      // console.log(dropzone, itemID)
      // // let finalStatus = this.tasksStore.tasks.status
      // // return finalStatus
    },
  },
  taskStoreGetter() {
    this.tasksStore.addnewTask(this.title, this.userStore.user.id, this.status);
    if (this.title.length < 3) {
      return alert("Please enter more than 3 caracthers");
    }
    console.log(taskStoreGetter());
    this.toggleModal();
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

    filteredTerms1() {
      if (this.search) {
        return this.tasksStore
          .getTasksbyStatus(1)
          .filter((task) =>
            task.title.toLowerCase().includes(this.search.toLowerCase())
          );
      } else return this.tasksStore.getTasksbyStatus(1);
    },

    filteredTerms2() {
      if (this.search) {
        return this.tasksStore
          .getTasksbyStatus(2)
          .filter((task) =>
            task.title.toLowerCase().includes(this.search.toLowerCase())
          );
      }

      // else if (this.search && this.tasksStore.getTasksbyStatus(2).length === 0) {
      //   console.log("nothing to show")

      // }
      else return this.tasksStore.getTasksbyStatus(2);
    },
    filteredTerms3() {
      if (this.search) {
        return this.tasksStore
          .getTasksbyStatus(3)
          .filter((task) =>
            task.title.toLowerCase().includes(this.search.toLowerCase())
          );
      } else return this.tasksStore.getTasksbyStatus(3);
    },

    // filteredTerms(filteredArray) {
    //   if (this.search) {
    //     return filteredArray.filter(task => task.title.toLowerCase().includes(this.search.toLowerCase()))
    //   }
    //   else {
    //     return filteredArray;
    //   }
    // },

    // filteredTerms: function() {

    //   if (this.search) {
    //     return this.tasksStore.tasks.filter((title) => {

    //       return tasksStore.tasks.title.includes(this.search)
    //     })
    //   }

    // },
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped>
.drag-over {
  transition: all 200ms ease;
  vertical-align: top;

  border: dashed 3px rgb(255, 255, 255);
}

.big {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    49deg,
    #a19ff5,
    #c0b2f2,
    #ffd8d8,
    #d1baff,
    #9196f7,
    #f7d3ca
  );
  background-size: 600% 100%;
  animation: gradient 16s linear infinite;
  animation-direction: alternate;
}

@keyframes gradient {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 100%;
  }
}
</style>
