<template>
  <div>
    <!-- <button @click="openModal" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md ">Create Parent</button> -->

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="bg-white rounded-lg p-6 sm:w-96 lg:w-max">
        <h2 class="text-lg font-bold mb-4">Create Parent</h2>
                <!-- Add a wrapper with max-h-screen and overflow-y for scrolling -->
        <div class="max-h-screen overflow-y-auto">
          <div class="flex flex-col mb-4 space-y-3 sm:flex-row sm:space-x-3 sm:mb-0">
            <div class="w-full sm:w-1/2">
              <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">First Name</label>
              <input type="text" v-model="first_name" name="first_name"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              <p class="text-red-500" v-if="errors.first_name">{{ errors.first_name }}</p>
            </div>
            <div class="w-full sm:w-1/2">
              <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Last Name</label>
              <input type="text" v-model="last_name" name="last_name"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              <p class="text-red-500" v-if="errors.last_name">{{ errors.last_name }}</p>
            </div>
          </div>
          <div class="flex flex-col mb-4 space-y-3 sm:flex-row sm:space-x-3 sm:mb-0">
            <div class="w-full sm:w-1/2">
              <label class="block mb-2 text-sm font-bold text-gray-700">Birthday</label>
              <VueDatePicker v-model="birthday" class="w-full px-3 py-2" format="yyyy-MM-dd HH:mm"
                no-hours-overlay />
              <p class="text-red-500" v-if="errors.birthday">{{ errors.birthday }}</p>
            </div>
            <div class="w-full sm:w-1/2">
              <label for="email" class="block mb-2 text-sm font-bold text-gray-700">Email</label>
              <input type="email" v-model="email" name="email"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              <p class="text-red-500" v-if="errors.email">{{ errors.email }}</p>
            </div>
          </div>

          <div class="flex flex-col mb-4 space-y-3 sm:flex-row sm:space-x-3 sm:mb-0">
            <div class="w-full sm:w-1/2">
              <label class="block mb-2 text-sm font-bold text-gray-700">Sex</label>
              <select v-model="sex" id="sex" name="sex"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="">Other</option>
              </select>
              <p class="text-red-500" v-if="errors.sex">{{ errors.sex }}</p>
            </div>

            <div class="w-full sm:w-1/2">
              <label class="block mb-2 text-sm font-bold text-gray-700">Role</label>
              <select v-model="role" id="role" name="role"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                <option value="">Select</option>
                <option value="parent">PARENT</option>
                <option value="teacher">TEACHER</option>
                <option value="admin">ADMIN</option>
              </select>
              <p class="text-red-500" v-if="errors.role">{{ errors.role }}</p>
            </div>
          </div>

          <!-- Student details -->
          <div class="flex flex-col mb-4 space-y-3 sm:flex-row sm:space-x-3 sm:mb-0">
            <div class="w-full sm:w-1/2">
              <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student First Name</label>
              <input type="text" v-model="student_first_name" name="student_first_name"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              <p class="text-red-500" v-if="errors.student_first_name">{{ errors.student_first_name }}</p>
            </div>
            <div class="w-full sm:w-1/2">
              <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Last Name</label>
              <input type="text" v-model="student_last_name" name="student_last_name"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              <p class="text-red-500" v-if="errors.student_last_name">{{ errors.student_last_name }}</p>
            </div>
          </div>

          <div class="flex flex-col mb-4 space-y-3 sm:flex-row sm:space-x-3 sm:mb-0">
            <div class="w-full sm:w-1/2">
              <label class="block mb-2 text-sm font-bold text-gray-700">Student Birthday</label>
              <VueDatePicker v-model="student_birthday" class="w-full px-3 py-2" format="yyyy-MM-dd HH:mm"
                no-hours-overlay />
              <p class="text-red-500" v-if="errors.student_birthday">{{ errors.student_birthday }}</p>
            </div>
            <div class="w-full sm:w-1/2">
              <label class="block mb-2 text-sm font-bold text-gray-700">Student Sex</label>
              <select v-model="student_sex" id="student_sex" name="student_sex"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="">Other</option>
              </select>
              <p class="text-red-500" v-if="errors.student_sex">{{ errors.student_sex }}</p>
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

const showModal = ref(true)
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
const errors = ref({})
const errorMsg = ref("Ensure all fields are filled")

const validationSchema = yup.object({
  email: yup.string().required('Email is required'),
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  sex: yup.string().required('Sex is required'),
  birthday: yup.string().required('Birthday is required'),
  student_first_name: yup.string().required('Student first name is required'),
  student_last_name: yup.string().required('Student last name is required'),
  student_birthday: yup.string().required('Student birthday is required'),
  student_sex: yup.string().required('Student sex is required')
});

const validate = async () => {
  try {
    await validationSchema.validate({
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      sex: sex.value,
      birthday: birthday.value,
      student_first_name: student_first_name.value,
      student_last_name: student_last_name.value,
      student_birthday: student_birthday.value,
      student_sex: student_sex.value
    }, { abortEarly: false });

    errors.value = {};
  } catch (validationErrors) {
    const formattedErrors = {};
    validationErrors.inner.forEach((error) => {
      formattedErrors[error.path] = error.message;
    });
    errors.value = formattedErrors;
  }
};

async function createParent() {
  await validate();
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
      }
    }
  };

  // Perform the API call and handle the response
  const response = await fetch('https://att-backend.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });

  const { data, errors } = await response.json();

  if (errors) {
    errorMsg.value = errors[0].message;
  } else {
    // Reset the form and close the modal
    email.value = '';
    first_name.value = '';
    last_name.value = '';
    role.value = '';
    sex.value = '';
    birthday.value = '';
    student_first_name.value = '';
    student_last_name.value = '';
    student_sex.value = '';
    student_birthday.value = '';
    errors.value = {};
    errorMsg.value = '';
    closeModal();
    // Refresh the parent table data by emitting an event to the parent component
   // emit('parentCreated');
  }
}

function closeModal() {
  showModal.value = false;
}

onMounted(() => {
  showModal.value = true;
});
</script>
