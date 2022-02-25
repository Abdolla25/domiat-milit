<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.maxHeight = "50px";
    document.getElementById("nav-collapse").style.top = "75px";
  } else {
    document.getElementById("logo").style.maxHeight = "100px";
    document.getElementById("nav-collapse").style.top = "125px";
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap');
body {font-family: 'Cairo', sans-serif;padding-top: 8.5rem}
span{text-align: right}
a {color:#223369!important;text-decoration: none}
a:hover, a:active {color:#e51f25!important;text-decoration: none}
.btn-primary {color:#fff!important;background-color: #223369!important;border-color: #223369!important}
.btn-primary:hover, .btn-primary:focus , .btn-primary:active {color:#fff!important;background-color: #e51f25!important;border-color: #e51f25!important}
.btn-outline-primary {color: #223369!important;border-color: #223369!important}
.btn-outline-primary:hover {color:#fff!important;background-color: #e51f25!important;border-color: #e51f25!important}
#logo{transition: 0.4s;}
#nav-collapse{transition: 0.4s;}
</style>
