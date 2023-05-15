<template>
  <div>
    <!-- <button @click="openModal" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md ">Create
      Parent</button> -->

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-100">
        <h2 class="text-lg font-bold mb-4">Create Parent</h2>
        <div class="flex text-red-600" v-if="errorMsg">
          <p>
            {{ errorMsg }}
          </p>
        </div>
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">First Name</label>
            <input type="text" v-model="first_name" name="fist_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div class="w-1/2">
            <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Last Name</label>
            <input type="text" v-model="last_name" name="last_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label class="block mb-2 text-sm font-bold text-gray-700">Birthday</label>
            <VueDatePicker v-model="birthday" class="w-full px-3 py-2" format="yyyy-MM-dd HH:mm" no-hours-overlay />
          </div>
          <div class="w-1/2">
            <label for="email" class="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input type="email" v-model="email" name="email"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div class="flex flex-row mb-4 space-x-3 justify-between">
          <div class="w-1/2">
            <label class="block mb-2 text-sm font-bold text-gray-700">Sex</label>
            <select v-model="sex" id="sex" name="sex"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="">Other</option>
            </select>
          </div>

          <div class="w-1/2">
            <label class="block mb-2 text-sm font-bold text-gray-700">Role</label>
            <select v-model="role" id="role" name="role"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="parent">PARENT</option>
              <option value="teacher">TEACHER</option>
              <option value="admin">ADMIN</option>
            </select>
          </div>
        </div>

        <!-- Student details -->
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student First Name</label>
            <input type="text" v-model="student_first_name" name="student_fist_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div class="w-1/2">
            <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Last Name</label>
            <input type="text" v-model="student_last_name" name="student_last_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>
       
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label class="block mb-2 text-sm font-bold text-gray-700">Student Birthday</label>
            <VueDatePicker v-model="student_birthday" class="w-full px-3 py-2" format="yyyy-MM-dd HH:mm"
              no-hours-overlay />
          </div>
          <div class="w-1/2">
            <label class="block mb-2 text-sm font-bold text-gray-700">Student Sex</label>
            <select v-model="student_sex" id="sex" name="student_sex"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="">Other</option>
            </select>
          </div>
        </div>

        <!-- End of student details -->

        <div class="flex justify-end">
          <button @click="createParent"
            class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md">Save</button>
          <button @click="closeModal"
            class="px-4 py-2 ml-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
        </div>
      </div>
    </div>
   
  </div>

</template>
<script setup>
import * as yup from 'yup'
import { onMounted, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import ParentsTable from './ParentsTable.vue';

// getting date
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const showModal = ref("false")
const email = ref('')
const first_name = ref('')
const last_name = ref('')
const role = ref('')
const sex = ref('')
const birthday = ref('')
const student_first_name = ref('')
const student_last_name = ref('')
const student_sex = ref('')
const student_birthday = ref('')


const schema = yup.object({
  email: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  sex: yup.string().required(),
  birthday: yup.string().required(),
  student_first_name: yup.string().required(),
  student_last_name: yup.string().required(),
  student_birthday: yup.string().required(),
  student_sex: yup.string().required()
})

async function createParent() {
  // await schema.validate({

  // })
  const query = `
    mutation CreateParent($parent: ParentInput) {
      createParent(parent: $parent) {
        email
        relations {
          status
         
        }
        students {
          id
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
  `;

  const variables = {
    parent: {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      sex: sex.value,
      birthday: birthday.value,
      //role: role.value,
      student: {
        first_name: student_first_name.value,
        last_name: student_last_name.value,
        birthday: student_birthday.value,
        sex: student_sex.value
      },
    }
  };

  try {
    const response = await fetch('https://att-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    const data = await response.json();
    if (response.ok) {
      // Data successfully saved to the database
      console.log('Parent created:', data.data.createParent);
      // Reset form inputs
      console.log(variables)
      email.value = '';
      first_name.value = '';
      last_name.value = '';
      sex.value = '';
      role.value = '';
     // errorMsg = "",
      console.log(variables)
      // Close the modal
      closeModal();
    } else {
      // Error occurred while saving data
      console.log('Error:', data.errors[0].message);
    }
  } catch (error) {
    console.log('Error:', error);
   // errorMsg.value = error.value
  }
}


function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>