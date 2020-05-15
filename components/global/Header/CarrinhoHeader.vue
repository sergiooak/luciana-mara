<template lang="html">
  <div class="carrinho flex items-center cursor-pointer">
    <div class="valor-carrinho text-astronaut mr-4">
      R$ 000,00
    </div>
    <div class="itens-carrinho flex justify-center items-center border-2 border-astronaut text-center text-astro cursor-pointer text-astronaut">
      {{ items }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarrinhoHeader',
    data: function (){
      return {
        items: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carrinho{
    .itens-carrinho{
      min-width: 28px;
      height: 28px;
      padding: 0 7px;
      @apply relative bg-white;
      &:before {
        position: absolute;
        top: -10px;
        content: "";
        width: 14px;
        height: 20px;
        z-index: -1;
        transition: top ease .15s;
        @apply border-2 border-astronaut rounded-full;
      }
    }
    &:hover{
      .itens-carrinho{
        &:before {
          top: -12px;
        }
      }
    }
  }
</style>
