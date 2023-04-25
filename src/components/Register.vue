<template>
    <div class=" max-w-md rounded-lg bg-gray-200 m-5  flex items-center">
        <div class="px-4 md:px-0 ">
            <div class="md:mx-6 ">
                <div class="text-center">
                    <img class="mx-auto w-28"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                    <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
                        We are The Qhala Team
                    </h4>
                </div>

                <form @submit.prevent="handleSubmit">
                    <p class="mb-4">Please create your  account</p>
                    <div class="relative mb-2">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Username
                        </label>
                        <input type="text"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                    </div>
                   <div class="flex flex-row mb-2 gap-1">
                    <div class="relative ">
                        <label class="block text-sm font-medium leading-6 text-gray-900">First Name
                        </label>
                        <input type="text"
                        v-model="first_name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                    </div>
                    <div class="relative ">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Last Name
                        </label>
                        <input type="text"
                        v-model="last_name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />
 
                    </div>
                   </div>
                    
                    <div class="relative mb-2">
                        <label class="text-black">Email
                        </label>
                        <input type="email"
                        v-model="email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400  sm:text-sm sm:leading-6" />

                    </div>
                    <div class="flex flex-row justify-around align-center mb-4 gap-2">
                        <div class="relative">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Class
                        </label>
                        <input type="number"
                        v-model="grade"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 f sm:text-sm sm:leading-6" />

                         </div>

                        <div class="relative">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Birthday
                        </label>
                        <input type="number"
                            v-model="birthday"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 f sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <!--Submit button-->
                    <div class="pb-1 pt-1 text-center">
                        <button
                            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-lg bg-green-700 text-white"
                            type="button">
                            Sign Up
                        </button>
                    </div>
                    <!--Register button-->
                    <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">Already have an account?</p>
                        <button type="button"
                            class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init data-te-ripple-color="light">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'

export default ({
    setup() {
        const username = ref('')
        const first_name = ref('')
        const last_name = ref ('')
        const email = ref('')
        const grade = ref('')
        const birthday = ref('')
    },
    handleSubmit(){

    }
})
</script>
