<template>
  <div class=" text-white font-bold text-4xl flex flex-col justify-center text py-4">
    {{ $t("welcomeHeader") }}
    <span class="text-2xl mt-4">
      {{ $t("welcomeLong1") }}
    </span>
    <span class="text-2xl">
      {{ $t("welcomeLong2") }}
    </span>
    <span class="text-2xl"> {{ $t("welcomeLong3") }} </span>
  </div>
</template>
<script setup>
</script>
<style scoped>
.text {
  text-shadow:
    1px 1px 0 #04db65,
    -1px -1px 0 #04db65,
    -1px -1px 0 #04db65,
    -1px -1px 0 #04db65,

}
</style>