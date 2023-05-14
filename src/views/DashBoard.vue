<template>
	<div class="w-full">
		<div class="flex justify-center mt-4">
			<div class="relative">
				<input
					type="text"
					class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Search..."
					v-model="searchTerm"
				/>
			</div>
			<div class="ml-auto mr-4">
				<button class="bg-green-700 h-10 text-white font-bold py-2 px-4 rounded-md"
				@click="showModal = true">
				New
				</button>
			</div>
		</div>



		<div>
			<SummaryCard/>
		</div>			
		<ParentsTable/>

		<div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="fixed inset-0 transition-opacity">
					<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h3 class="text-lg font-medium leading-6 text-gray-900 mb-2">Edit Parent Information</h3>

						<!-- Form fields -->
						<form class="space-y-6" @submit.prevent="submitForm">
							<div>
								<label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
								First Name
								</label>
								<div class="mt-1">
								<input type="text"  id="first-name" name="first-name" required class="shadow-sm py-2 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
								</div>
							</div>
							<div>
								<label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
								Last Name
								</label>
								<div class="mt-1">
								<input type="text"  id="first-name" name="first-name" required class="shadow-sm py-2 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
								</div>
							</div>
							<div>
								<label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<div class="mt-1">
								<input type="text"  id="first-name" name="first-name" required class="shadow-sm py-2 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
								</div>
							</div>
							<div>
								<label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
								Student name
								</label>
								<div class="mt-1">
								<input type="text"  id="first-name" name="first-name" required class="shadow-sm py-2 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
								</div>
							</div>
							<div class="flex">
								<div class="w-1/2 flex justify-center items-center">
									<label for="gender" class="mr-2 ">Gender:</label>
									<select id="gender" class="w-1/2 px-2 py-2 rounded-md">
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Other">Other</option>
									</select>
								</div>
								<div class="w-1/2 flex justify-center items-center">
									<label for="role" class="mr-2">Role:</label>
									<select id="role" class="w-1/2 px-2 py-2 rounded-md">
									<option value="Guardian">Guardian</option>
									<option value="Parent">Parent</option>
									<option value="Other">Other</option>
									</select>
								</div>
							</div>
							<div class="flex justify-center space-x-4">
								<button
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"						
								@click="showModal = false">Cancel</button>
								<button
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"						
								>Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SummaryCard from '../components/SummaryCard.vue';
import ParentsTable from '../components/ParentsTable.vue';

const showModal = ref(false)


</script>
