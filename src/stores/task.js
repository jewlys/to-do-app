// /store/task.js
 
import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('task')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }
  }
});