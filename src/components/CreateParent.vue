<template>
    <div>
   <button @click="openModal" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md ">Create Parent</button>

   <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
     <div class="bg-white rounded-lg p-6 w-80">
       <h2 class="text-lg font-bold mb-4">Create Parent</h2>
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
       <div class="flex flex-row mb-4 justify-between">
         <div >
          <label  class="block mb-2 text-sm font-bold text-gray-700">Sex</label>
          <select v-model="sex" id="sex" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="">Other</option>
          </select>
        </div>
  
  
        <div >
          <label  class="block mb-2 text-sm font-bold text-gray-700">Role</label>
          <select v-model="role" id="sex" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select</option>
            <option value="male">Parent</option>
            <option value="female">Guardian</option>
            <option value="female">Sibling</option>
          </select>
        </div>

       </div>


       <div class="flex justify-end">
         <button @click="createParent" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md ">Save</button>
         <button @click="closeModal" class="px-4 py-2 ml-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
       </div>
     </div>
   </div>
 </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const showModal = ref(false)
const email = ref('')
const first_name = ref('')
const last_name = ref('')
const role = ref('')
const sex = ref('')

async function createParent() {
  const query = `
    mutation CreateParent($parent: ParentInput) {
      createParent(parent: $parent) {
        id
        first_name
        last_name
        email
        sex
        role
        relations {
          status
          id
        }
        students {
          id
          first_name
          last_name
          birthday
          sex
          profile {
            id
            school_name
            school_class
            sunday_class
            image
          }
        }
      }
    }
  `
  const variables = {
    parent: {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      sex: sex.value,
      role: role.value
    },
  };

  try {
    const res = await fetch('https://att-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      console.log('first_name:', first_name.value);
      console.log('variables:', variables);
    } else {
      const errorData = await res.json();
      console.log(errorData.errors[0].message);
    }
  } catch (error) {
    console.log(error);
  }
}

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>