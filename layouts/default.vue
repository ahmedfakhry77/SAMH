<template>
  <div class=" min-h-screen" id="app">
    <app-header></app-header>
    <slot />
  </div>
</template>
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
