<template>
<div class="modal  max-w-md rounded-lg bg-gray-200 m-5  flex items-center justify-center" v-show="value">
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
                        
                        v-bind="username"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                    </div>
                    <div class="relative mb-2">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Password
                        </label>
                        <input type="password"
                        v-bind="password"
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
import validations from '../utilis/validation'
    const username = ref('')
    const password = ref('')
    async function handleLogin(){
        try {
            const query =`
            query QueryLogin($authUserAccount2: UserAuth!) {
            authUser(account: $authUserAccount2) {
                token
                user {
                username
                first_name
                }
            }
            }
            `
        const variables ={
            account:{
                username: username.value,
                password: password.value
            }
        }
        const res = await fetch("https://att-backend.herokuapp.com/",{
            method:"POST",
            body: JSON.stringify({
                query,
                variables,

            })
        })
        if (res.status !== 200) {
        throw new Error(`HTTP error: ${res.status}`);
        }
        console.log("variables", variables)
        const data= await res.json()

        //localStorage.setItem("token",data.data.userAuth.token)

        console.log("token", localStorage.getItem("token"))
        
       // return data.data.userAuth.user

        if (data.errors){
            console.error('GraphQl Errrors:', data.errors)
        }
        console.log(data)
        } catch (error) {
            console.error("erros handling login",error)
        }
    }
</script>
