<template>
  <div class="flex flex-wrap justify-center">

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div class="bg-blue-500 text-white rounded-lg p-4 h-full">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-2">Total Students</h2>
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">{{ props.totalStudents }}</p>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div class="bg-green-500 text-white rounded-lg p-4 h-full">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-2">Total Profiles</h2>
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">567</p>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div class="bg-yellow-500 text-white rounded-lg p-4 h-full">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-2">Total Parents</h2>
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">{{ props.totalParents }}</p>
      </div>
    </div>

  </div>
</template>


<script setup>
import { string } from 'yup';

  const props = defineProps({
    totalParents:{type:String,default:'0'},
    totalStudents:{type:string,default:'0'}
  })
</script>