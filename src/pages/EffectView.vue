<template>
  <div id ="effect_div">
      <div class='container'>
        <h2 class="fadeup" id="intro">반갑습니다.</h2>
        <div class='reveal'>
          <div class="image-wrap">
            <img src='../assets/emoji.jpg' >
          </div>
        </div>
      </div>
      <div class='container'>
        <h2 class="fadeup">떠오르는 front framework</h2>
        <div class='reveal'>
          <div class="image-wrap">
            <img src='../assets/logo.png' >
          </div>
        </div>
      </div>
      <div class='container'>
        <h2 class="fadeup">깔끔하고 간단한 코드작성</h2>
        <div class='reveal'>
          <div class="image-wrap">
            <img src='../assets/vuecode.png' >
          </div>
        </div>
      </div>
      <div class='container'>
        <h2 class="fadeup">make Site with Vue</h2>
        <div class='reveal'>
          <div class="image-wrap">
            <img src='../assets/vuesite.png'>
          </div>
        </div>
      </div>
      
  </div>
  
</template>
        
<script setup>
// import router from '@/router';


document.addEventListener("DOMContentLoaded", function () {
        // window.location.reload();
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.4
        };
      
        // IMAGE ANIMATION
      
        let revealCallback = (entries) => {
          entries.forEach((entry) => {
            let container = entry.target;
      
            if (entry.isIntersecting) {
              console.log(container);
              container.classList.add("animating");
              return;
            }
      
            if (entry.boundingClientRect.top > 0) {
              container.classList.remove("animating");
            }
          });
        };
      
        let revealObserver = new IntersectionObserver(revealCallback, options);
      
        document.querySelectorAll(".reveal").forEach((reveal) => {
          revealObserver.observe(reveal);
        });
      
        // TEXT ANIMATION
      
        let fadeupCallback = (entries) => {
          entries.forEach((entry) => {
            let container = entry.target;
            container.classList.add("not-fading-up");
      
            if (entry.isIntersecting) {
              container.classList.add("fading-up");
              return;
            }
      
            if (entry.boundingClientRect.top > 0) {
              container.classList.remove("fading-up");
            }
          });
        };
      
        let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
      
        document.querySelectorAll(".fadeup").forEach((fadeup) => {
          fadeupObserver.observe(fadeup);
        });
      });
      
      </script>
      
      
      <style scoped>
      /* 초기 설정 초기화 */
      div,body{
        margin:0;
        padding:0;
      }
      .container {
        display: grid;
        place-items: center;
        height: 100vh;
        max-width: 100%;
        position: relative;
        overflow: hidden;
      }
      
      
      .container:nth-child(1) {
        background: #ffc40008;
      }
      .container:nth-child(2) {
        background: #a8eb7c44;
      }
      .container:nth-child(3) {
        background: #e6d08975;
      }
      .container:nth-child(4) {
        background: #70dac2;
      }
      
      
      img {
        height: 100%;
        width: 25vw;
        max-width: 55vw;
        object-fit: contain;
        opacity: 60%;
      }
      
      h2 {
        font-family: Termina, sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        -webkit-text-stroke: 2px white;
        color: transparent;
        font-size: clamp(3rem, 10vw, 6rem);
        position: absolute;
        top: 25%;
        left: 5%;
        width: 90%;
        height: 50%;
        z-index: 99;
        display: grid;
        place-items: center;
      }
      
      body:not(.no-js) .image-wrap {
        transition: 1s ease-out;
        transition-delay: 0.2s;
        position: relative;
        width: auto;
        height: 80vh;
        overflow: hidden;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
        visibility: hidden;
      }
      
      body:not(.no-js) .image-wrap img {
        transform: scale(1.3);
        transition: 2s ease-out;
      }
      
      body:not(.no-js) .animating .image-wrap {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        visibility: visible;
        transform: skewY(0);
      }
      
      body:not(.no-js) .animating img {
        transform: scale(1);
        transition: 4s ease-out;
      }
      
      body:not(.no-js) .fadeup {
        opacity: 0;
        transition: 0.4s ease-out;
        transform: translateY(40px);
      }
      
      body:not(.no-js) .fading-up {
        opacity: 1;
        transition: 1s ease-out;
        transform: translateY(0px);
        transition-delay: 0.7s;
      }
      #intro{ 
          background: -webkit-linear-gradient(-70deg,#e23a3a97 40%,orange 60%,rgba(233, 242, 102, 0.859)90% );
          -webkit-background-clip: text;
          background-clip: text;    
          -webkit-text-fill-color: transparent;    
          font-weight: 900;
          font-size:150px;
          text-align: center;
          -webkit-text-stroke:0px;
      }
      </style>