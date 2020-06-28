<template lang="html">
  <section class="vantagens relative">
    <div class="container mx-auto h-full flex flex-col md:flex-row md:justify-center flex-wrap">
      <div class="w-full md:w-1/2 lg:w-1/3 h-full mt-4 md:mt-0">
        <div class="mx-4 h-20 bg-white shadow-lg border-t-4 border-mara px-4 flex items-center py-4 md:py-0">
          <img src="icons/since.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-md md:text-lg -mb-1">Experiência</h3>
            <p class="mt-1 leading-none text-sm md:text-base text-gray-600">Desde 2007 entregando qualidade</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 h-full mt-4 md:mt-0">
        <div class="mx-4 h-20 bg-white shadow-lg border-t-4 border-mara px-4 flex items-center py-4 md:py-0">
          <img src="icons/pagamento.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-md md:text-lg -mb-1">Pagamento seguro</h3>
            <p class="mt-1 leading-none text-sm md:text-base text-gray-600">Segurança e facilidade na hora de pagar</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 h-full mt-4 lg:mt-0">
        <div class="mx-4 h-20 bg-white shadow-lg border-t-4 border-mara px-4 flex items-center py-4 md:py-0">
          <img src="icons/entrega.svg" alt="">
          <div class="ml-4 cursor-default">
            <h3 class="text-astronaut text-md md:text-lg -mb-1">Entrega Facilitada</h3>
            <p class="mt-1 leading-none text-sm md:text-base text-gray-600">Entregamos para todo o Brasil via Correios</p>
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
    min-height: 75px;
    margin-top: calc(-75px / 2);
  }
</style>
