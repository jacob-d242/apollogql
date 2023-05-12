<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar v-if="!['/', '/login'].includes($route.path)"/>
		
		<!-- Content -->
		<div class="main-content">
			<router-view />
		</div>
	</div>
</template>


<script setup>
// import HomeScreen from './views/HomeScreen.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	/* Color variables */
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
}

.main-content {
	flex: 1 1 0;
	//padding: 2rem;

	/* Adjust the margin-left to account for the sidebar width */
	margin-left: 5px;

	/* Add a transition to create a smooth effect when the sidebar expands or collapses */
	transition: margin-left 0.2s ease-in-out;

	/* Media query for smaller screens */
	@media (max-width: 1024px) {
		padding-left: 0rem;
		margin-left: 0;
	}
}
</style>
