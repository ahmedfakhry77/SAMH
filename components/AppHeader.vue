<template>
  <nav
    class="w-full container z-40 px-4 md:px-14 py-2 shadow-lg rounded-b-lg flex justify-between items-center fixed top-0 bg-cyan-800"
  >
    <div>
      <NuxtLink :to="localePath('/')">
        <!-- <img src="../assets/images/logo.png" class="h-14" alt="" /> -->
        <MyLogo />
      </NuxtLink>
    </div>
    <div>
      <language-switcher></language-switcher>
    </div>
  </nav>
</template>
<script setup>
const localePath = useLocalePath();
</script>
