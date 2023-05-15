<template>
	<div class="w-full">
		<div class="flex justify-center mt-4">
			<Search/>
			<div class="ml-auto mr-4">
				<button @click="toggleModal" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md">
					Create Parent
				</button>

			</div>
		</div>

		<CreateParent v-if="showModal" @close="toggleModal" />
		<div>
			<SummaryCard :total-parents="totalParents" :total-students="totalStudents"/>
		</div>			
			<ParentsTable :parentData="parentData"/>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SummaryCard from '../components/SummaryCard.vue';
import ParentsTable from '../components/ParentsTable.vue';
import CreateParent from '../components/CreateParent.vue';
import Search from '../components/Search.vue';
const showModal = ref("false")

const parentData = ref(null)
let totalParents = 0
let totalStudents = 0

const lastModified = ref(null)
function toggleModal() {
  showModal.value = !showModal.value;
}

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
          first_name
        }
      }
    }
  `

  const headers = {}
  if (lastModified.value) {
    headers['If-Modified-Since'] = lastModified.value
  }

  try {
    const response = await fetch("https://att-backend.herokuapp.com/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        query
      })
    })

    if (response.status === 304) {
      console.log('Data not modified')
      return
    }

    const data = await response.json()
    parentData.value = data.data.parents
    console.log(parentData.value)
    totalParents = parentData.value.length
    totalStudents = parentData.value.reduce((total, parent) => total + parent.students.length, 0)
    console.log("students", totalStudents)

    // Extract and store the Last-Modified header for cache validation
    const lastModifiedHeader = response.headers.get('Last-Modified')
    if (lastModifiedHeader) {
      lastModified.value = lastModifiedHeader
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchData()
})

</script>
