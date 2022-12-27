<template>
  <div id ="home">
    <div class="d-row align-items-center flex-column mb-3 content" style="width: 700px; ">
      <h1 style="font-weight:bold;margin-bottom: 0.5em;"> 안녕하세요.</h1>
      <p class="lead" style="font-size: 0.8em;font-weight:lighter;">좋은 하루 보내세요.</p>
      <a href="/story"><button type="button" class="btn btn-light" style="">알아보기</button></a>
    </div>
    
  </div>
</template>


<script setup />

<style scoped>

.content {
  text-align :center;  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  
}
#home{
  height: 100vh;
  overflow: hidden;
  margin:0;
  
}
button{
  font-size:0.8em; 
  font-weight:bolder; 
  background-color: #ff7f00;
  color:white;
  width:8em;

}
button:hover {
  background-color: white;
  color:#ff7f00;
}

</style>