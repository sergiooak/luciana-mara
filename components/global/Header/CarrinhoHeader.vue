<template lang="html">
  <div class="wrapper relative z-0">
    <div class="carrinho flex items-center cursor-pointer" @click="$router.push('/carrinho')"
         v-if="typeof cart !== 'undefined'">
      <div class="valor-carrinho text-astronaut mr-4">
        {{ real(valorTotal) }}
      </div>
      <div class="sacola">
        0
      </div>
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
    },
    computed: {
      cart(){
        return this.$store.state.cart.items;
      },
      valorTotal(){
        let total = 0
        if (typeof this.cart !== 'undefined') {
          for (var item of this.cart) {
            total = parseFloat(parseFloat(total) + (parseFloat(item.product.price) * item.qtd )).toFixed(2);
          }
        }
        return total;
      }
    },
    methods: {
      real(valor){
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
      },
      resetCart(){
        this.$store.dispatch("cart/reset");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sacola{
    @apply w-8 flex items-center justify-center h-8 border-2 border-astronaut bg-white text-astronaut relative;

    &:before {
      content: "";
      top: -0.75rem;
      z-index: -1;
      transition: top .15s ease;
      @apply absolute w-4 h-6 border-2 border-astronaut rounded-t-full;
    }

    &:hover{
      &:before {
        top: -1rem;
      }
    }
  }
  // .carrinho{
  //   .itens-carrinho{
  //     min-width: 28px;
  //     height: 28px;
  //     padding: 0 7px;
  //     z-index: 999;
  //     @apply relative bg-white flex justify-center items-center border-2 border-astronaut text-center cursor-pointer text-astronaut;
  //     &:before {
  //       position: absolute;
  //       z-index: -9;
  //       top: -10px;
  //       content: "";
  //       width: 14px;
  //       height: 10px;
  //       transition: top ease .15s;
  //       border-radius: 10px 10px 0 0;
  //       @apply border-2 border-astronaut;
  //     }
  //   }
  //   &:hover{
  //     .itens-carrinho{
  //       &:before {
  //         height: 12px;
  //         top: -12px;
  //       }
  //     }
  //   }
  // }
</style>
