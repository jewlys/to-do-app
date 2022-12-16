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


    async deleteTasks(itemID) {

      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', itemID)

      this.fetchTasks()

    },
    // async updateTask(title, user_id, status) {
    //   const { error } = await supabase
    //     .from('tasks')
    //     .update({ user_id: user_id, title: title, status: status })
    //     .eq('id', itemID)

    //   if (error) throw error;

    // },
    getters: {

      getTasksbyStatus: (state) => {

        return (status) => state.tasks.filter((task) => task.status === status)

      },

      numberOfTasksPerColumn() {

      },

      // Trying it as a getter
      // removeTask(index) {
      //   this.task.splice(index, 1)

      // }


    }

  }

});
//add actions section for the fetching of data from DB

