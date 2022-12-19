<template>
  <div id ="home">
    <div class="d-row align-items-center flex-column mb-3 content" style="width: 700px; ">
      <h1 style="font-weight:bold;margin-bottom: 0.5em;">라온은 IT통합보안·인증 선도기업</h1>
      <p class="lead" style="font-size: 0.8em;font-weight:lighter;">국내 최고의 화이트 해커 그룹을 보유하고 있는 보안 전문 기업이 어떤 기업인가요?<br/>대한민국의 IT통합보안과 인증을 선도하는 기업을 알고 있나요? <br/>위 두 질문에 답을 드리겠습니다.</p>
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
  background-color: #ff7f00 ;
  background-image: url("https://grepp-programmers.s3.amazonaws.com/production/company/logo/2814/RAON_color_%EC%A0%95%EB%B0%A9%ED%98%95.png");
  background-size: 60em;
  background-repeat:no-repeat;
  background-position: center;
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