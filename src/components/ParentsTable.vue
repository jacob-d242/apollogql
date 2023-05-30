<template>
	<div class="overflow-x-auto">
	  <table class="w-lg mx-auto border-collapse border border-gray-500">
		<thead>
		  <tr>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">First Name</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Last Name</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Email</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Role</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Sex</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Student</th>
			<th class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">Actions</th>
		  </tr>
		</thead>
		<tbody>
		  <tr v-for="(parent, index) in paginatedData" :key="parent.id">
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">{{ parent.first_name }}</td>
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">{{ parent.last_name }}</td>
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">{{ parent.email }}</td>
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">{{ parent.role }}</td>
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm">{{ parent.sex }}</td>
			<td class="p-1 sm:p-2 border border-gray-500 text-xs sm:text-sm" v-for="student in parent.students" :key="student.id">
			  {{ student.first_name }}
			</td>
			<td class="p-1 sm:p-2 border  space-x-2 border-gray-500">
			  <button
				class="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 sm:py-2 px-1 sm:px-2 rounded-md text-xs sm:text-sm"
				@click="toggleModal(parent)"
			  >
				Relation
			  </button>
			  <button
				class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-1 sm:px-2 rounded-md text-xs sm:text-sm"
				@click="deleteParent"
			  >
				Delete
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	  <CreateRelation v-if="isModalOpen" :parentData="selectedItem" @close="toggleModal(null)" />
	  <div class="flex justify-center mt-4">
		<button
		  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
		  @click="prevPage"
		  :disabled="currentPage === 1 || !props.parentData"
		>
		  Previous
		</button>
		<button
		  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
		  @click="nextPage"
		  :disabled="currentPage * itemsPerPage >= totalParents || !props.parentData"
		>
		  Next
		</button>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, defineProps, computed } from 'vue';
  import CreateRelation from './CreateRelation.vue';
  
  const isModalOpen = ref(false);
  const selectedItem = ref(null);
  const props = defineProps({
	parentData: {
	  type: Array,
	  required: true,
	},
  });
  
  const currentPage = ref(1);
  const itemsPerPage = 6;
  let totalParents = 0;
  
  function toggleModal(parent) {
  console.log(parent); // Check the value of parent
  selectedItem.value = parent;
  isModalOpen.value = !isModalOpen.value;
}

  
  const paginatedData = computed(() => {
	if (!props.parentData) {
	  return [];
	}
	function deleteParent() {
  if (selectedItem.value) {
    // Perform the delete operation based on your requirement
    // For example, you can use an API call to delete the item from the server-side
  
    // After successful deletion, remove the item from the parentData array
    const index = props.parentData.findIndex((parent) => parent.id === selectedItem.value.id);
    if (index !== -1) {
      props.parentData.splice(index, 1);
    }
  
    // Close the modal after deletion
    toggleModal(null);
  }
}

	totalParents = props.parentData.length;
  
	const startIndex = (currentPage.value - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
  
	return props.parentData.slice(startIndex, endIndex);
  });
  
  function nextPage() {
	if (currentPage.value * itemsPerPage < totalParents) {
	  currentPage.value += 1;
	}
  }
  
  function prevPage() {
	if (currentPage.value > 1) {
	  currentPage.value -= 1;
	}
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
  