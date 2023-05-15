<template>
  <div class="relative">
    <input
      type="text"
      class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search..."
      v-model="id"
    />
    <button
      class="absolute right-0 top-0 bg-green-500 text-white px-3 py-2 rounded-md"
      @click="handleSearch"
    >
      <Icon icon="ic:baseline-search" width="30" height="25" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const id = ref('');

const handleSearch = async () => {
  const idValue = parseInt(id.value);
  const query = `
    query Query($studentByIdId: Int!) {
      studentById(id: $studentByIdId) {
        id
        first_name
        last_name
        birthday
        sex
        profile {

        }
        parent {

        }
        relations {

        }
      }
    }
  `;

  const variables = {
    studentByIdId: idValue,
  };

  try {
    const response = await fetch('https://att-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
