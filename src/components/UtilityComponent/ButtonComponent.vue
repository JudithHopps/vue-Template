<template>
  <div>
    <br/>
    <button class="btn"><span>자세히 알아보기</span></button>
  </div>
</template>

<script setup>

</script>
<style scoped>
.btn {
  border: none;
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 200;
  font-size: 10px;
  background-color: #222;
  padding: 12px 20px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}

.btn span {
  position: relative; 
  z-index: 1;
}

.btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 600%;
  width: 140%;
  background: #ff7f00;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>