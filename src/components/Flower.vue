<template>
    <div class="cont-flowers">
        <div class="container">
            <div class="droplet" id="no1"></div>
            <div class="droplet" id="no2"></div>
            <div class="droplet" id="no3"></div>
            <div class="droplet" id="no4"></div>
            <div class="droplet" id="no5"></div>
            <div class="droplet" id="no6"></div>
            <div class="droplet" id="no7"></div>
            <div class="droplet" id="no8"></div>
            <div class="droplet" id="no9"></div>
            <div class="droplet" id="no10"></div>
        </div>
        <div class="container">
            <div class="droplet" id="no1"></div>
            <div class="droplet" id="no2"></div>
            <div class="droplet" id="no3"></div>
            <div class="droplet" id="no4"></div>
            <div class="droplet" id="no5"></div>
            <div class="droplet" id="no6"></div>
            <div class="droplet" id="no7"></div>
            <div class="droplet" id="no8"></div>
            <div class="droplet" id="no9"></div>
            <div class="droplet" id="no10"></div>
        </div>
        <div class="container">
            <div class="droplet" id="no1"></div>
            <div class="droplet" id="no2"></div>
            <div class="droplet" id="no3"></div>
            <div class="droplet" id="no4"></div>
            <div class="droplet" id="no5"></div>
            <div class="droplet" id="no6"></div>
            <div class="droplet" id="no7"></div>
            <div class="droplet" id="no8"></div>
            <div class="droplet" id="no9"></div>
            <div class="droplet" id="no10"></div>
        </div>
        <div class="container">
            <div class="droplet" id="no1"></div>
            <div class="droplet" id="no2"></div>
            <div class="droplet" id="no3"></div>
            <div class="droplet" id="no4"></div>
            <div class="droplet" id="no5"></div>
            <div class="droplet" id="no6"></div>
            <div class="droplet" id="no7"></div>
            <div class="droplet" id="no8"></div>
            <div class="droplet" id="no9"></div>
            <div class="droplet" id="no10"></div>
        </div>
        <div class="container">
            <div class="droplet" id="no1"></div>
            <div class="droplet" id="no2"></div>
            <div class="droplet" id="no3"></div>
            <div class="droplet" id="no4"></div>
            <div class="droplet" id="no5"></div>
            <div class="droplet" id="no6"></div>
            <div class="droplet" id="no7"></div>
            <div class="droplet" id="no8"></div>
            <div class="droplet" id="no9"></div>
            <div class="droplet" id="no10"></div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="css">
.cont-flowes{
    display:flex;
}

.container {
    height: 50px;
    width: 50px;
    position: relative;
    margin: 1.5em;
  }
  
  .droplet {
    border-radius: 5px 90%;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(255, 255, 255);
    height: 50px;
    width: 50px;
    margin: auto;
    position: absolute;
    /* top: 50%;
      right: 50%;*/
    transform-origin: left top;
    opacity: 0;
  }
  
  #no1 {
    background: yellow;
    animation: spin 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0s;
  }
  
  #no2 {
    background: rgb(250, 250, 178);
    animation: spin2 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.05s;
  }
  
  #no3 {
    background: yellow;
    animation: spin3 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
  }
  
  #no4 {
    background: rgb(250, 250, 178);
    animation: spin4 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.15s;
  }
  
  #no5 {
    background: yellow;
    animation: spin5 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
  }
  
  #no6 {
    background: rgb(250, 250, 178);
    animation: spin6 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.25s;
  }
  
  #no7 {
    background: yellow;
    animation: spin7 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.30s;
  }
  
  #no8 {
    background: rgb(250, 250, 178);
    animation: spin8 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.35s;
  }
  
  #no9 {
    background: yellow;
    animation: spin9 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.40s;
  }
  
  #no10 {
    background: rgb(250, 250, 178);
    animation: spin10 5s ease-out infinite;
    animation-fill-mode: forwards;
    animation-delay: 0.45s;
  }
  
  @keyframes spin {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(324deg) scale(1);
      transform: rotate(324deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(324deg) scale(1);
      transform: rotate(324deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin2 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(288deg) scale(1);
      transform: rotate(288deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(288deg) scale(1);
      transform: rotate(288deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin3 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(252deg) scale(1);
      transform: rotate(252deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(252deg) scale(1);
      transform: rotate(252deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin4 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(2160deg) scale(1);
      transform: rotate(216deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(216deg) scale(1);
      transform: rotate(216deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin5 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(180deg) scale(1);
      transform: rotate(180deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(180deg) scale(1);
      transform: rotate(180deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin6 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(144deg) scale(1);
      transform: rotate(144deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(144deg) scale(1);
      transform: rotate(144deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin7 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(108deg) scale(1);
      transform: rotate(108deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(108deg) scale(1);
      transform: rotate(108deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin8 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(72deg) scale(1);
      transform: rotate(72deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(72deg) scale(1);
      transform: rotate(72deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      ;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin9 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(36deg) scale(1);
      transform: rotate(36deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(36deg) scale(1);
      transform: rotate(36deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      ;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
  
  @keyframes spin10 {
    0% {
      opacity: 0;
      -webkit-transform: rotate(0deg) scale(0.01);
      transform: rotate(0deg) scale(0.01);
    }
    20% {
      opacity: 100;
      -webkit-transform: rotate(0deg) scale(1);
      transform: rotate(0deg) scale(1);
    }
    60% {
      opacity: 100;
      -webkit-transform: rotate(0deg) scale(1);
      transform: rotate(0deg) scale(1);
    }
    80% {
      opacity: 0;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
    100% {
      ;
      -webkit-transform: rotate(720deg) scale(0.01);
      transform: rotate(720deg) scale(0.01);
    }
  }
</style>