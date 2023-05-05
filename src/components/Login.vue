<template>
    <div class="modal  max-w-md rounded-lg bg-gray-200 m-5  flex items-center justify-center" >
        <div class="px-4 md:px-0 ">
            <div class="md:mx-6 ">
                <div class="text-center">
                    <img class="mx-auto w-28"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                    <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
                        We are The Qhala Team
                    </h4>
                </div>
                <form @submit.prevent ="handleLogin">
                    <p mb-4> Please Login below to proceed</p>
                    <div class="relative mb-2">
                            <label class="block text-sm font-medium leading-6 text-gray-900">Username
                            </label>
                            <input type="text"
                            
                            v-model="username"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                        </div>
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
                                Sign In
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
    const username = ref('')
    const password = ref('')
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token')
    async function handleLogin(){
         if (!username.value || !password.value) {
                console.log("Please enter your username and password");
                return;
            }
            const query =`
            query Query($account: UserAuth!) {
                authUser(account: $account) {
                    token
                    user {
                    username
                    }
                }
                }
            `
        const variables ={
            account:{
                username: username.value,
                password: password.value,
                //token : token
            }
        }
        try {
            
          const response =  await fetch("https://att-backend.herokuapp.com/",{
            method:"POST",
            headers: {
                'Content-type':'application/json',
                'Authorization':'Bearer' + localStorage.getItem(token)
            },
            credentials:'include',
            body: JSON.stringify({
                query,
                variables,

            })
        }) 
        const data = await response.json()
        console.log(data)
        if(data.errors){
            console.log(data.errors[0].message)
        } else{
            console.log(`welcome ${username}`)
        }
        } catch (error) {
        console.log(error)
        }
    }
</script>
