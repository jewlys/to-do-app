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
    async updateTask(title, column_id, itemID) {
      console.log(title, column_id, itemID);
      const { error } = await supabase
        .from("tasks")
        .update({ title: title, column_id: column_id })
        .eq("id", itemID)
      this.fetchTasks();
    },
    async updateStatus(column_id, itemID) {
      console.log(column_id, itemID);

      const { error } = await supabase
        .from("tasks")
        .update({ column_id: column_id })
        .eq("id", itemID)
      this.fetchTasks();
    },


    //add new task
    async addnewTask(title, user_id, column_id) {
      //  insert en la base
      const { error } = await supabase
        .from("tasks")
        .insert({ user_id: user_id, title: title, column_id: column_id });
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
      return (column_id) => state.tasks.filter((task) => task.column_id === column_id);
    },

    getTitle: (columnTitle) => {
      return (coltitle) => columnTitle((coltitle) === coltitle);

    }
    // Trying it as a getter
    // removeTask(index) {
    //   this.task.splice(index, 1)

    // }
  },
});
//add actions section for the fetching of data from DB
