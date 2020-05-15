<template lang="html">
  <section class="vantagens relative">
    <div class="container mx-auto h-full flex">
      <div class="w-1/3 h-full">
        <div class="mx-4 bg-white shadow-lg h-full border-t-4 border-mara px-4 flex items-center">
          <img src="icons/since.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-lg -mb-1">Experiência</h3>
            <p class="text-sm text-gray-600">Desde 2007 entregando qualidade</p>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full">
        <div class="mx-4 bg-white shadow-lg h-full border-t-4 border-mara px-4 flex items-center">
          <img src="icons/pagamento.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-lg -mb-1">Pagamento seguro</h3>
            <p class="text-sm text-gray-600">Segurança e facilidade na hora de pagar</p>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full">
        <div class="mx-4 bg-white shadow-lg h-full border-t-4 border-mara px-4 flex items-center">
          <img src="icons/entrega.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-lg -mb-1">Entrega Facilitada</h3>
            <p class="text-sm text-gray-600">Entregamos para todo o Brasil via Correios</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Vantagens'
  }
</script>

<style lang="css" scoped>
  .vantagens{
    z-index: +1;
    height: 75px;
    margin-top: calc(-75px / 2);
  }
</style>
