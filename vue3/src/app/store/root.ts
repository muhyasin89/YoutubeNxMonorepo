import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRootStore = defineStore('root', () => {
  const isAuthenticate = ref(false)
   
  return { isAuthenticate }
})