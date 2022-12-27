<template>
  <div>
    <HeaderComponent />
    <div id="wrapper"> 
     <router-view />
    </div>
    <FooterComponentVue />
  </div>
</template>

<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import FooterComponentVue from './components/layout/FooterComponent.vue';
</script>

<style>
#wrapper{
  height: auto;
  min-height: 100%;
  padding-bottom: 0.6em;
}


</style>
