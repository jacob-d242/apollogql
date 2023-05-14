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
				<th class="p-2 border border-gray-500">
					Birthday
				</th>
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
				<td class="p-2 border border-gray-500">{{ parent.birthday }}</td>
				<td class="p-2 border border-gray-500">{{ parent.sex }}</td>
				<td class="p-2 border border-gray-500" v-for="student in parent.students" :key="student.id">{{ student.id }}</td>
				<td class="p-2 border border-gray-500">
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md"
					@click="handleDelete(index)">
					Del
					</button>
				</td>
				</tr>
			</tbody>
		</table>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import SummaryCard from '../components/SummaryCard.vue';

const showModal = ref(false)
const parentData = ref(null)

async function fetchData() {
  const query = `
    query Query {
      parents {
        id
        first_name
        last_name
        email
        sex
        role
        relations {
          id 
        }
        students {
          id
        }
      }
    }
  `
  const token = localStorage.getItem('token')
  try {
    const response = await fetch("https://att-backend.herokuapp.com/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })

    const data = await response.json()
	parentData.value = data.data.parents
    console.log(parentData.value)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>