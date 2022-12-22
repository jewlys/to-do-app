import { defineStore } from "pinia";
import { supabase } from "../supabase";
import userStore from "../store/user";
import tasksStore from "../store/task";



export default defineStore("columns", {
    state() {
        return {
            columns: [],
            userStore,
            tasksStore
        };
    },
    //fetch from db
    actions: {
        async fetchColumns() {
            const { data: columns } = await supabase

                //trae la info del base de datos

                .from("columns")

                .select("*")

                .order("id", { ascending: false });

            this.columns = columns;
        },
        //update the task
        async updateColumn(coltitle, itemID, column_id) {
            console.log(coltitle, itemID, column_id);
            const { error } = await supabase
                .from("columns")
                .update({ coltitle: coltitle, column_id })
                .eq("id", itemID, column_id)
            this.fetchColumns();
        },


        //add new task
        async addnewColumn(coltitle, user_id, column_id) {
            //  insert en la base
            const { error } = await supabase
                .from("columns")
                .insert({ user_id: user_id, coltitle: coltitle, column_id: column_id });
            if (error) throw error;
            this.fetchColumns();

        },

        async deleteColumns(itemID) {
            const { error } = await supabase.from("columns").delete().eq("id", itemID, column_id);

            this.fetchColumns();
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

        getTasksbyColumn: (state) => {
            return (column) => state.tasks.filter((task) => task.column_id === column);
        },

        // getTitle() {

        //     return (coltitle)=> ;

        // }
        // Trying it as a getter
        // removeTask(index) {
        //   this.task.splice(index, 1)

        // }
    },
});
  //add actions section for the fetching of data from DB
