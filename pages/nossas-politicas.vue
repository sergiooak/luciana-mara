<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Nossas Politicas" />
    <main class="container mx-auto flex flex-col items-center mb-16">
      <p class="w-10/12 text-center text-lg text-gray-800 mb-8">
        Com 20 anos de experiência no mercado de roupas finas, fazemos da Luciana Mara Estúdio de Costura uma empresa especializada em vestuário profissional e social. Trabalhamos com um conceito inovador na fabricação de peças executivas, sociais e uniformes, associando uma costura de alto padrão, matéria prima de qualidade e um fino acabamento. Nosso principal objetivo é confeccionar roupas confortáveis, resistentes e elegantes e que possa agregar valor à imagem.
      </p>
      <p class="w-8/12 text-center mb-4 text-lg mb-4">
        <strong class="text-xl font-bold text-mara">Missão:</strong>
        <br /> Confeccionar vestuário profissional e social associando uma costura de alto padrão e fino acabamento, agregando com isso valor a imagem do cliente.
      </p>
      <p class="w-8/12 text-center mb-4 text-lg mb-4">
        <strong class="text-xl font-bold text-mara">Visão:</strong>
        <br /> Ser reconhecida pelos seus clientes com a melhor empresa do ramo de vestuário profissional e social. Tendo como diferencial de mercado a pontualidade na entrega da mercadoria, a qualidade da matéria prima utilizada na confecção das roupas.
      <p class="w-8/12 text-center mb-4 text-lg mb-4">
        <strong class="text-xl font-bold text-mara">Valores:</strong>
        <br /> Ética; Segurança no trabalho; Valorização e respeito aos clientes e colaboradores; Comprometimento com a sustentabilidade; Excelência e eficiência
      </p>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Politicas',
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
