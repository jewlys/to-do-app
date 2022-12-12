<template>
    Dashboard
    <button @click = "login">Login!</button>
</template>
<script setup>
import NewTask from "@/components/NewTask.vue";
import { useTaskStore } from "../stores/task.js";
import TaskItem from "../components/TaskItem.vue";
import { ref } from "vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
// import { mapStore } from 'pinia'
// import userStore from '../stores/user'
export default{
    methods: {
        login() {

        }
    }
}
</script>