<template lang="html">
  <div class="container mx-auto flex justify-center relative">
    <h2 class="font-be text-center border-2 border-astronaut inline-flex items-center justify-center px-4 md:px-8 uppercase text-astronaut">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
  h2{
    height: 48px;
    min-width: calc(100% - 30px);
    font-size: 28px;
    line-height: 28px;
    padding-top: 3px;
    background: #F7FAFC;
    @apply shadow-md;

    &::before{
      content: "";
      position: absolute;
      top: calc(50% - 2px);
      z-index: -1;
      width: 100%;
      @apply border-t-2 border-astronaut;
    }

    @media(min-width: theme('screens.md')) {
      min-width: 400px;

      &::before{
        width: calc(100% - 2rem);
      }
    }
  }
</style>
