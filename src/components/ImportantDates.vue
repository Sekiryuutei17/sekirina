<template>
  <div class="cont-dates">
    <div class="card">
        <h4>22 de Agosto del 2023</h4>
        <hr>
        <p>
            Hola amor, buenas noches!<br>
            Hoy es otro día importante para nosotros, siendo honestos, todos los dias son importantes para mi,
            pues la mujer más increible y perfecta del mundo sigue a mi lado, y ella me dice que será para siempre lo
            cual me hace muy feliz, pero a pesar de que amo todos los días junto a tí, hoy superamos otro mes,
            nunca olvidaré aquel 22 de diciembre, el cual de unos años para acá, se volvió un mes horrible, triste,
            amargado e incluso odiado para mí, pero ahora, todo cambio, llegaste a mi vida un triste Diciembre y lo
            estás convirtiendo en un año espectacular, que no sería nada sin ti a mi lado. Y a este paso, será 
            un Diciembre también en donde demos el tan esperado siguiente paso! <br>
            Amor, quiero agradecerte por seguir aquí, felicitarte por ser una novia que cada día es más
            impresionante y sobre todo, quiero recordarte que te amo como no tienes idea, que haré todo lo que 
            este a mi alcance y que toda la vida buscaré la forma de hacerte feliz 💟 <br>
            Gracias por llegar a cambiar mi vida Alejandra 💘💘💘💘💘💘💘💘💘💘 
        </p>
        <button class="btn" @click="generateHearts">TE AMO MUCHO</button>
    <div v-for="heart in hearts" :key="heart.left" class="heart"
         :style="{ left: heart.left, animationDuration: heart.animationDuration }">
        💝 
        </div>
    </div>
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
const hearts = ref([]);
const generateHearts = () => {
  hearts.value = Array.from({ length: 50 }).map(() => ({
    left: Math.random() * 100 + 'vw',
    animationDuration: Math.random() * 2 + 2 + 's',
  }));

  // Eliminar corazones después de 5 segundos
  setTimeout(() => {
    hearts.value = [];
  }, 5000);
}
const volverClicked = () => {
  // Llamar al método 'volver' del componente padre
  props.volver();
  window.scrollTo(0, 0);
};

const verGaleriaClicked = () => {
  // Llamar al método 'verGaleria' del componente padre
  props.verGaleria();
  window.scrollTo(0, 0);
};

const mensajeClicked = () => {
  // Llamar al método 'mensajeBonito' del componente padre
  props.mensajeBonito();
  window.scrollTo(0, 0);
};
</script>

<style scoped>
.cont-dates {
    margin: 1em auto;
    width: 90%;
}

.card {
    background-color: rgb(95, 4, 95);
    border-radius: 1em;
    color: white;
    font-size:16px;
    margin-top: 1em;
    padding: 2em 1em;
}

button{
    border: 2px solid #A31ACB;
    border-radius: 1em;
    color: rgb(95, 4, 95);
    display: block;
    font-size: 1.2em;
    font-weight: bolder;
    margin: 1em auto;
    padding: .5em;
    transition: all .75s;
    width: 30%;

}
button:hover{
    border: 2px solid white;
    color: white;
    background-color:purple;
}
.cont-btns button{
    width: 80%;
}
.heart {
    position: absolute;
    width: 50px;
    height: 50px;
    animation: fall linear infinite;
  }
  
  @keyframes fall {
    0% { top: -50px; }
    100% { top: 100vh; }
  }
</style>
