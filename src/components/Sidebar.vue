<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
	  
	  <div class="menu">
		<router-link to="/dashboard" class="button">
		  <span><Icon icon="material-symbols:home-outline" width="20" /></span>
		  <!-- <span class="text-sm ml-2">Home</span> -->
		</router-link>
		<router-link to="/students" class="button">
		  <span><Icon icon="mdi:user-group-outline" width="20" /></span>
		  <!-- <span class="text-sm ml-2">Parents</span> -->
		</router-link>
		<router-link to="/profiles" class="button">
		  <span><Icon icon="system-uicons:files-stack" width="20" /></span>
		  <!-- <span class="text-sm ml-2">Students</span> -->
		</router-link>
		
	  </div>
  
	  <div class="flex"></div>
  
	  <div class="menu">
		<button @click="openLogoutModal" class="button">
			<span><Icon icon="mdi:user-circle-outline" width="20" /></span>
		</button>
	  </div>
	</aside>
	<LogoutModal v-if="showLogoutModal" @close="closeLogoutModal"/>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue';
  import LogoutModal from "./LogoutModal.vue"
  const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  
  const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
  }
  const showLogoutModal = ref(false);

const openLogoutModal = () => {
  showLogoutModal.value = true;
};

const closeLogoutModal = () => {
  showLogoutModal.value = false;
};
  </script>
  
  <style lang="scss" scoped>
  aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: 4rem;
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
  
	.flex {
	  flex: 1 1 0%;
	}
  
	.menu-toggle-wrap {
	  display: flex;
	  justify-content: flex-end;
	  margin-bottom: 1rem;
	  position: relative;
	  top: 0;
	  transition: 0.2s ease-in-out;
  
	  .menu-toggle {
		transition: 0.2s ease-in-out;
  
		&:hover {
		  .material-icons {
			color: var(--primary);
			transform: translateX(0.5rem);
		  }
		}
	  }
	}
  
	h3,
	.button .text {
	  opacity: 0;
	  transition: opacity 0.3s ease-in-out;
	}
  
	.menu {
	  margin: 0 -1rem;
  
	  .button {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: 0.2s ease-in-out;
		padding: 0.5rem 1rem;
  
		.material-icons {
		  font-size: 2rem;
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
  
		.text {
		  color: var(--light);
		  transition: 0.2s ease-in-out;
		}
  
		&:hover {
		  background-color: var(--dark-alt);
  
		  .material-icons,
		  .text {
			color: var(--primary);
		  }
		}
  
		&.router-link-exact-active {
		  background-color: var(--dark-alt);
		  border-right: 3px solid var(--primary);
  
		  .material-icons,
		  .text {
			color: var(--primary);
		  }
		}
	  }
	}
  
	&.is-expanded {
	  width: 3rem;
  
	  .menu-toggle-wrap {
		top: -3rem;
  
		.menu-toggle {
		  transform: rotate(-180deg);
		}
	  }
  
	  h3,
	  .button .text {
		opacity: 1;
	  }
	}
  
	@media (max-width: 768px) {
	  position: fixed;
	  z-index: 99;
	  top: 0;
	  left: 0;
	  bottom: 0;
	  width: 2.5rem;
	  transform: translateX(-100%);
	  transition: transform 0.3s ease-in-out;
  
	  &.is-expanded {
		transform: translateX(0);
		width: 2rem;
	  }
  
	  .menu-toggle-wrap {
		justify-content: flex-start;
  
		.menu-toggle {
		  transform: rotate(0deg);
		}
	  }
  
	  h3 {
		display: none;
	  }
  
	  .button .text {
		display: none;
	  }
	}
  }
  </style>
  