<template>
  <div class="relative">
    <button
      class="flex items-center justify-between px-5 py-2 bg-[#f6f6f6] w-full rounded-lg border active:border-black hover:border-black"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <span class="text-sm mx-1 flex flex-col items-start font-semibold">
        <span> Select Language </span>
      </span>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 transform transition-transform duration-200 ease-in-out mx-1"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-500 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="absolute left-0 top-14 mb-4 bg-white rounded-lg shadow-lg overflow-hidden w-full z-40"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          :class="{ active: isSelected(option) }"
          class="p-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200 text-sm"
          @click="setOption(option)"
        >
          <div class="flex  items-center gap-2"> 
            <img :src="option.image" alt="">
            <span class="font-bold">{{ option.name }}</span>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import Arabic from "@/assets/images/saudi-arabia.png"
import English from "@/assets/images/united-kingdom.png"
const options = ref([
  {
    name: "Arabic",
    id: 1,
    image: Arabic,
  },
  {
    name: "English",
    id: 2,
    image: English,
  },
]);

const isOptionsExpanded = ref(false);
const currentOption = ref({ name: "", id: 0 });

const instance = getCurrentInstance();

const setOption = (option) => {
  currentOption.value = option;
  instance.emit("changeFilter", option);
};
const isSelected = (option) => {
  return currentOption.value && currentOption.value.id === option.id;
};
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
.active-indicator {
  display: block;
  width: 6px;
  height: 6px;
  background-color: #000; /* Adjust color as needed */
  border-radius: 50%;
}
.active {
  position: relative;
}
</style>
