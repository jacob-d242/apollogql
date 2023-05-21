<template>
  <div>
    <div>
      <p class="text-center text-xl font-bold">Students list</p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th class="p-4 border border-gray-500">First Name</th>
            <th class="p-4 border border-gray-500">Last Name</th>
            <th class="p-4 border border-gray-500">Birthday</th>
            <th class="p-4 border border-gray-500">Sex</th>
            <th class="p-4 border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in studentData" :key="student.id">
            <td class="p-4 border border-gray-500 whitespace-nowrap">{{ student.first_name }}</td>
            <td class="p-4 border border-gray-500 whitespace-nowrap">{{ student.last_name }}</td>
            <td class="p-4 border border-gray-500 whitespace-nowrap">{{ student.birthday }}</td>
            <td class="p-4 border border-gray-500 whitespace-nowrap">{{ student.sex }}</td>
            <td class="p-4 border border-gray-500 whitespace-nowrap">
              <ul>
                <li v-for="relation in student.relations" :key="relation.id">
                  <p class="mb-2">ID: {{ relation.id }}</p>
                  <p class="mb-2">Status: {{ relation.status }}</p>
                </li>
              </ul>
            </td>
            <td class="p-4 border border-gray-500">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                @click="handleDelete(index)">
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here, if needed */
</style>

<script setup>
import { ref, onMounted } from 'vue';

const studentData = ref(null);

async function fetchStudents() {
  const query = `
    query {
      students {
        id
        first_name
        last_name
        birthday
        sex
        profile {
         id
        }
        parent {
          id
        }
        relations {
          id
          status
        }
      }
    }
  `
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
    const data = await response.json();
   	studentData.value = data.data.students;
    console.log(studentData);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchStudents();
});
</script>
