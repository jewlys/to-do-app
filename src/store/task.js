import { defineStore } from "pinia";

import { supabase } from "../supabase";
import userStore from "../store/user";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],

    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase

        //trae la info del base de datos

        .from("tasks")

        .select("*")

        .order("id", { ascending: false });

      this.tasks = tasks;
    },

    async addnewTask(title, user_id, status) {
      //  insert en la base 
      const { error } = await supabase
        .from('tasks')
        .insert({ user_id: user_id, title: title, status: status })
      if (error) throw error;

      this.fetchTasks()

    },


    deleteTasks(itemID) {
      this.tasks = this.tasks.filter((object) => {
        return object.id !== itemID;
      })
    },

  },
  getters: {

    getTasksbyStatus: (state) => {

      return (status) => state.tasks.filter((task) => task.status === status)

    },





  }

});
//add actions section for the fetching of data from DB

