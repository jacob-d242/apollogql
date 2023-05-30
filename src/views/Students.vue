<template>
  <div>
    <div class="text-center">
      <img class="mx-auto w-28" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        alt="logo" />
      <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
        All Students
      </h4>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th class="p-2 border border-gray-500">First Name</th>
            <th class="p-2 border border-gray-500">Last Name</th>
            <th class="p-2 border border-gray-500">Birthday</th>
            <th class="p-2 border border-gray-500">Sex</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in displayedStudents" :key="student.id">
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ student.first_name }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ student.last_name }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ formatDate(student.birthday) }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ student.sex }}</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4 flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';

  const studentData = ref([]);
  const itemsPerPage = 10;
  const currentPage = ref(1);

  const totalPages = computed(() => Math.ceil(studentData.value.length / itemsPerPage));

  const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
  const endIndex = computed(() => startIndex.value + itemsPerPage);
  const displayedStudents = computed(() => studentData.value.slice(startIndex.value, endIndex.value));

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
  function formatDate(date) {
    return new Date(Number(date)).toLocaleDateString();
  }
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }

  function previousPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }

  onMounted(() => {
    fetchStudents();
  });
</script>

<style>
  table {
    font-size: 12px; /* Smaller font size */
    border-spacing: 0; /* Remove default cell spacing */
    table-layout: fixed; /* Fix the table layout */
    max-width: 100%; /* Reduce table width */
    width: 100%; /* Adjust table width to fit container */
  }

  th,
  td {
    padding: 4px; /* Add padding to table cells */
    width: 100px; /* Set a fixed width for table cells */
    height: 30px; /* Set a fixed height for table cells */
  }

  @media (max-width: 640px) {
    table {
      font-size: 10px; /* Reduce font size for smaller screens */
    }
  }
</style>
