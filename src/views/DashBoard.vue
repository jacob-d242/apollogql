<template>
	<div class="overflow-x-auto w-full">
		<table class="min-w-full divide-y-2 divide-gray-200 text-sm mr-10 border-spacing-1 border-cyan-500">
			<thead class="ltr:text-left rtl:text-right">
				<tr class="flex center">
					
					<th>
						<input type="text" class="px-3 py-2 w-full rounded-md text-gray-800 border-black "/>
					</th>
				</tr>
				<tr>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						First Name
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Last Name
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Email
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Role
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Birthday
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Sex
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Student
					</th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 tracking-wider">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="parent in parents" :key="parent.id">
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.first_name }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.last_name }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.email }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.role }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.birthday }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.sex }}</td>
					<td class="px-4 py-2 whitespace-nowrap">{{ parent.student }}</td>
					<td class="px-2 py-2 whitespace-nowrap">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"
							@click="showModal =(true)">
							Edit
						</button>
						<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md"
							@click="handleDelete(index)">
							Del
						</button>
					</td>
				</tr>
			</tbody>
		</table>
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
  
<script>
import {onMounted, ref} from 'vue'
import axios from 'axios'
export default{
	setup() {
	const showModal = ref(false)
	const parentData = ref([])
	const fetchData = async () =>{
				try {
					const response = await axios.get("https://att-backend.herokuapp.com/account",{
						data :{
							query:`
							{
								parent {                 
								birthday
								email
								first_name
								last_name
								role
								sex
								student {               
									birthday
									first_name
									last_name
									sex
								}
								}
							}
						`
					}} )
					parentData = response.data.data.parent;
					console.log("data is",parentData)
					console.log(response)
				} catch (error) {
					console.log(error)
				}
			}
			onMounted(()=>{
				fetchData()
			})
			return {
				showModal,
				parentData,
				fetchData
			}
		},
	}
</script>
  