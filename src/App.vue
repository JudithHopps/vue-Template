<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponentVue />
  </div>
</template>

<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import FooterComponentVue from './components/layout/FooterComponent.vue';
</script>

<style>


</style>
