<template>
  <VDatePicker v-model="date" :locale="locale" dir="ltr">
    <template #default="{ togglePopover, inputValue }">
      <button
        class="flex items-center justify-between border active:border-black hover:border-black rounded-lg border-none w-full bg-transparent px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        @click.prevent="togglePopover"
      >
          {{ inputValue }}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out mx-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </template>
  </VDatePicker>
</template>
<script setup>
import { ref } from "vue";
const { locale } = useI18n();
const date = ref(new Date());
</script>
