<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8 text-center" title="Nossas Politicas" />

    <main class="container mx-auto flex flex-col md:flex-row items-start flex-wrap mb-16">
      <div class="px-4 md:px-0 md:w-full text-center">
        Consulte nossa politicas
      </div>
      <div class="px-4 md:px-0 md:w-1/4 flex flex-col justify-center items-center md:pr-8">
        <ul>
          <li :class = "{active: tab == 'trocas'}" class="border-2 border-b-0 border-astronaut hover:bg-astronaut hover:text-white cursor-pointer px-4 py-2" @click="tab = 'trocas'">
            Trocas
          </li>
          <li :class = "{active: tab == 'pag'}" class="border-2 border-b-0 border-astronaut hover:bg-astronaut hover:text-white cursor-pointer px-4 py-2" @click="tab = 'pag'">
            Forma de pagamento
          </li>
          <li :class = "{active: tab == 'prazo'}" class="border-2 border-b-0 border-astronaut hover:bg-astronaut hover:text-white cursor-pointer px-4 py-2" @click="tab = 'prazo'">
            Prazo de Entrega
          </li>
          <li :class = "{active: tab == 'priv'}" class="border-2 border-b-0 border-astronaut hover:bg-astronaut hover:text-white cursor-pointer px-4 py-2" @click="tab = 'priv'">
            Privacidade e Segurança
          </li>
          <li :class = "{active: tab == 'inds'}" class="border-2 border-astronaut hover:bg-astronaut hover:text-white cursor-pointer px-4 py-2" @click="tab = 'inds'">
            Produto indisponível
          </li>
        </ul>
      </div>
      <div class="px-4 md:px-0 md:w-3/4">
      <section v-if="tab == 'trocas'">
        <HeadingSection class="mt-8 mb-16" title="Trocas" />
        Para garantir seus direitos, nossa política de trocas é inteiramente de acordo com o Código de Defesa do Consumidor.<br class="bbs_check_inside_view" />Para efetuar uma troca ou devolução você deverá comunicar primeiramente à nossa central de atendimento, através do telefone (34) 984079525 e e-mail: vendas@lucianamara.com.br que vai orientar sobre o procedimento de logística reversa através dos Correios. Produtos reenviados sem autorização prévia de nossa central serão devolvidos ao cliente.<br class="bbs_check_inside_view" />Clientes de Uberlândia e região poderão realizar trocas e devoluções com prévia autorização da Central de atendimento em nosso endereço físico:<br class="bbs_check_inside_view" />Rua Tapuirama, 510, Bairro Osvaldo Resende<br class="bbs_check_inside_view" />Uberlândia- MG CEP 38400-436<br class="bbs_check_inside_view" />O prazo de troca varia de acordo com a disponibilidade de estoque e prazo dos correios.<br class="bbs_check_inside_view" /><br class="bbs_check_inside_view" /><strong class="bbs_check_inside_view">TROCA DE PRODUTO COM DEFEITO</strong><br class="bbs_check_inside_view" />A ocorrência de produto com defeito deverá ser comunicada em até 10 (trinta) dias a contar do recebimento das peças, devendo obrigatoriamente ser respeitadas as seguintes condições:<br class="bbs_check_inside_view" />• Produto com defeito aparente deverá estar sem nenhuma intervenção que implique na depreciação da peça, acompanhados de nota fiscal (danfe) e etiquetas;<br class="bbs_check_inside_view" />• A mercadoria será avaliada e no prazo máximo de 30 dias será apresentado uma solução;<br class="bbs_check_inside_view" />Despesas de devolução e reenvio autorizadas, serão pagas pela Luciana Mara. Iremos encaminhar uma autorização de postagem por e-mail com validade de 5(cinco) dias para que você possa nos reenviar o produto através de uma agência própria dos correios. O produto deverá estar previamente embalado.<br class="bbs_check_inside_view" />A Luciana Mara não se responsabiliza pelo fornecimento da embalagem de retorno das peças.<br class="bbs_check_inside_view" /><br class="bbs_check_inside_view" /><strong class="bbs_check_inside_view">TROCA DE TAMANHO, COR OU MODELO</strong><br class="bbs_check_inside_view" />A intenção de troca deverá ser comunicada em até 7 dias corridos a contar a partir do recebimento da mercadoria, devendo o produto não apresentar sinais de uso, ajustes e ou lavagem e estar em perfeitas condições , e deverá conter a etiqueta.<br class="bbs_check_inside_view" />Para efetuar uma troca ou devolução você deverá comunicar primeiramente à nossa central de atendimento, através do telefone (34) 98407-9525 e e-mail: vendas@lucianamara.com.br que vai orientar sobre o procedimento de logística reversa através dos Correios.<br class="bbs_check_inside_view" /><br class="bbs_check_inside_view" /><strong class="bbs_check_inside_view">PRECAUÇÕES</strong><br class="bbs_check_inside_view" />Toda mercadoria devera ser conferida no ato da entrega<br class="bbs_check_inside_view" />Recuse produtos em embalagens abertas ou produtos avariados<br class="bbs_check_inside_view" />Entre em contato imediatamente com nossa central de atendimento. Através do telefone (34)3231-9696 ou e-mail vendas@lucianamara.com.br
      </section>



      <section v-if="tab == 'pag'">
        <HeadingSection class="mt-8 mb-16" title="Forma de pagamento" />
        Aceitamos os cartões de crédito das bandeiras: Visa, Mastercar, Elo, Aura, American Express e Hiper para pagamentos em até 6x, com prazo de aprovação de até 48 horas úteis.

