<template>
    <h1 class="title">📷  NUESTROS RECUERDOS 📷   </h1>
    <div class="carousel">
      <div class="carousel-inner" :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image.src" :alt="image.title" @click="openFullscreen(index)" />
        </div>
      </div>
      <a class="carousel-control prev" @click="goToPreviousSlide">&#8249;</a>
      <a class="carousel-control next" @click="goToNextSlide">&#8250;</a>
      <div v-if="isFullscreen" class="fullscreen-overlay" @click="closeFullscreen">
        <img :src="images[currentIndex].src" :alt="images[currentIndex].title" />
      </div>
      <h5 class="title-img" >{{ images[currentIndex].title }}</h5>
      <div class="cont-btns">
        <button @click="volverClicked">VOLVER</button>
        <button @click="verGaleriaClicked">VER GALERÍA DE IArts</button>
        <button @click="mensajeClicked">MENSAJE BONITO DEL DÍA</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
const props = defineProps({
  volver: {
    type: Function,
    required: true
  },
  verGaleria: {
    type: Function,
    required: true
  },
  mensajeBonito: {
    type: Function,
    required: true
  }
});
  const currentIndex = ref(0);
  const isFullscreen = ref(false);
  const images = ref([
    { src: './img/donde_empezo.jpg', title: 'Yo solo quería ayudar a una chica que necesitaba ayuda' },
    { src: './img/primer_mensaje.jpg', title: 'Pero gracias a ella todo comenzó...' },
    { src: './img/edad_ririna.jpg', title: 'Cuando adiviné tu edad' },
    { src: './img/ririna_vs_seki_terraria.jpg', title: 'La venganza será mía' },
    { src: './img/minecraft_mundo_1.jpg', title: 'Nuestro primer mundo en Minecraft (sale mal)' },
    { src: './img/inicio_mundo_terraria.jpg', title: 'Nuestro primer mundo de terraria' },
    { src: './img/minecraft_mundo_especial.jpg', title: 'Me dió mucha ternura verte con los fuegos artificiales' },
    { src: './img/ririna_travesura.jpg', title: 'Pq me encierras?' },
    { src: './img/ririna_caballo.jpg', title: 'Pensé que ibamos a perder al caballo XD' },
    { src: './img/dame_piedra_moment.jpg', title: 'Momento dame piedra' }
  ]);
  
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
const volverClicked = () => {
  // Llamar al método 'volver' del componente padre
  props.volver();
};

const verGaleriaClicked = () => {
  // Llamar al método 'verGaleria' del componente padre
  props.verGaleria();
};

const mensajeClicked = () => {
  // Llamar al método 'mensajeBonito' del componente padre
  props.mensajeBonito();
};
</script>
  
  <style lang="scss" scoped>
  .title {
    color: white;
    text-align: center;
    width: 100%;
  }
  .title-img{
    color: white;
    margin: .5em auto;
    text-align: center;
    max-width:  90%;
    width: max-content;
  }
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    align-items: center; /* Añadido para centrar verticalmente */
    transition: transform 0.3s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    display: flex; /* Añadido para centrar horizontalmente */
    justify-content: center; /* Añadido para centrar horizontalmente */
  }
  
  .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .carousel-control.prev {
    left: 10px; /* Ajusta la posición a la izquierda */
  }
  
  .carousel-control.next {
    right: 10px; /* Ajusta la posición a la derecha */
  }
  
  .carousel-control:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .fullscreen-overlay img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
  </style>