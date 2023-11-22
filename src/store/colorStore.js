import { defineStore } from "pinia";

export const useColorStore = defineStore("color", {
  state: () => ({ color: "" }),
  actions: {
    addColor(color) {
      this.color = color;
    },
  },
});
