// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
      user: any,
    }),
    actions: {
      setUser(user) {
        this.user = user;
      },
    },
  });
