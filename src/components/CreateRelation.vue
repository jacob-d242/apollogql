<template>
  <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content py-4 px-6">
        <div v-if="parentData">
          <div class="relative mb-2">
            
            <div class=" px-3 py-2 mt-1 bg-white">
              Parent First Name :{{ parentData.first_name }}
            </div>
          </div>
          <div class="relative mb-2">
            <div class=" px-3 py-2 mt-1 bg-white">
              Student Last Name :{{ parentData.last_name }}
            </div>
          </div>
          <div class="relative mb-2">            
            <div class=" px-3 py-2 mt-1 bg-white">
            Parent Email :{{ parentData.email }}
            </div>
          </div>
          <div class="relative mb-2">            
            <div class=" px-3 py-2 mt-1 bg-white">
              Role:{{ parentData.role }}
            </div>
          </div>
          <div class="relative mb-2">            
            <div class=" px-3 py-2 mt-1 bg-white">
              Sex :{{ parentData.sex }}
            </div>
          </div>
          <h3>Students:</h3>
          <ul>
            <li v-for="student in parentData.students" :key="student.id">
              First Name : {{ student.first_name }} {{ student.last_name }}
              birthday:{{ student.birthday }}
            </li>
          </ul>
        </div>
        <div class="relative mb-2">
          <label class="block text-sm font-medium leading-6 text-gray-900">Status</label>
          <input
            type="text"
            v-model="status"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Status"
          />
        </div>
        <div class="flex flex-row justify-center py-4 space-x-5">
          <button @click="closeModal" class="bg-green-700 text-white font-bold py-2 px-4 rounded">Close</button>
          <button @click="createRelationship" class="bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import { array } from 'yup';
const isModalOpen = ref(true)
const status = ref("")
function  closeModal(){
    isModalOpen.value = false
}
function openModal(){
    isModalOpen.value = true
}
const parentData = ref({
  first_name: "",
  last_name: "",
  birthday: "",
  sex: "",
})
async function createRelationship(){
      const query=`
          mutation Mutation($relation: ParentRelation) {
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
    `
    const variables = {
      relation: {
        status: status.value,
        student: {
          first_name: parentData.value.first_name,
          last_name: parentData.value.last_name,
          birthday: parentData.value.birthday,
          sex: parentData.value.sex,
        },
      },
    }
    try {
      const res = await fetch("https://att-backend.herokuapp.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
      });
      const data = await res.json()
      console.log(variables)

    } catch (error) {
      console.log(error)
    }
  }
  const props = defineProps({
    parentData: {
        type: Object,
        required: true,
      },
})
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
</style>