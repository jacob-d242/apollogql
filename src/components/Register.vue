<template>
   <div class="fixed inset-0 flex items-center justify-center">
  <div class="modal">
    <div class="max-w-md rounded-lg bg-gray-200 m-5 flex items-center">
      <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="px-4 md:px-0">
        <div class="md:mx-6 mt-5">
          <div class="flex mb-4 items-center justify-between">
              <p class="mr-auto">Please create your account</p>
              <button class="ml-auto" @click="closeLoginModal">close</button>
            </div>
          <form @submit.prevent="handleSubmit">
            <div class="relative mb-2">
              <label class="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <input
                v-model="username"
                :class="{'border-red-500': errors.username}"
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span v-if="errors.username" class="block text-sm font-medium leading-6 text-red-500">
                {{ errors.username }}
              </span>
            </div>
            <div class="flex flex-row justify-between mb-2 gap-2">
              <div class="relative">
                <label class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                <input
                  v-model="first_name"
                  :class="{'border-red-500': errors.first_name}"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                <span v-if="errors.first_name" class="block text-sm font-medium leading-6 text-red-500">
                  {{ errors.first_name }}
                </span>
              </div>
              <div class="relative">
                <label class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                <input
                  v-model="last_name"
                  :class="{'border-red-500': errors.last_name}"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                <span v-if="errors.last_name" class="block text-sm font-medium leading-6 text-red-500">
                  {{ errors.last_name }}
                </span>
              </div>
            </div>

            <div class="relative mb-2">
              <label class="text-black">Email</label>
              <input
                type="email"
                v-model="email"
                :class="{'border-red-500': errors.email}"
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span v-if="errors.email" class="block text-sm font-medium leading-6 text-red-500">
                {{ errors.email }}
              </span>
            </div>
            <div class="flex flex-row justify-around align-center mb-4 gap-2">
              <div class="relative">
                <label class="block text-sm font-medium leading-6 text-gray-900">Class</label>
                <input
                  v-model="grade"
                  :class="{'border-red-500': errors.grade}"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                <span v-if="errors.grade" class="block text-sm font-medium leading-6 text-red-500">
                  {{ errors.grade }}
                </span>
              </div>

              <div class="relative">
                <label class="block text-sm font-medium leading-6 text-gray-900">Birthday</label>
                <VueDatePicker v-model="birthday" no-hours-overlay />
                <span v-if="errors.birthday" class="block text-sm font-medium leading-6 text-red-500">
                  {{ errors.birthday }}
                </span>
              </div>
            </div>
            <div class="relative mb-2">
              <label class="text-black">Password</label>
              <input
                type="password"
                v-model="password"
                :class="{'border-red-500': errors.password}"
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span v-if="errors.password" class="block text-sm font-sm leading-6 text-red-500">
                {{ errors.password }}
              </span>
            </div>
            <div class="pb-1 pt-1 text-center">
              <button
                class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white"
                type="submit"
                :disabled="loading"
              >
                <span v-if="loading" class="mr-2">
                  <svg class="animate-spin h-4 w-4 inline-block" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z">
                    </path>
                  </svg>
                </span>
                <span v-else>Register</span>
              </button>
            </div>
            <!--Register button-->
          </form>
          <div class="flex items-center justify-between pb-6">
            <p class="mb-0 mr-2">Already have an account?</p>
            <button
             @click ="openLoginModal"
              class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init data-te-ripple-color="light"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Login v-if="showLoginModal" @close="closeLoginModal" />
</div>
</template>
<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Login from './Login.vue';
import * as yup from 'yup'

components: { VueDatePicker }
const emit = defineEmits(['update', 'close'])
const closeLoginModal = () => {
  emit("close")
};
const username = ref('')
const first_name = ref('')
const last_name = ref('')
const email = ref('')
const grade = ref('')
const birthday = ref('')
const password = ref('')
const errors = ref({})
const date = ref(new Date(''))
const loading = ref(false)

const format = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}


const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  grade: yup.string().required('Grade is required'),
  birthday: yup.date().nullable().required('Birthday is required').typeError('Invalid date format'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

const validate = async () => {
  try {
    await validationSchema.validate({
      username: username.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      grade: grade.value,
      birthday: birthday.value,
      password: password.value,
    }, { abortEarly: false })

    errors.value = {}
  } catch (validationErrors) {
    const formattedErrors = {}
    validationErrors.inner.forEach((error) => {
      formattedErrors[error.path] = error.message
    })
    errors.value = formattedErrors
  }
}
const handleSubmit = async () => {
  try {
    loading.value = true;
    await validate();
    if (Object.keys(errors.value).length !== 0) {
      return;
    }

    const query = `
      mutation createMutation($account: UserInput) {
        createUser(account: $account) {
          username
          first_name
          last_name
        }
      }
    `;

    const variables = {
      account: {
        username: username.value,
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        class: grade.value,
        birthday: birthday.value,
        password: password.value,
      },
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

    const { data, errors: backendErrors } = await response.json();

    if (backendErrors) {
      loading.value = false;
      const formattedErrors = {};

      backendErrors.forEach((error) => {
        const fieldName = error.path[0];
        const errorMessage = error.message;

        if (fieldName === 'createUser' && errorMessage.includes('Unique constraint failed on the fields: (email)')) {
          formattedErrors.email = 'Email already exists';
        } else {
          formattedErrors[fieldName] = errorMessage;
        }
      });

      errors.value = formattedErrors;
    } else {
      errors.value = { message: 'User created successfully!' };
      // Reset form fields
      username.value = '';
      first_name.value = '';
      last_name.value = '';
      email.value = '';
      grade.value = '';
      birthday.value = '';
      password.value = '';

      console.log(data);
    }
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      errors.value = validationErrors;
    } else {
      errors.value = { message: 'An error occurred. Please try again.' };
    }
  } finally {
    loading.value = false;
  }
};

</script>
