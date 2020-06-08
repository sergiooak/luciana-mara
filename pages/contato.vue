<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Entre em contato" />
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 pb-16 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=pt-BR&q=Luciana%20Marques%20Uniformes%0A&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.5) opacity(0.6);"></iframe>
          <div class="bg-white relative flex flex-wrap py-6">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm uppercase">Endereço</h2>
              <p class="leading-relaxed">R. Tapuirama, 510 - Rezende Junqueira, Uberlândia - MG, 38400-436</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm uppercase">E-mail</h2>
              <a class="text-mara leading-relaxed">vendas@lucianamaraestudio.com.br</a>
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4 uppercase">WhatsApp</h2>
              <p class="leading-relaxed text-mara">(34) 99214-1968</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p4 shadow-lg px-8">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Entre em contato</h2>
          <p class="leading-relaxed mb-5 text-gray-600 leading-tight">Preencha os campos abaixo para nos enviar uma mensagem</p>
          <input class="bg-white border-2 border-gray-400 focus:outline-none focus:border-astronaut text-base px-4 py-2 mb-4" placeholder="Nome" type="text">
          <input class="bg-white border-2 border-gray-400 focus:outline-none focus:border-astronaut text-base px-4 py-2 mb-4" placeholder="E-mail" type="email">
          <input class="bg-white border-2 border-gray-400 focus:outline-none focus:border-astronaut text-base px-4 py-2 mb-4" placeholder="WhatsApp" type="email">
          <textarea class="bg-white border-2 border-gray-400 focus:outline-none h-32 focus:border-astronaut text-base px-4 py-2 mb-4 resize-none" placeholder="Mensagem"></textarea>
          <button class="text-white bg-astronaut py-2 px-4 uppercase focus:outline-none text-lg">Enviar</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Login',
  components: {
    HeadingSection,
  },
  methods: {
    login() {
      this.$store.dispatch("localStorage/login", {
        username: 'webmaster',
        password: 'YfX!O1zDSa5Y%6NS6v'
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
