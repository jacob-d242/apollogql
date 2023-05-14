<template>
       
        <div class="w-full overflow-hidden bg-gray-200">
          <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
            <div class="px-6 w-full flex flex-wrap items-center justify-between">
              
              <div class="flex items-center lg:ml-auto ">
                <button 
                  @click="showModal = !showModal"
                  type="button" 
                    class="inline-block px-6 py-2.5 mr-2 bg-transparent text-green-700 font-bold text-xs  rounded hover:text-white hover:bg-green-700 focus:bg-gray-100 focus:outline-none " >
                  Login
                </button>
                <button type="button" class="inline-block px-6 py-2.5 bg-green-700 text-white font-bold text-xs   rounded shadow-md hover:bg-white hover:text-green-700 hover:shadow-lg focus:bg-green-700">
                  Sign up for free
                </button>
              </div>
              
            </div>
          </nav>
          
            <Login v-bind="showModal"/>
         
          <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/standard/city/078.jpg');
          height: 550px;">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.75);">
              <div class="flex justify-center items-center h-full">
                <div class="text-center text-white px-6 md:px-12">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span>for your business</span></h1>
                  <a class="inline-block px-7 py-3 mr-1.5 border-2 border-green-700 text-green-700 font-medium text-sm leading-snug uppercase rounded-full shadow-md  focus:ring-0 transition duration-150 ease-in-out" >Get started</a>
                  <a class="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-green-700 font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >Learn more</a>
                </div>
              </div>
            </div>
          </div>

          <div class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" style="height: 150px; transform: scale(2); transform-origin: top center; color: green;">
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
</template>

<script >
import { ref } from 'vue';
import Login from '../components/Login.vue';
const showModal = ref(false)
</script>
