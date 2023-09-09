<script setup>
import { ref } from 'vue';
import Carousel from './components/Carousel.vue'
import GuideIA from './components/GuideIA.vue'
import ImportantDates from './components/ImportantDates.vue';
const viewHome = ref(true);
const showImportantDates = ref(false);
const showMemories = ref(false);
const showIArts = ref(false);
const showMessages = ref(false);
const showFullscreen = ref(false);
const showGuide = ref(false);
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
  showImportantDates.value = false;
  showGuide.value = false;
  window.scrollTo(0, 0);
}
const volver = () => {
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = false;
  viewHome.value = true;
  showImportantDates.value = false;
  showGuide.value = false;
  window.scrollTo(0, 0);
}
const verGaleria = () => {
  showMemories.value = false;
  showIArts.value = true;
  showMessages.value = false;
  viewHome.value = false;
  showImportantDates.value = false;
  showGuide.value = false;
  window.scrollTo(0, 0);
}
const mensajeBonito = () => {
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = true;
  viewHome.value = false;
  showImportantDates.value = false;
  showGuide.value = false;
  window.scrollTo(0, 0);
}
const dates = () => {
  showImportantDates.value = true;
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = false;
  viewHome.value = false;
  showGuide.value = false;
  window.scrollTo(0, 0);
  
}
const iaGuide = () => {
  showGuide.value = true;
  showImportantDates.value = false;
  showMemories.value = false;
  showIArts.value = false;
  showMessages.value = false;
  viewHome.value = false;
  window.scrollTo(0, 0);

}
function goToPreviousSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
}

function goToNextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}

function openFullscreen(index) {
  currentIndex.value = index;
}

function closeFullscreen() {
}
</script>

<template>
  
  <div class="cont-home" v-if="viewHome">
    <h1 >BIENVENIDA RIRINA</h1>
    <div class="cont-cards">
      <div class="card">
        <img src="./img//logocolab.png" @click="iaGuide" alt="" srcset="">
        <p>TUTORIAL IA</p>
      </div>
      <div class="card">
        <img src="./img//IARTS.jpg" alt="" srcset="">
        <p>GALERIA IA</p>
      </div>
      <div class="card">
        <img src="./img/edad_ririna.jpg" @click="memories" alt="" srcset="">
        <p>GALERIA DE RECUERDOS</p>
      </div>
      <div class="card">
        <img src="./img/you.jpeg" @click="dates" alt="" srcset="">
        <p>MENSAJITOS IMPORTANTES</p>
      </div>
    </div>
    <div class="texto">
      Hola amor! Como te dije hay nueva estructura!<br>
      EStoy trabajando en complementarla bien, proximamente agregaré el tutorial de la IA.
    </div>
  </div>
  <Carousel v-if="showMemories" :volver="volver" :ver-galeria="verGaleria" :mensaje-bonito="dates"/>
  <ImportantDates v-if="showImportantDates" :volver="volver" :ver-galeria="verGaleria" :mensaje-bonito="dates" />
  <GuideIA v-if="showGuide"  :volver="volver" :ver-galeria="verGaleria" :mensaje-bonito="dates" /> 
</template>

<style lang="scss" scoped>
.cont-home{
  h1{
    color:white;
    text-align: center;
    width: 100%;
  }
  .cont-cards{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    .card{
      border-radius: 1em;
      width: 20%;
      margin: 1em auto;
      height: 15em;
      img{
        border-radius: 1em;
        width:100%;
        height: 90%;
        transition: .5s all ease-in-out;
      }
      img:hover{
          cursor:pointer;
          opacity: .5;
        }
      p{
        text-align: center;
        width: 100%;
      }
    }

  }
  .texto{
    margin: 4em auto;
    width: 90%;
  }
}
@media (max-width:650px){
    .card{
      margin: 1em auto !important;
      height: 15em !important;
      width:40% !important;
      p{
        text-align: center;
        width: 100%;
      }
    }
  }
@media (max-width:450px){
    .card{
      margin: 1em auto !important;
      height: 15em !important;
      width:70% !important;
      p{
        text-align: center;
        width: 100%;
      }
    }
  }
</style>
