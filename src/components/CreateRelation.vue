<template>
  <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content py-4 px-6 rounded-sm">
        <div v-if="parentData" class="flex flex-col items-center">
          <div class="mb-2">
            <div class="px-4 py-3 bg-white text-black">
              Parent Name: {{ parentData.first_name }} {{ parentData.last_name }}
            </div>
          </div>
          <h3 class="mb-1 font-semibold">Existing Students:</h3>
          <ul>
            <li v-for="student in parentData.students" :key="student.id" class="mb-2">
              <div class="px-4 py-3 bg-white">
                First Name: {{ student.first_name }} {{ student.last_name }}
              </div>
            </li>
          </ul>
        </div>

        <div class="mb-2" v-if="isNewStudent">
          <label class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <input v-model="relation.student.first_name" type="text" class="input-field w-full" placeholder="First Name" />
        </div>
        <div class="mb-2" v-if="isNewStudent">
          <label class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <input v-model="relation.student.last_name"  class="input-field w-full" placeholder="Last Name" />
        </div>
        <div class="mb-2" v-if="isNewStudent">
          <label class="block text-sm font-medium leading-6 text-gray-900">Birthday</label>
          <VueDatePicker v-model="relation.student.birthday" no-hours-overlay class="input-field w-full" />
        </div>
        <div class="mb-2" v-if="isNewStudent">
          <label class="block text-sm font-medium leading-6 text-gray-900">Sex</label>
          <select v-model="relation.student.sex"  name="student_sex"
            class="input-field w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="">Other</option>
          </select>
        </div>
        <div class="relative mb-2" v-if="!isNewStudent">
          <label class="block text-sm font-medium leading-6 text-gray-900">Existing Student</label>
          <select v-model="relation.student.id" class="input-field w-full">
            <option value="" disabled>Select Student</option>
            <option v-for="student in parentData.students" :key="student.id" :value="student.id">
              {{ student.first_name }} {{ student.last_name }}
            </option>
          </select>
        </div>
        <div class="relative mb-2">
          <label class="block text-sm font-medium leading-6 text-gray-900">Status</label>
          <input v-model="relation.status" type="text" class="input-field w-full" placeholder="Status" />
        </div>
        <div class="flex justify-center py-4 space-x-5">
          <button @click="toggleStudentType" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {{ isNewStudent ? 'Use Existing Student' : 'Create New Student' }}
          </button>
          <button @click="closeModal" class="bg-green-700 text-white font-bold py-2 px-4 rounded">Close</button>
          <button @click="createRelationship" class="bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';

const isModalOpen = ref(true);
const relation = ref({
  student: {
    first_name: '',
    last_name: '',
    birthday: '',
    sex: '',
    id: '',
  },
  status: '',
});
const props = defineProps({
  parentData: {
    type: Object,
    required: true,
  },
});
const isNewStudent = ref(false);
const parentData = ref(props.parentData);
const error = ref(null);

function toggleModal(parent) {
  parentData.value = parent;
  isModalOpen.value = !isModalOpen.value;
}

function toggleStudentType() {
  isNewStudent.value = !isNewStudent.value;
}

function closeModal() {
  isModalOpen.value = false;
}

async function createRelationship() {
  try {
    const student = isNewStudent.value
      ? {
          first_name: relation.value.student.first_name,
          last_name: relation.value.student.last_name,
          birthday: relation.value.student.birthday,
          sex: relation.value.student.sex,
        }
      : {
          id: relation.value.student.id,
        };

    const variables = {
      parent_id: parentData.value.id,
      student,
      status: relation.value.status,
    };

    const query = `
      mutation CreateRelationship($relation: ParentRelation) {
        createRelationship(relation: $relation) {
          first_name
          last_name
          id
          relations {
            status
            id
          }
          role
          sex
          students {
            first_name
          }
          email
        }
      }
    `;

    const response = await fetch('https://att-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { relation: relation.value },
      }),
    });

    const data = await response.json();
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    error.value = error.message;
  }
}

</script>

<style>
.modal-overlay {
  z-index: -1;
}

.modal-container {
  max-height: 90%;
}

.modal-content {
  max-height: calc(100vh - 120px);
}

.input-field {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 0;
  border-radius: 0.375rem;
  color: #111827;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
}

.text-red-500 {
  color: #f56565;
}
</style>
