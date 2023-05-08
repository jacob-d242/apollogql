<template>
    <div  class="fixed z-10 inset-0 overflow-y-auto">
   <div class="flex  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   <div  class="modal  max-w-md rounded-lg bg-gray-200 m-5  flex items-center justify-center" >
       <div class="px-4 md:px-0 ">
           <div class="md:mx-6 ">
               <div class="text-center">
                   <img class="mx-auto w-28"
                       src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                   <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
                       We are The Qhala Team
                   </h4>
               </div>
               <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
                   <p class="text-red-500">{{ errorMsg }}</p>
               </div>
               <form @submit.prevent ="handleRest">
                   <p mb-4> Enter New password below to proceed</p>
                       <div class="relative mb-2">
                           <label class="block text-sm font-medium leading-6 text-gray-900">Password
                           </label>
                           <input type="password"
                                v-model="password"
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                       </div>
                       <div class="pb-1 pt-1 text-center">
                           <button
                               class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white"
                               type="submit">
                               Reset
                           </button>
                       </div>
               </form>
           </div>
       </div>
   </div>
   </div>
   </div>
</template>

<script setup>
import {ref} from 'vue'

const password = ref('')
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const token = params.get("token");

    async function handleRest (){
        const query =`
        mutation Mutation($resetPasswordId: Int!, $token: String!, $password: String!) {
            resetPassword(id: $resetPasswordId, token: $token, password: $password)
        }
        `
        const variables ={
            resetPasswordId:parseInt(id),
            token : token,
            password : password.value
        }
        try {
            const res = await fetch("https://att-backend.herokuapp.com/",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    query,
                    variables
                }),
            });
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    // if (id && token) {
    //   handleActivate();
    // } else {
    //   console.error("id and token are required");
    // }
</script>