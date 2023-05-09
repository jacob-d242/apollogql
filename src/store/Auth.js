import { defineStore } from "pinia";

export const userAuthStore = defineStore({
    id: 'userAuthStore',
    state:() =>({
            user : null,
            isAuthenticated:false
    }),
    actions:{
        Login(user){
            this.user = user
            this.isAuthenticated = true
        },
        Logout(){
            this.user = null
            this.user = user 
            this.isAuthenticated = true
            localStorage.removeItem(token)
        }
    },
    getters(){

    }
})