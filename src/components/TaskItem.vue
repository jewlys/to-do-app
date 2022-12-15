<template>

    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        draggable="true">

        <p>{{ task.title }}</p>

        <p>Status</p>
    </div>


</template>

<script>

export default {
    props: {
        task: Object
    }
}
</script>