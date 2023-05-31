<template>
  <div class="modal">

    <div class="modal-content">
      <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="flex items-center">
          <img class="mx-auto w-20" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo" />
      </div>
      <h2>Logout Confirmation</h2>
      <p>Are you sure you want to logout?</p>
      <div class="modal-buttons">
        <button @click="cancelLogout" class="bg-green-700 text-white">Cancel</button>
        <button @click="confirmLogout" class="bg-red-600 text-white" :disabled="loading">
          <template v-if="loading">
            <span>Loading...</span>
          </template>
          <template v-else>
            <span>Logout</span>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import router from "../router";


const emit = defineEmits(['update', 'close'])
const cancelLogout = () => {
  emit("close")
};

const loading = ref(false);

const confirmLogout = async () => {
  try {
    loading.value = true;
    localStorage.removeItem('token');
    await logoutRequest();
    router.push("/");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const logoutRequest = async () => {
  // Simulating an asynchronous logout request
  await new Promise((resolve) => setTimeout(resolve, 2000));
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 1.5rem;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  background-color: #ccc;
  color: #333;
  border: none;
}

.logout-button {
  background-color: #e74c3c;
  color: white;
  border: none;
}
</style>
