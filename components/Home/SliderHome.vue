<template lang="html">
  <section class="slider overflow-hidden">
    <div class="container mx-auto flex">
      <div  @click="prevSlide()"
            class="flex-1 flex items-center justify-center mb-6 cursor-pointer opacity-25 hover:opacity-100 transition-opacity ease duration-150">
        <svg class="h-6 text-astronaut" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg>
      </div>
      <div class="w-9/12">
        <div class="slideSlot">
          <slide-y-down-transition>
            <div v-if="loading" class="h-full flex items-center justify-center pb-8">
              <Spinner />
            </div>
            <SliderSlide :content="currentSlider" v-if="mostraSlide" />
          </slide-y-down-transition>
        </div>
      </div>
      <div  @click="nextSlide()"
            class="flex-1 flex items-center justify-center mb-6 cursor-pointer opacity-25 hover:opacity-100 transition-opacity ease duration-150">
        <svg class="h-6 text-astronaut" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg>
      </div>
    </div>
  </section>
</template>

<script>
  import { SlideYDownTransition } from 'vue2-transitions'
  import SliderSlide from '~/components/Home/SliderSlide'
  import Spinner from '~/components/Spinner'

  export default {
    name: 'homeSlider',
    props: [
      'slides'
    ],
    components: {
      SlideYDownTransition,
      SliderSlide,
      Spinner
    },
    data() {
      return {
        loading: false,
        trocandoSlide: false,
        currentSlideIndex: 0,
      }
    },
    methods: {
      mudaSlide(x){
        let vm = this;
        this.trocandoSlide = true;
        setTimeout(function () {
          vm.currentSlideIndex = x;
        }, 150);
        setTimeout(function () {
          vm.trocandoSlide = false;
        }, 300);
      },
      prevSlide(){
        let max = this.slides.length - 1;
        let x = this.currentSlideIndex - 1 < 0 ? max : this.currentSlideIndex - 1;
        this.mudaSlide(x);
      },
      nextSlide(){
        let max = this.slides.length - 1;
        let x = this.currentSlideIndex + 1 > max ? 0 : this.currentSlideIndex + 1;
        this.mudaSlide(x);
      }
    },
    computed: {
      mostraSlide(){
        return this.loading || this.trocandoSlide ? false : true
      },
      currentSlider(){
        return this.slides[this.currentSlideIndex]
      }
    },
    mounted() {
    }
  }
</script>

<style lang="css" scoped>
  .slideSlot{
    height: 320px;
  }

  .slider{
    height: 320px;
    background-image: url('/slider-bg.svg');
    background-size: cover;
  }

  @media (max-width: 640px) {
    .slideSlot{
      height: 440px;
    }

    .slider{
      height: 440px;
    }
  }
</style>
