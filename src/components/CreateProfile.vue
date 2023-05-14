<template>
    <div>
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student School</label>
            <input type="text" v-model="school_name" name="student_fist_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div class="w-1/2">
            <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Class</label>
            <input type="text" v-model="school_class" name="student_last_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        <div class="flex flex-row mb-4 space-x-3">
          <div class="w-1/2">
            <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student Sunday Class</label>
            <input type="text" v-model="sunday_class" name="student_fist_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div class="w-1/2">
            <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Image</label>
            <input type="text" v-model="image" name="student_last_name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
const school_class = ref('')
const school_name = ref('')
const sunday_class = ref('')
const image = ref('')
</script>