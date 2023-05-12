<template>
     <div>
      
    <button @click="openModal" class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Create Student</button>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-80">
        <h2 class="text-lg font-bold mb-4">Create Student</h2>
        <div class="mb-4">
          <label for="id" class="block mb-2 text-sm font-bold text-gray-700">Id</label>
          <input  type="email" v-model="id" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input  type="email" v-model="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">First Name</label>
          <input  type="text" v-model="first_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <div class="mb-4">
          <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Last Name</label>
          <input  type="text" v-model="last_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <div class="flex justify-end">
          <button @click="createStudent" class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Create</button>
          <button @click="closeModal" class="px-4 py-2 ml-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from 'vue'

const showModal = ref(false)
const email = ref('')
const first_name =ref('')
const last_name = ref('')
const id = ref('')
    async function createStudent (){
        const query=`
        mutation CreateStudent($relation: ParentRelation) {
        createRelationship(relation: $relation) {
            email
            first_name
            id
            last_name
            relations {
            id
            status
            }
            role
            sex
            students {
            first_name
            }
        }
        }
        `

        const variables = {
            relation: {
            id: id.value || null,
            email: email.value || null,
            first_name: first_name.value || null,
            last_name: last_name.value || null
            }
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
            console.log(data)
            } catch (error) {
                console.log(error)
            }
        
    }
    function openModal() {
        showModal.value = true
    }

    function closeModal() {
        showModal.value = false
    }
    // onMounted(()=>{
    //     createStudent()
    // })
</script>