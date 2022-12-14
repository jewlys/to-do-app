import { defineStore } from "pinia";

import { supabase } from "../supabase";
import userStore from "../store/user";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
      userStore,
    };
  },
  //fetch from db
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase

        //trae la info del base de datos

        .from("tasks")

        .select("*")

        .order("id", { ascending: false });

      this.tasks = tasks;
    },
    //update the task
    async updateTask(title, status, itemID) {
      console.log(title, status, itemID);
      const { error } = await supabase
        .from("tasks")
        .update({ title: title, status: status })
        .eq("id", itemID)
      this.fetchTasks();
    },
    async updateStatus(status, itemID) {
      console.log(status, itemID);

      const { error } = await supabase
        .from("tasks")
        .update({ status: status })
        .eq("id", itemID)
      this.fetchTasks();
    },


    //add new task
    async addnewTask(title, user_id, status) {
      //  insert en la base
      const { error } = await supabase
        .from("tasks")
        .insert({ user_id: user_id, title: title, status: status });
      if (error) throw error;

      this.fetchTasks();
    },

    async deleteTasks(itemID) {
      const { error } = await supabase.from("tasks").delete().eq("id", itemID);

      this.fetchTasks();
    },

    // const { error } = await supabase
    //   .from('tasks')
    //   .delete()
    //   .eq('task', 1)
  },
  getters: {
    getTasksbyStatus: (state) => {
      return (status) => state.tasks.filter((task) => task.status === status);
    },

    getTitle: (state) => {

      return (title) => state.tasks.filter((task) => task.title === title);

    }
    // Trying it as a getter
    // removeTask(index) {
    //   this.task.splice(index, 1)

    // }
  },
});
//add actions section for the fetching of data from DB
