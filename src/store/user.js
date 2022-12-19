import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
    },
    async logIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (data.user) {
        this.user = data.user;
        this.$router.push("/dashboard");
      }
    },
    async logOut() {
      
        const data  = await supabase.auth.signOut()
        this.user = null
        this.$router.push("/")
        console.log(data)
      //  if (error) throw error;
      
       
    },


  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
