<template>
    <div class="cont-guide">
        <h2>GUIA DEL COLAB SEKIRINA</h2>
        <h4 @click="firstSteps = !firstSteps">==== PRIMEROS PASOS ====</h4>
        <div v-if="firstSteps">
            <p>En caso de que en algún punto olvides como se comienza te recuerdo:</p>
            <div class="cont-step"> <br>
                <div class="step">
                    <img class="img-h" src='../assets/tutorial/01.png' alt=""><br>
                    <span>Selecciona un entorno de ejecución con GPU</span>
                </div>
            </div>
        </div>
        <h4 @click="checkpoints = !checkpoints">==== CHECKPOINTS ====</h4>
        <div  v-if="checkpoints">
            <p>Recuerda que tenemos una gran variedad de checkpoints para los diversos paquetes de loras,
                algunos de estos loras solo funcionan bien conun paquete en especifico pero otros los puedes
                usar con cualquier checkpoint que te agraden, la lista de checkpoints con los loras donde se
                utiliza es la siguiente
            </p>
            <div class="checkpoints">
            <div class="checkpoint">
                <a href="https://civitai.com/models/4451?modelVersionId=5038">AbyssOrangeHardcore</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b7dad00b-cf2e-4a24-9fc8-100cc0cb4e00/width=1024/00369-cadf2c6654-2320689785.jpeg" alt=""><br>
                <span>
                    Hentai<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/23900/anylora-checkpoint">Anylora</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/17d33c16-9053-411b-8a32-a093a00ce160/width=1096/3978531179-1315543663-best%20quality,%20ultra%20high%20res,%201girl,%20sleeveless%20white%20button%20shirt,%20black%20skirt,%20black%20choker,%20cute,%20(Kpop%20idol),%20(aegyo%20sal_1),.jpeg" alt=""><br>
                <span>
                    Cualquier lora<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/54204/cartunafied">CartunaFied</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d53f5d5-0449-4aec-9267-b079e4109eb9/width=512/20230514181631-3758411162-!_Cartunafied_v3.jpeg" alt=""><br>
                <span>
                    Velma<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/36520/ghostmix">GhostMix</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f092679f-82f9-417f-88bc-a34a93d8d080/width=1536/01_HiresFix_stripped_0007.jpeg" alt=""><br>
                <span>
                    Cualquiera<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/2583/hassaku-hentai-model">Hassaku</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a1ab9423-4513-499c-8ee0-b895a82e844f/width=896/03959-2444108537-masterpiece,%20best%20quality,%201girl,%20room,%20blue%20eyes,%20looking%20at%20viewer,%20blue%20eyes,%20blonde%20hair,%20long%20hair,%20large%20breasts,%20arms%20beh.jpeg" alt=""><br>
                <span>
                    Modelo hentai<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/105104/live-anime-mix">LiveAnimeMix</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e2707578-70f4-4b87-b8b1-31ef8a5823ac/width=1536/08779-1117195332-(masterpiece,%20best%20quality_1.2),%201girl,%20solo,%20scenery,%20illustration,%20anime%20style,%20looking%20at%20viewer,%20depth%20of%20filed,%20cowboy%20shot.jpeg" alt=""><br>
                <span>
                    Modelo para mostrar estilo anime<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/11866/meinapastel">MeinaPastel</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e57aa616-9424-4565-a5f2-a5ac5e9cfbf2/width=2048/00055.jpeg" alt=""><br>
                <span>
                    Genshin Impact<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/14305?modelVersionId=16836">OrangeMix</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/239a67a2-90d2-4baf-ecec-7ca17481a800/width=1024/170201.jpeg" alt=""><br>
                <span>
                    D4DJ<br>
                    DDLC<br>
                    Kanokari<br>
                    Love is War<br>
                    Quintillizas<br>
                    Re Zero - Witches<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/101885/sudope">Sudope</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e02f8ecb-9f64-43f2-b546-1fbd86410791/width=896/00025-sudope_v1w40_2175699607.jpeg" alt=""><br>
                <span>
                    Cualquiera<br>
                </span>
            </div>
            <div class="checkpoint">
                <a href="https://civitai.com/models/9139/checkpointyesmix">YesMix</a> 
                <img class="img-ia" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/24e54469-ccdc-49ad-9f38-becd21edff23/width=1088/00004-20230613211647.jpeg" alt=""><br>
                <span>
                    Oshi no Ko<br>
                </span>
            </div>
            </div>
        </div>
        <h4 @click="loras = !loras">==== LORAS ====</h4>
        <div v-if="loras">
            HOLA
        </div>
        <h4 @click="trigger = !trigger">==== TRIGGER WORDS ====</h4>
        <div v-if="trigger">
            HOLA
        </div>
      <div class="cont-btns">
        <button @click="volverClicked">VOLVER</button>
        <button @click="verGaleriaClicked">VER GALERÍA DE IArts</button>
      </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const firstSteps = ref(false);
const checkpoints = ref(false);
const loras = ref(false);
const trigger = ref(false);
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
.cont-guide{
    background-color: purple;
    border-radius: 1em;
    color:white;
    margin: 1em auto;
    padding: 1em;
    width: 80%;
}
h4{
    padding: .5em;
    border-radius: .5em;
    background-color: #A31ACB;
}h4:hover{
    background-color: white;
    color:#A31ACB;
    cursor:pointer;
}
h2, h4{
    text-align: center;
    width: 90%;
}
.cont-step{
    display: flex;
    .step{
        width: 100%;
        .img-h{
            margin: 0 auto;
            width: 80%;
        }
    }
}
.checkpoints{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .checkpoint{
        margin-top: 1.5em;
        width: 20%;
        a{
            color: white;
            display: block;
            margin-bottom: .5em;
        }:hover{
            color: #cc69eb;
        }
        .img-ia{
            margin: 0 auto;
            width: 90%;
            height: 250px;
        }
    }
}
.cont-btns{
    display: flex;
    justify-content: space-between;
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
      width: 45%;
      
    }
    
    button:hover{
        cursor: pointer;
        border: 2px solid white;
        color: white;
        background-color:purple;
      }
  }
@media screen and (max-width:500px){

.checkpoints{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .checkpoint{
        width: 48%;
    }
}
    .cont-btns{
        display: block;
        button{
            margin: 1em auto;
            width: 90%;
        }
    }
}
</style>