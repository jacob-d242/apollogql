<template>
	<div class="overflow-x-auto">
	  <table class="w-full mx-auto border-collapse border border-gray-500">
		<thead>
		  <tr>
			<th class="p-2 border border-gray-500">First Name</th>
			<th class="p-2 border border-gray-500">Last Name</th>
			<th class="p-2 border border-gray-500">Email</th>
			<th class="p-2 border border-gray-500">Role</th>
			<th class="p-2 border border-gray-500">Sex</th>
			<th class="p-2 border border-gray-500">Student</th>
			<th class="p-2 border border-gray-500">Actions</th>
		  </tr>
		</thead>
		<tbody>
		  <tr v-for="parent in parentData" :key="parent.id">
			<td class="p-2 border border-gray-500">{{ parent.first_name }}</td>
			<td class="p-2 border border-gray-500">{{ parent.last_name }}</td>
			<td class="p-2 border border-gray-500">{{ parent.email }}</td>
			<td class="p-2 border border-gray-500">{{ parent.role }}</td>
			<td class="p-2 border border-gray-500">{{ parent.sex }}</td>
			<td class="p-2 border border-gray-500" v-for="student in parent.students" :key="student.id">
			  {{ student.first_name }}
			</td>
			<td class="p-2 border border-gray-500">
			  <button
				class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"
				@click="toggleModal(parent)"
			  >
				Relation
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	  <CreateRelation v-if="isModalOpen" :parentData="selectedItem" @close="toggleModal(null)" />
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CreateRelation from './CreateRelation.vue';
  
  const isModalOpen = ref(false);
  const selectedItem = ref(null);
  
  const props = defineProps({
	parentData: {
      type: Object,
      required: true,
    },
  });
  

  
  function toggleModal(parent) {
	selectedItem.value = parent;
	isModalOpen.value = !isModalOpen.value;
  }
  </script>
  
  <style scoped>
  @media (max-width: 640px) {
	/* Styles for smaller screens */
	table {
	  font-size: 12px;
	}
	th,
	td {
	  padding: 0.5rem;
	}
	.overflow-x-auto {
	  overflow-x: scroll;
	  overflow-y: hidden;
	  white-space: nowrap;
	  -webkit-overflow-scrolling: touch;
	}
  }
  </style>
  