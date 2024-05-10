<template>
  <!-- Container for the button -->
  <div class="mt-8 flex justify-center text-lg text-black">
    <!-- Button element -->
    <button
      @click.prevent="SubmitForm"
      class="rounded-lg bg-transparent w-full px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 border border-[#86D5EA] hover:bg-cyan-800"
    >
      {{ $t("BookNow") }}
      <!-- Displays localized text for the button label -->
    </button>
  </div>
</template>

<script setup>
const SubmitForm = () => {
  console.log("Nice to See you "); // Logs a message when the button is clicked
};
</script>
