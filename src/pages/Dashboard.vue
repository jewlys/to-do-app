<template>
  <!-- Component Start -->
  <div
    class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"
  >
    <div class="px-10 mt-6">
      <h1 class="text-2xl font-bold">Team Project Board</h1>
    </div>
    <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      <newTask></newTask> 
      <taskItem> </taskItem>
      <newTask></newTask>
         
          </div>
          
       
          
       
          
         
  </div>
  <!-- Component End -->
</template>

<script>
import NewTask from "../components/NewTask.vue"
import TaskItem from "../components/TaskItem.vue";
export default {
  data() {
    return {
      newTask: NewTask,
      taskItem: TaskItem,
  }
},
components: {
  NewTask,
  TaskItem,
}
};
</script>
