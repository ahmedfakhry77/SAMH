<template>
  <div class="relative">
    <button
      class="flex items-center justify-between  border active:border-black hover:border-black rounded-lg border-none w-full bg-transparent px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      @click.prevent="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <span class="mx-1 flex flex-col items-start font-semibold">
        <span v-show="currentOption.name || showHeader">
          {{ header }}
        </span>
        <span :class="[currentOption.name ? 'font-semibold' : ' font-light']">
          {{ currentOption.name ? currentOption.name : label }}
        </span>
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
        class="absolute left-0 top-14 mb-4 bg-cyan-800 rounded-lg shadow-lg overflow-hidden w-full z-40"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          :class="{ active: isSelected(option) }"
          class="px-8 py-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-cyan-800 text-sm flex justify-between items-center"
          @click.prevent="setOption(option)"
        >
          <div class="flex flex-col gap-3">
            <span class="font-bold">{{ $t(option.name) }}</span>
            <span> {{ option.discription ? option.discription : "" }}</span>
          </div>

          <span v-if="isSelected(option)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 48c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200-110.5 0-200-89.5-200-200 0-110.5 89.5-200 200-200m140.2 130.3l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L215.3 303.7l-59.8-60.3c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3 .1-17z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: [],
  },
  label: {
    type: String,
    default: "",
  },
  header: {
    type: String,
    default: "",
  },
  showHeader: {
    type: Boolean,
    default: false,
  },
});

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
</style>
