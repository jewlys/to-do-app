<script setup>


import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "./components/AppHeader.vue"
import Footer from "./components/Footer.vue"






</script>

<template>
	<RouterView />
	<AppHeader />

	<!-- Component Start -->
	<div
		class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
		
		<div class="px-10 mt-6">
			<h1 class="text-2xl font-bold">Team Project Board</h1>
		</div>
		<div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
			<div class="flex flex-col flex-shrink-0 w-72">
				<div class="flex items-center flex-shrink-0 h-10 px-2">
					<span class="block text-sm font-semibold">To do</span>
					<span
						class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
					<button
						class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
						</svg>
					</button>
				</div>
				<div class="flex flex-col pb-2 overflow-auto">
					<div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
						draggable="true">
						<button
							class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
							<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								fill="currentColor">
								<path
									d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
							</svg>
						</button>
						<h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to
							be done.</h4>

					</div>
				</div>
			</div>
			<div class="flex flex-col flex-shrink-0 w-72">
				<div class="flex items-center flex-shrink-0 h-10 px-2">
					<span class="block text-sm font-semibold">Doing</span>
					<span
						class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
					<button
						class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
						</svg>
					</button>
				</div>
				<div class="flex flex-col pb-2 overflow-auto">
					<div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
						draggable="true">
						<button
							class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
							<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								fill="currentColor">
								<path
									d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
							</svg>
						</button>

						<h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that 
							it's being done.</h4>
					</div>
				</div>
			</div>
			<div class="flex flex-col flex-shrink-0 w-72">
				<div class="flex items-center flex-shrink-0 h-10 px-2">
					<span class="block text-sm font-semibold">Done</span>
					<span
						class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
					<button
						class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
						</svg>
					</button>
				</div>
				<div class="flex flex-col pb-2 overflow-auto">
					<div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
						draggable="true">
						<button
							class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
							<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
								fill="currentColor">
								<path
									d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
							</svg>
						</button>
						<h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that is already done.</h4>
					</div>
				</div>
			</div>
			<div class="flex-shrink-0 w-6"></div>
		</div>




	</div>
	<!-- Component End -->


</template>


<style>
.group:hover .group-hover\:flex {
	display: flex !important;
}
</style>


