<template>
     <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 px-6">
    </div>
    <button @click="closeModal">Close</button>
    </div>
    </div>
         
</template>

<script setup>
import {ref} from 'vue'
const isModalOpen = ref(true)
function  closeModal(){
    isModalOpen.value = false
}
function openModal(){
    isModalOpen.value = true
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