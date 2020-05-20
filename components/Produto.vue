<template lang="html">
  <div class="produtoWrapper">
    <nuxt-link :to="url(slug)" class="produto flex flex-col bg-white shadow-lg relative">
      <div>
        <figure>
          <img :src="thumbUrl(imagem)" alt="">
        </figure>
      </div>
      <div class="p-4 detalhes">
        <span class="categoria text-gray-900 text-sm">
          {{ categoria }}
        </span>
        <h4 class="text-xl text-astronaut -mt-1">
          {{ titulo }}
        </h4>
        <p class="preco text-lg text-mara">
          {{ preco }}
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
    'imagem',
    'slug'
  ],
  methods: {
    url(slug) {
      return `/uniforme/${slug}`
    },
    thumbUrl(id) {
      let transforms = 'c_thumb,g_face,w_288,h_400,y_0,z_0.25/c_scale,l_logos:overlay,o_07,w_0.5,fl_tiled'
      let extension = "png"
      return `https://res.cloudinary.com/luciana-mara/image/upload/${transforms}/${id}.${extension}`
    },
  }
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
</style>
