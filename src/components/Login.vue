<template>
    <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="modal max-w-md rounded-lg bg-gray-200 m-5 sm:m-auto flex items-center justify-center">
          <div class="px-4 md:px-0">
            <div class="md:mx-6">
              <div class="text-center">
                <img class="mx-auto w-28" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
                  We are The Qhala Team
                </h4>
              </div>
              <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
                <p class="text-red-500">{{ errorMsg }}</p>
              </div>
              <form @submit.prevent="handleLogin">
                <p class="mb-4">Please Login below to proceed</p>
                <div class="relative mb-2">
                  <label class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                  <input
                    type="text"
                    name="username"
                    v-model="username"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="relative mb-2">
                  <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <input
                    name="password"
                    type="password"
                    v-model="password"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="pb-1 pt-1 text-center">
                  <button class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
              <div class="sm:flex sm:justify-center sm:mb-4 sm:items-center">
                <p class="text-center mb-2 sm:mb-0">Forgot password?</p>
                <button class="text-green-700" @click="showModal = !showModal">Reset</button>
              </div>
              <div v-if="showModal" class="mb-4 justify-center items-center">
                <form class="flex flex-col space-2" @submit.prevent="handleReset">
                  <input
                    v-model="email"
                    class="block mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    type="text"
                  />
                  <button type="submit" class="bg-green-700 rounded-sm">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from "vue"
import router from "../router";
import * as yup from 'yup'
import { defineProps } from "vue";
import {userAuthStore} from '../store/Auth'
    // Login
    const username = ref('')
    const password = ref('')
    const errorMsg = ref("Invalid username or password.")
    const isModalOpen = ref(true)
    function  closeModal(){
        isModalOpen.value = false
    }
    function openModal(){
        isModalOpen.value = true
    }
   // const showInput= ref(false)
    const authStore = userAuthStore()


    const schema = yup.object({
        username: yup.string().required(),
        password: yup.string().required().min(6)
    })


    async function handleLogin(){
        await  schema.validate({
            username : username.value,
            password: password.value
        })

            const query =`
                query QueryLogin($authUserAccount2: UserAuth!) {
                    authUser(account: $authUserAccount2) {
                        user {
                        username
                        class
                        }
                        token
                    }
                }
            `
        const variables ={
            authUserAccount2:{
                username: username.value,
                password: password.value,  
            }
        }           
        await fetch("https://att-backend.herokuapp.com/",{
            method:"POST",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                query,
                variables,

            })
        }).then(async (res) => {
            if (!res.ok) {throw new Error(`HTTP error ${res.status}`)};
                const data = await res.json()
                const user = data.data.authUser.user
                const token = data.data.authUser.token
                localStorage.setItem('token',token)
               // authStore.Login(user)
                errorMsg.value = '';
//console.log(user)
                router.push("/dashboard")
        }).catch(error => {
            errorMsg.value = error.message;
            console.error(error)
        })
        }
        // send the reset password email
        const email = ref('')
        async function handleReset(){
            const query =`
            mutation Mutation($email: String!) {
                forgotPassword(email: $email)
            }
            `
            const variables ={
                    email: email.value
            }
            try {
                const res = await fetch ("https://att-backend.herokuapp.com/",{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        query,
                        variables
                    })
                })
                const data = await res.json()
                console.log(data)
                email.value = ''
            } catch (error) {
                console.log(error)
            }
        }
    const props = defineProps ({
    open: Boolean
    })

</script>
