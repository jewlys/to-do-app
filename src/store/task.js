import { defineStore } from "pinia";

import { supabase } from "../supabase";
import userStore from "../store/user";

export default defineStore("tasks", {
  state() {
    return {
      tasks: null,
    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase

        .from("tasks")

        .select("*")

        .order("id", { ascending: false });

      this.tasks = tasks;
    },
  },
  async addnewTask(title) {
      //  insert en la base
      const { error } = await supabase   
  .from('task')
  .insert({user_id: userStore.user.id  , title: title  , status: 1 })
   if (error) throw error;

  },
  
  deleteTasks(itemID) {
    this.tasks = this.tasks.filter((object) => {
      return object.id !==itemID;
    })
  },

});
