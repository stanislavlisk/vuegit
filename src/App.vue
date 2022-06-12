<style>



.W100 {
  width: 100%;
}

.test {
  align-items: start;
}



.button {
  border: none;
  color: white;
  text-align: center;
  padding: 5px;
}

.W400 {
  width: 400px;
}
.spectable {
  width: 600px;
  align-items: center;
  align-content: center;
}

.Alltoc {
  display: flex;
  justify-content: center;
}

.stretch {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.text1 {
  color: white;
  font-family: sans-serif;
}
.routerlink {
  text-decoration: none;
  background-color: rgb(130, 190, 185);
  padding: 5px;
  font-family: sans-serif;
  color: black;



}
.routerlink:hover {
  text-decoration: none;
  background-color: rgb(120,210,225);
  padding: 5px;
  font-family: sans-serif;
  color: white;


}




</style>


















<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header  class="Alltoc">
      <nav>
        <RouterLink to="/" class="routerlink">HOME</RouterLink>
        <RouterLink to="/about" class="routerlink">ABOUT</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
