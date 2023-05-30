<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="modal max-w-md rounded-lg bg-gray-200 m-5 sm:m-auto flex items-center justify-center">
      <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="px-4 md:px-0">
        <div class="md:mx-6 mt-5">
          <form @submit.prevent="handleLogin">
            <p class="mb-4">Please Login below to proceed</p>
            <div class="relative mb-2">
              <label class="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <input type="text" name="username" v-model="username"
                class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            <span class="text-red-500">{{ errors.username }}</span>
            <div class="relative mb-2">
              <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <input name="password" type="password" v-model="password"
                class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            <span class="text-red-500">{{ errors.password }}</span>
            
          </form>
          <div class="pb-1 pt-1 flex space-x-3  text-center">
            <button class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-red-700 text-white"
              type="button"    
              @click="closeLoginModal"
            >
              Close
            </button>
              <button class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white"
                type="submit" @click="handleLogin" :disabled="loading">
                <span v-if="loading" class="mr-2">
                  <svg class="animate-spin h-4 w-4 inline-block" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z">
                    </path>
                  </svg>
                </span>
                <span v-else>Sign In</span>
              </button>
            </div>
          <div class="sm:flex sm:justify-center sm:mb-4 sm:items-center">
            <p class="text-center mb-2 sm:mb-0">Forgot password?</p>
            <button class="text-green-700" @click="showModal = !showModal">Reset</button>
          </div>
          <div v-if="showModal" class="mb-4 justify-center items-center">
            <form class="flex flex-col space-2" @submit.prevent="handleReset">
              <input v-model="email"
              class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                type="text" />
              <button type="submit" class="mt-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from "vue";
import { defineProps } from "vue";
import { userAuthStore } from "../store/Auth";
import { useRouter } from "vue-router";
import * as yup from "yup";

const username = ref("");
const password = ref("");
const errors = ref({});
const showModal = ref(false);
const email = ref("");
const authStore = userAuthStore();
const router = useRouter();
const loading = ref(false)


const emit = defineEmits(['update', 'close'])
const closeLoginModal = () => {
  emit("close")
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

async function validate() {
  try {
    await validationSchema.validate(
      {
        username: username.value,
        password: password.value,
      },
      { abortEarly: false }
    );
    errors.value = {};
  } catch (validationErrors) {
    const formattedErrors = {};
    validationErrors.inner.forEach((error) => {
      formattedErrors[error.path] = error.message;
    });
    errors.value = formattedErrors;
  }
}

async function handleLogin() {
  loading.value = true
  await validate();

  const query = `
    query QueryLogin($authUserAccount2: UserAuth!) {
      authUser(account: $authUserAccount2) {
        user {
          username
          class
        }
        token
      }
    }
  `;
  const variables = {
    authUserAccount2: {
      username: username.value,
      password: password.value,
    },
  };

  try {
    const res = await fetch("https://att-backend.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    const user = data.data.authUser.user;
    const token = data.data.authUser.token;

    localStorage.setItem("token", token);
    authStore.Login(user);
    router.push("/dashboard");
  } catch (error) {
    loading.value = false
    console.error(error);
    errors.value = { username: "Incorrect username ", password: "Incorrect  password" };
  }
}

async function handleReset() {
  const query = `
    mutation Mutation($email: String!) {
      forgotPassword(email: $email)
    }
  `;
  const variables = {
    email: email.value,
  };

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

    const data = await res.json();
    console.log(data);
    email.value = "";
  } catch (error) {
    console.log(error);
  }
}

const props = defineProps({
  open: Boolean,
});
const emits = ["close"];
const isAuthenticated = toRef(authStore, 'isAuthenticated');
</script>
