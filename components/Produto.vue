<template lang="html">
  <div class="produtoWrapper">
    <nuxt-link :to="url(slug)" class="produto flex flex-col bg-white shadow-lg relative">
      <div>
        <figure>
          <img :src="thumb" alt="">
        </figure>
      </div>
      <div class="p-4 detalhes flex flex-col justify-between">
        <!-- <span class="categoria text-gray-900 text-sm">
          {{ categoria }}
        </span> -->
        <h4 class="md:text-xl text-astronaut -mt-1 leading-none mb-2">
          {{ titulo }}
        </h4>
        <p class="preco text-lg text-mara">
          {{ real(preco) }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Produto',
  props: [
    'titulo',
    'categoria',
    'preco',
    'images',
    'slug',
    'product'
  ],
  methods: {
    real(valor){
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    },
    url(slug) {
      return `/produto/${slug}`
    },
  },
  computed: {
    thumb(){
      let thumb = this.product.acf.miniatura;
      let def = this.product.images[0];

      let url = thumb ? thumb.url : def.src;
      let id = `woocommerce${url.split('woocommerce')[1].split('.')[0]}`;      

      let transforms = 'c_thumb,g_face,w_288,h_400,y_0,z_0.25/c_scale,l_logos:overlay,o_07,w_0.5,fl_tiled';
      let extension = "png";
      return `https://res.cloudinary.com/luciana-mara/image/upload/${transforms}/${id}.${extension}`
    }
  },
}
</script>

<style lang="scss" scoped>
  .produtoWrapper{
    position: relative;
    height: 400px;

    .produto{
      position: absolute;
      width: 100%;
      transition: all .3s ease;
      --detalhesHeigh: 110px;

      figure{
        height: 400px;
      }


      .detalhes{
        position: relative;
        height:  var(--detalhesHeigh);
        margin-top: calc(var(--detalhesHeigh) * -1);
        background-color: rgba(255, 255, 255, .8);
        backdrop-filter: blur(4px);
        transition: all .3s ease;
      }

      &:hover{
        margin-top: calc(var(--detalhesHeigh) / 2 * -1);
        z-index: +1;

        .detalhes{
          margin-top: 0;
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  @media (max-width: 640px) {
    .produtoWrapper{
      height: 316px;

      .produto{

        figure{
          height: 316px;
        }


        .detalhes{

        }

        &:hover{
          margin-top: 0;

          .detalhes{
            margin-top: calc(var(--detalhesHeigh) * -1);
          }
        }
      }
    }
  }
</style>
