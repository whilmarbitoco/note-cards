<template>
  <div class="container">
    <div class="note">
      <div class="note-header">
        <section>
          <noteColors />
          <noteUser />
        </section>
        <section>
          <button>
            <i class="fa-solid fa-minus"></i>
          </button>
          <button>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </section>
      </div>
      <div class="note-body">
        <p class="my-note" contenteditable="true">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          porro iste perspiciatis pariatur saepe quaerat.
        </p>
      </div>
    </div>
    <div class="note-shadow" :style="{ backgroundColor: color.color }"></div>
  </div>
</template>

<script setup>
import noteColors from "./noteColors.vue";
import noteUser from "./noteUser.vue";
import { useColorStore } from "../store/colorStore";

const color = useColorStore();
</script>

<style scoped>
.container {
  position: relative;
}
.note,
.note-shadow {
  width: 450px;
  height: 250px;
  border: solid #000 2px;
  border-radius: 14px;
}

.note {
  z-index: 100;
  background-color: #fff;
}

.note-shadow {
  background-color: #78c1f3;;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: -100;
}
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: solid #000 2px;
}

section {
  display: flex;
  justify-content: space-around;
}

button {
  border: none;
  outline: none;
  background-color: #fff;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.note-body {
  margin: 15px;
}

.my-note {
  font-family: "Permanent Marker", cursive;
}
</style>
