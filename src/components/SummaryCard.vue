<template>
<div class="flex flex-wrap">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
    <div class="bg-blue-500 text-white rounded-lg p-4">
      <h2 class="text-lg font-bold mb-2">Total Students</h2>
      <p class="text-xl font-bold">{{ props.totalStudents }}</p>
    </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
    <div class="bg-green-500 text-white rounded-lg p-4">
      <h2 class="text-lg font-bold mb-2">Total Profiles</h2>
      <p class="text-xl font-bold">567</p>
    </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
    <div class="bg-yellow-500 text-white rounded-lg p-4">
      <h2 class="text-lg font-bold mb-2">Total Parents</h2>
      <p class="text-xl font-bold">{{ props.totalParents }}</p>
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