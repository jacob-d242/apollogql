<template>
    <div class="gradient-form h-full w-full  bg-gray-400">
        <div class="container h-full p-10 ">
            <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div class="w-full">
                    <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                        <div class="g-0 lg:flex lg:flex-wrap">
                            <div class="px-4 md:px-0 lg:w-6/12">
                                <div class="md:mx-6 md:p-12">
                                    <div class="text-center">
                                        <img class="mx-auto w-48"
                                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                            alt="logo" />
                                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                                            We are The Qhala Team
                                        </h4>
                                    </div>

                                    <form>
                                        <p class="mb-4">Please login to your account</p>
                                        <!--Username input-->
                                        <div class="relative mb-4" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6]"/>
                                            <label 
                                                class="text-white">Username
                                            </label>
                                        </div>

                                        <!--Password input-->
                                        <div class="relative mb-4" data-te-input-wrapper-init>
                                            <input type="password"
                                            class="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6]  "   
                                            id="exampleFormControlInput11"  />
                                            <label  class="text-white ">Password</label>
                                        </div>

                                        <!--Submit button-->
                                        <div class="pb-1 pt-1 text-center">
                                            <button
                                                class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                type="button" data-te-ripple-init data-te-ripple-color="light" style="
                                                    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                                                ">
                                                Log in
                                            </button>

                                            <!--Forgot password link-->
                                            <a href="#!">Forgot password?</a>
                                        </div>

                                        <!--Register button-->
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2">Don't have an account?</p>
                                            <button type="button"
                                                class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Right column container with background and description-->
                            <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
                                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                                    <h4 class="mb-6 text-xl font-semibold">
                                        We are more than just a company
                                    </h4>
                                    <p class="text-sm">
                                        Managing your data is priotiry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
