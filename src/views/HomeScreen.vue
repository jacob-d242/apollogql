<template>
  <div class="w-full overflow-hidden bg-gray-200">
    <nav class="navbar fixed top-0 left-0 right-0 z-10 py-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <div class="text-center">
          <img class="mx-auto w-28" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo" />
        </div>
        </div>
        <div class="flex items-center">
          <button
            @click="openLoginModal"
            type="button"
            class="px-6 py-3 text-sm font-semibold text-white bg-green-700 rounded hover:bg-green-800 focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </nav>

    <div class="relative overflow-hidden">
      <div class="bg-cover bg-center h-screen" style="background-image: url('https://res.cloudinary.com/digem679d/image/upload/v1685392042/rp6fwqcughobql5x0s4v.jpg');"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="bg-black bg-opacity-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white">Empowering Education with Efficient Record Management</h1>
          <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 text-white">Welcome to our comprehensive School Record Management System. Streamline administrative tasks, manage student data, and improve communication between staff, parents, and students. Take control of your school's records and unlock new possibilities for effective education management.</p>
          <div class="flex justify-center">
            <button
              @click="openRegisterModal"
              class="inline-block px-8 rounded-full py-3 mr-2 text-lg font-bold text-green-700  bg-white hover:bg-green-700 hover:text-white transition-colors duration-300"
            >
              Get Started
            </button>
            <a
              href="#"
              class="inline-block px-7 py-3 border-2 border-white bg-transparent text-white font-medium text-lg leading-snug uppercase rounded-full hover:bg-green-700 hover:text-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" style="height: 150px; transform: scale(2); transform-origin: top center; color: green;">
      <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
      </svg>
    </div>

    <Login v-if="showLoginModal" @close="closeLoginModal" />
    <Register v-if="showRegisterModal" @close="closeRegisterModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const showLoginModal = ref(false);
const showRegisterModal = ref(false);

const openLoginModal = () => {
  showLoginModal.value = true;
  showRegisterModal.value = false;
};

const closeLoginModal = () => {
  showLoginModal.value = false;
};

const openRegisterModal = () => {
  showRegisterModal.value = true;
  showLoginModal.value = false;
};

const closeRegisterModal = () => {
  showRegisterModal.value = false;
};
</script>

<style scoped>
.navbar {
  background-color: transparent;
  box-shadow: none;
  position: absolute;
  width: 100%;
  z-index: 20;
}

.navbar h1 {
  font-size: 20px;
}

.navbar button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #38a169;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.bg-cover {
  height: 100vh;
}

.absolute {
  position: absolute;
}

.transform {
  transform: translate(-50%, -50%);
}

/* Responsive Text Styles */
.text-lg {
  font-size: 1.125rem; /* 18px */
}

.text-xl {
  font-size: 1.25rem; /* 20px */
}

.text-2xl {
  font-size: 1.5rem; /* 24px */
}

.text-3xl {
  font-size: 1.875rem; /* 30px */
}

.text-4xl {
  font-size: 2.25rem; /* 36px */
}

.text-5xl {
  font-size: 3rem; /* 48px */
}

.text-6xl {
  font-size: 3.75rem; /* 60px */
}

.text-7xl {
  font-size: 4.5rem; /* 72px */
}
</style>
