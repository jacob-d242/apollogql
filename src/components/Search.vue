<template>
  <div class="search-container m-2">
    <input
      type="text"
      v-model="userInput"
      :class="{ 'border-red-500': errorMessage }"
      class="search-input border-2 border-gray-300 px-3 py-5 rounded-md"
      placeholder="Search..."
    >
    <button @click="search" class="bg-green-700 px-3 py-3 rounded-md text-white">Search</button>
    <div v-if="loading" class="mt-2">Loading...</div>
    <div v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</div>
    <div class="dropdown" v-if="results && results.length > 0">
      <h2 class="text-lg font-semibold">Results:</h2>
      <ul>
        <li v-for="result in results" :key="result.id" class="mt-2">{{ result.first_name }} {{ result.last_name }}</li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import * as Yup from 'yup';

const userInput = ref('');
const results = ref([]);
const loading = ref(false);
const errorMessage = ref('');

const searchParentByName = async (name) => {
  const query = `
    query SearchUserByName($name: String) {
      searchParentByName(name: $name) {
        first_name
        last_name
      }
    }
  `;

  const variables = {
    name,
  };

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

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  const parentResults = data.data.searchParentByName;

  console.log('Parent Results:', parentResults);

  return parentResults;
};

const searchStudentByName = async (name) => {
  const query = `
    query SearchUserByName($name: String) {
      searchStudentByName(name: $name) {
        first_name
        last_name
      }
    }
  `;

  const variables = {
    name,
  };

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

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  const studentResults = data.data.searchStudentByName;

  console.log('Student Results:', studentResults);

  return studentResults;
};

const search = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const schema = Yup.string().required('Input is required');
    await schema.validate(userInput.value);

    const parentResults = await searchParentByName(userInput.value);
    const studentResults = await searchStudentByName(userInput.value);

    results.value = [...parentResults, ...studentResults];

    if (results.value.length === 0) {
      errorMessage.value = 'No matching records found.';
    }
  } catch (err) {
    errorMessage.value = err.message;
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>
<style>
.search-container {
  position: relative;
}

.search-input {
  border: 1px solid #ccc;
  width: 300px;
  height: 30px;
  padding: 4px 8px;
}

.dropdown {
  position: absolute;
  z-index: 9999;
  top: 100%;
  left: 0;
  width: 400px; /* Adjust the width as needed */
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
}

.dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  margin-bottom: 8px;
}

.error-message {
  color: red;
}

.input-error {
  border-color: red;
}
</style>