<img src="https://www.lojaprincipessa.com.br/img/2016/03/categoria/936/como-pagar-principessa.jpg" alt="como pagar principessa" data-midia-id="936" />
<h2>Informações adicionais:</h2>
Para a sua comodidade e segurança, as informações inseridas em seu cadastro estão sujeitas a confirmação após qualquer compra realizada na Loja Luciana Mara. Caso haja qualquer divergência dos dados que possa acarretar o atraso da entrega do seu pedido, você será informado através do seu e-mail cadastrado.

O vencimento da(s) parcela(s) ocorre na mesma data de sua fatura.

Se sua compra não for autorizada pela administradora do cartão de crédito, você receberá um e-mail automático, e caso ainda tenha interesse em adquirir o(s) item(ns) do pedido, deverá entrar no site e efetuar a compra novamente.
<div class="imagem-etapa"></div>
<h2>Boleto Bancário (Somente à vista)</h2>
Após o fechamento do pedido, será gerado um boleto bancário. O prazo de entrega entrará em vigor após a aprovação do pagamento. O pagamento do boleto bancário poderá ser feito em QUALQUER AGÊNCIA, DE QUALQUER BANCO, ou pela internet através do Home Banking do seu Banco.
<div class="imagem-etapa"></div>
<h2>Informações adicionais:</h2>
Caso opte pelo pagamento por Boleto Bancário, a reserva do produto escolhido em seu pedido será feita após a aprovação do crédito, realizado pela instituição bancária. Esta confirmação depende exclusivamente do banco, podendo levar até 3 (três) dias.

A data de vencimento do boleto é sempre 1 (um) dia útil após o fechamento do pedido. Após esta data, o documento perde a validade e, caso ainda tenha interesse em adquirir o(s) item(ns) do pedido, deverá entrar no site e efetuar a compra novamente.
<div class="imagem-etapa"></div>
<h2>Informação adicional</h2>
Aconselhamos a não usar computadores públicos para efetuar esse tipo de transação. Por exemplo: Lan houses, cafés, universidades, etc...
      </section>



      <section v-if="tab == 'prazo'">
        <HeadingSection class="mt-8 mb-16" title="Prazo de Entrega" />
        O prazo de entrega varia de acordo com a cidade e o estado e o tipo de frete escolhido na hora da compra. Esse prazo começa a ser contar a partir da confirmação do pagamento pela instituição financeira. Será considerado o prazo de entrega somente dias úteis.

A entrega será feita conforme o prazo determinado pelos correios para o CEP da região.

PAC:
Os prazos podem variar de acordo com o CEP e Região. Para saber o prazo exato para sua residência, prossiga a compra até o carrinho de compras e na parte CALCULAR FRETE, preencha o país, estado e CEP, assim ele irá simular o prazo e valor do PAC.

Sedex:
Os prazos podem variar de acordo com o CEP e Região. Para saber o prazo exato para sua residência, prossiga a compra até o carrinho de compras e na parte CALCULAR FRETE, preencha o país, estado e CEP, assim ele irá simular o prazo e valor do Sedex.

Orientações sobre a Entrega e Contagem dos Prazos:

O prazo de entrega começa a contar após à confirmação do pagamento.
A contagem do prazo são em dias úteis;
Nossas entregas são realizadas de segunda a sexta feira horário comercial;
Será considerado o dia da aprovação do pagamento e não o momento da sua compra, iniciando a contagem no próximo dia útil seguinte.

As datas de entrega são estimadas, podendo haver pequenos atrasos devido à fatores externos, tais como chuvas em excesso e entrega em regiões de difícil acesso como comunidades e zonas rurais.
Serão realizadas até 3 tentativas de entregas, e caso nenhuma delas tenha sucesso a sua encomenda retornará para o remente.

      </section>


      <section v-if="tab == 'priv'">
        <HeadingSection class="mt-8 mb-16" title="Privacidade e Segurança" />
        Todas as transações de pagamentos são executadas com tecnologia de segurança.<br/>

        Todos os dados são criptografados e visa impedir que as informações sejam transmitidas ou acessadas por terceiros.<br/>

        Não guardamos qualquer informação do seu cartão. Todas as informações são fornecidas pelo cliente diretamente na plataforma da operadora de cartão.<br/>
      </section>


      <section v-if="tab == 'inds'">
        <HeadingSection class="mt-8 mb-16" title="Produto indisponível" />
        A Luciana Mara possui um estoque limitado dos produtos. A qualquer momento estes produtos podem se esgotar, para isso disponibilizamos o serviço de encomenda. Ao se cadastrar em algum item com este serviço, você receberá de forma automática um e-mail com orientações para solicitar as peças por encomenda.

Este e-mail é enviado a todos os clientes que se cadastraram, assim é possível que o produto se esgote novamente se a quantidade não for suficiente para atender a todos.


A Luciana Mara não garante a reposição no estoque de quaisquer peças.
      </section>
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Politicas',
  // asyncData({ params, $axios, payload }){
  //   if (payload) {
  //     return {politica: payload.politica}
  //   } else {
  //     return $axios.$get(`https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/pages?slug=politicas`)
  //       .then((res) => {
  //         return {politica: res[0]}
  //       })
  //   }
  // },
  components: {
    HeadingSection,
  },
  data: function (){
    return {
      tab: 'trocas'
    }
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
.active{
  @apply bg-astronaut text-white;
}
</style>
