<template>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <slot name="header"></slot>
            <slot></slot>
            <div class="mt-5 sm:mt-6">
              <slot name="footer">
                <button @click="showModal = false" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                  Cancel
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showModal: this.value,
      };
    },
    watch: {
      value(newVal) {
        this.showModal = newVal;
      },
      showModal(newVal) {
        this.$emit('input', newVal);
      },
    },
  };
  </script>
  