<template>
  <div class=" min-h-screen" id="app" :dir="head.htmlAttrs.dir">
    <app-header></app-header>
    <div class=" pt-24 px-4 md:px-14">
      <slot />
    </div>
  </div>
</template>
<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>
<style>
#app {
    background-image: url('@/assets/images/backgraund2.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 100vw auto;
    min-height: 100vh;
  }
  @media (max-width: 1024px) {
    #app {
      height: 100vh; /* Set height to 100vh for mobile devices */
      background-size: auto 100vh ;
    }
  }
  
</style>
