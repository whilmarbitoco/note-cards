<template>
  <div>
    <div class="colors">
      <input
        @click="getBackgroundColor($refs.color1Input)"
        type="radio"
        name="color"
        id="color1"
        ref="color1Input"
      />
      <label class="color1" for="color1" ref="color1Label"></label>

      <input
        @click="getBackgroundColor($refs.color2Input)"
        type="radio"
        name="color"
        id="color2"
        ref="color2Input"
      />
      <label class="color2" for="color2" ref="color2Label"></label>

      <input
        @click="getBackgroundColor($refs.color3Input)"
        type="radio"
        name="color"
        id="color3"
        ref="color3Input"
      />
      <label class="color3" for="color3" ref="color3Label"></label>

      <input
        @click="getBackgroundColor($refs.color4Input)"
        type="radio"
        name="color"
        id="color4"
        ref="color4Input"
      />
      <label class="color4" for="color4" ref="color4Label"></label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useColorStore } from "../store/colorStore";

const color = useColorStore();
const backgroundColor = ref(null);

const getBackgroundColor = (inputRef) => {
  const computedStyle = window.getComputedStyle(inputRef.nextElementSibling);
  backgroundColor.value = computedStyle.backgroundColor;
  color.addColor(backgroundColor.value);
};
</script>

<style scoped>
.colors {
  --color1: #78c1f3;
  --color2: #9be8d8;
  --color3: #ff8f8f;
  --color4: #ed9ed6;
}

input[type="radio"] {
  display: none;
}

label {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

label:hover {
  transform: scale(1.2);
}

input[type="radio"]:checked + label {
  transform: scale(1.2) !important;
  border: solid #000 2px;
}

.color1 {
  background-color: var(--color1);
}

.color2 {
  background-color: var(--color2);
}

.color3 {
  background-color: var(--color3);
}

.color4 {
  background-color: var(--color4);
}
</style>
