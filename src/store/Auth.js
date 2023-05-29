import { defineStore } from "pinia";

export const userAuthStore = defineStore({
  id: 'userAuthStore',
  state: () => ({
    user: null,
    loggedIn: false
  }),
  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.loggedIn,
    isLoggedIn: (state) => state.user !== null && state.loggedIn
  },
  actions: {
    Login(user) {
      this.user = user;
      this.loggedIn = true;
    },
    Logout() {
      this.user = null;
      this.loggedIn = false;
      localStorage.removeItem('token');
    }
  },
});

