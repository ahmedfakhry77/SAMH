<template>
  <div class="mt-8 flex justify-center text-lg text-black">
    <button
      @click.prevent="SubmitForm"
      class="rounded-lg bg-transparent w-full px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 border border-[#86D5EA] hover:bg-cyan-800"
    >
      {{ $t("BookNow") }}
    </button>
  </div>
</template>
<script setup>
const SubmitForm = ()=> {
    console.log("Nice to See you ");
}
</script>