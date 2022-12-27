<template>
  <nav class="navbar navbar-expand-lg header ">
<div class="container-fluid">

  <div class="d-flex ms-5" id="navbarSupportedContent">
    <ul class="navbar-nav me-5 mb-lg-0">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/" exact><a>Home</a></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/Portfolio" ><a>Portfolio</a></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/skill" ><a>Skill</a></router-link>
      </li>
      
    </ul>

  </div>
</div>
</nav>

</template>

<script setup />
<style scoped>

.header {
 position:fixed;
 left:0px;
 top:0px;
 z-index:6;
 width:100%;
 height: 2.5em;
 
}
</style>

