<script setup>
import { ref } from 'vue';
import Carousel from './components/Carousel.vue'
const viewHome = ref(true);
const showMemories = ref(false);
const showIArts = ref(false);
const showMessages = ref(false);
const showFullscreen = ref(false);
const currentIndex = ref(0);
const images = ref([
  {src:'./img/edad_ririna.jpg', title:'Cuando adiviné tu edad'},
  {src:'./img/minecraft_mundo_1.jpg', title:'Nuestro primer mundo en Minecraft (sale mal)'},
  {src:'./img/inicio_mundo_terraria.jpg', title:'Nuestro primer mundo de terraria'},
  {src:'./img/primer_dibujo.jpg', title:'El note it no duró mucho jaja'},
  {src:'./img/minecraft_mundo_especial.jpg', title:'Me dió mucha ternura verte con los fuegos artificiales'},
  {src:'./img/ririna_travesura.jpg', title:'Pq me encierras?'},
  {src:'./img/ririna_caballo.jpg', title:'Pensé que ibamos a perder al caballo XD'},
  {src:'./img/dame_piedra_moment.jpg', title:'Momento dame piedra'}
      ])
const memories = () => {
  showMemories.value = true;
  showIArts.value = false;
  showMessages.value = false;
  viewHome.value = false;
}
const volver = () => {
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = false;
  viewHome.value = true;
}
const verGaleria = () => {
  showMemories.value = false;
  showIArts.value = true;
  showMessages.value = false;
  viewHome.value = false;
}
const mensajeBonito = () => {
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = true;
  viewHome.value = false;
}
function goToPreviousSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
}

function goToNextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}

function openFullscreen(index) {
  currentIndex.value = index;
  isFullscreen.value = true;
}

function closeFullscreen() {
  isFullscreen.value = false;
}
</script>

<template>
  
  <div class="cont-home" v-if="viewHome">
    
    <div class="cont-1">
      <h1 class="title">💟 BIENVENIDA RIRINA!💟  </h1>
      <div class="container">
        <div class="card">
          <p>
            Como sabrás, una de mis mayores habilidades es esta, crear sitios web, entonces
            decidí hacer uno dedicado a: 
            <ol>
              <li>Mostrarte cuanto te amo 💕  </li>
              <li>Dejarte cosas bonitas 💮  </li>
              <li>Agregar un pequeño espacio para nosotros 💑 </li>
            </ol>
          </p>
        </div>
        <div class="card">
          <p>
            Me gustaría que tanto tu como yo, podamos tener recuerdos hermosos de cada paso que hemos
            dado en nuestra relación, con nuestras altas y bajas pero que siempre podemos sobrepasar
            pues somos una pareja increible, que siempre sabe como solucionarlo pues tanto tu cómo yo 
            tenemos unas ganas increíbles de poder estar juntos 💘 

          </p>
        </div>
        <div class="card">
          <p>
            Así que para demostarte mi amor, he creado este lugar especial donde guardaremos nuestros
            momentos que nos gustaría recordar, como lo estoy haciendo yo pues comenzaremos con los 
            recuerdos que me gustaría atesorar.
          </p>
        </div>
      </div>
    </div>
    <div class="cont-2">
      <div class="transition-div">
        <h2> ¡ESPERO QUE LO DISFRUTES!</h2>
      </div>
      <div class="cont-btns">
        <button @click="memories">VER GALERÍA DE RECUERDOS</button>
        <button>VER GALERÍA DE IArts</button>
        <button>MENSAJE BONITO DEL DÍA</button>
      </div>
    </div>
  </div>
  <Carousel v-if="showMemories" :volver="volver" :ver-galeria="verGaleria" :mensaje-bonito="mensajeBonito"/>
</template>

<style lang="scss" scoped>
.cont-1{  
  background-color: #A31ACB;
  padding-bottom: 4em;
  width: 100%;
  .title {
    color: white;
    text-align: center;
    width: 100%;
  }
  
  .container {
    width: 100%;
    position: relative;
  }
  
  .card {
    background-color: purple;
    color: white;
    margin: 1.5em 0;
    padding: 1em;
    font-size: .9em;
    width: 80%;
    opacity: 0;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
  
  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .card:nth-child(odd) {
    animation-name: slide-in-left;
  }
  
  .card:nth-child(even) {
    animation-name: slide-in-right;
    margin-left: auto;
  }
}
.cont-2{
  background-color: purple;
  .transition-div{
    background-color:white;
    border-radius: 1.5em;
    color: purple;
    margin: .5em auto;
    position: relative;
    padding: 1em;
    text-align: center;
    top: -75px;
    width: min-content;
    z-index: 50;
  }
  .cont-btns{
    display: block;
    margin-bottom: 0;
    padding-bottom: 2em;
    width: 100%;
    button{
      border: 2px solid #A31ACB;
      border-radius: 1em;
      color: purple;
      display: block;
      font-size: .8em;
      font-weight: bolder;
      margin: 1em auto;
      padding: 1em;
      transition: all .75s;
      width: 80%;
      
    }
    button:hover{
        border: 2px solid white;
        color: white;
        background-color:purple;
      }
  }
}
</style>
