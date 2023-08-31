<script setup>
import {  RouterView } from 'vue-router'
import Navigation from './components/ToDoNavigation.vue'


</script>

<template>
  <Navigation/>



  <RouterView/>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
  display:flex;
}

.container{
  margin: 0 auto;
  max-width:1100px;

  
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
