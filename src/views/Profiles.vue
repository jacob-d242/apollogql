<template>
  <div class="mt-5">
    <div class="text-center">
      <img class="mx-auto w-28" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        alt="logo" />
      <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
        Current Users
      </h4>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th class="p-2 border border-gray-500">First Name</th>
            <th class="p-2 border border-gray-500">Last Name</th>
            <th class="p-2 border border-gray-500">Username</th>
            <th class="p-2 border border-gray-500">Email</th>
            <th class="p-2 border border-gray-500">Class</th>
            <th class="p-2 border border-gray-500">BirthDay</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users.slice(startIndex, endIndex)" :key="user.id">
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ user.first_name }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ user.last_name }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ user.username }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ user.email }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{ user.class }}</td>
            <td class="p-2 border border-gray-500 whitespace-nowrap">{{formatDate (user.birthday) }}</td>
          </tr>
        </tbody>

      </table>
      <div class="mt-4 flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="previousPage"
          :disabled="currentPage === 1">Previous</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" @click="nextPage"
          :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const users = ref([]);
const itemsPerPage = 10;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage));
function formatDate(date) {
    return new Date(Number(date)).toLocaleDateString();
  }
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);
const displayedUser = computed(() => users.value.slice(startIndex.value, endIndex.value));

async function fetchUsers() {
  const query = `
    query getAllUsers {
      users{
        first_name
        last_name
        username
        first_name
        last_name
        email
        class
        birthday      
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
    users.value = data.data.users;
    console.log(users);
  } catch (error) {
    console.error(error);
  }
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
  fetchUsers();
});
</script>

<style>
table {
  font-size: 12px;
  border-collapse: collapse;
  width: 100%;
  max-width: 1200px;
  /* Adjust the maximum width of the table */
}

th,
td {
  padding: 8px;
  /* Increase the padding for table cells */
  max-width: 150px;
  /* Adjust the maximum width of the table cells */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 640px) {
  table {
    font-size: 10px;
  }
}</style>

