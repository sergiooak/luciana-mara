<template lang="html">
  <div class="wrapper">
    <!-- Fix the bug whit localStorage -->
    <!-- <span @click="resetCart()">Reset</span> -->
    <div class="carrinho flex items-center cursor-pointer" @click="$router.push('/carrinho')"
         v-if="typeof cart !== 'undefined'">
      <div class="valor-carrinho text-astronaut mr-4">
        {{ real(valorTotal) }}
      </div>
      <div class="itens-carrinho flex justify-center items-center border-2 border-astronaut text-center text-astro cursor-pointer text-astronaut">
        {{ cart.length }}
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
