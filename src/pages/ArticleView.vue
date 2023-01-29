<template>
  <suspense>
    <template #default>
      <ArticleCopponent />
    </template>

    <template #fallback>
      
      <div class="spinner-box" >
          <div class="pulse-container">  
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
          </div>
      </div>

    </template>
  </suspense>
</template>

<script setup>
import ArticleCopponent from "../components/UtilityComponent/ArticleComponent.vue"
</script>

<style scoped>
.spinner-box{
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100vh;
}
@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
}
.pulse-bubble {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff7f00;  
  display:inline-block;
}

.pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
}
.pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
}

</style>
