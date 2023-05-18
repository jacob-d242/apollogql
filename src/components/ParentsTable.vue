<template>
    <div>
        <table class="w-3/4 mx-auto border-collapse border border-gray-500">
			<thead>
				<tr>
				<th class="p-2 border border-gray-500">
					First Name
				</th>
				<th class="p-2 border border-gray-500">
					Last Name
				</th>
				<th class="p-2 border border-gray-500">
					Email
				</th>
				<th class="p-2 border border-gray-500">
					Role
				</th>
				<!-- <th class="p-2 border border-gray-500">
					Birthday
				</th> -->
				<th class="p-2 border border-gray-500">
					Sex
				</th>
				<th class="p-2 border border-gray-500">
					Student
				</th>
				<th class="p-2 border border-gray-500">
					Actions
				</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="parent in parentData" :key="parent.id">
				<td class="p-2 border border-gray-500">{{ parent.first_name }}</td>
				<td class="p-2 border border-gray-500">{{ parent.last_name }}</td>
				<td class="p-2 border border-gray-500">{{ parent.email }}</td>
				<td class="p-2 border border-gray-500">{{ parent.role }}</td>
				<!-- <td class="p-2 border border-gray-500">{{ parent.birthday }}</td> -->
				<td class="p-2 border border-gray-500">{{ parent.sex }}</td>
				<td class="p-2 border border-gray-500" v-for="student in parent.students" :key="student.id">{{ student.first_name }}</td>
				<td class="p-2 border border-gray-500">
					<button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"
					@click="toggleModal">
					Relation
					</button>
				</td>
				</tr>
			</tbody>
		</table>
		<CreateRelation v-if="isModalOpen"/>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import CreateRelation from './CreateRelation.vue';
const isModalOpen = ref(false)
const showModal = ref(false)
const props = defineProps({
	parentData:{
		type:Array,
	
	}
})

function toggleModal (){
	isModalOpen.value = !isModalOpen.value
}
</script>