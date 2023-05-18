<template>
    <div>
      <!-- Modal trigger button -->
      <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Modal</button>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
        <div class="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div class="modal-content py-4 px-6">
            <span class="close absolute top-0 right-0 cursor-pointer" @click="closeModal">&times;</span>
            <!-- Modal content -->
            <div>
              <div class="mb-4 space-x-3">
                <div class="w-1/2">
                  <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student School</label>
                  <input type="text" v-model="school_name" name="student_fist_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div class="w-1/2">
                  <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Class</label>
                  <input type="text" v-model="school_class" name="student_last_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div class="mb-4 space-x-3">
                <div class="w-1/2">
                  <label for="firstName" class="block mb-2 text-sm font-bold text-gray-700">Student Sunday Class</label>
                  <input type="text" v-model="sunday_class" name="student_fist_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div class="w-1/2">
                  <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">Student Image</label>
                  <input type="text" v-model="image" name="student_last_name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
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
const isModalOpen= ref('')
function openModal(){
    isModalOpen.value = true;
}
</script>

<style>
.modal-overlay {
  z-index: -1;
}

.modal-container {
  max-height: 90%;
}

.modal-content {
  max-height: calc(100vh - 120px);
}
</style>