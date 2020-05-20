<template lang="html">
  <div class="container mx-auto flex justify-center relative mt-20 mb-10">
    <h2 class="font-be text-center border-2 border-astronaut inline-flex items-center justify-center px-8 uppercase text-astronaut">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="css" scoped>
  h2{
    height: 48px;
    min-width: 320px;
    font-size: 26px;
    line-height: 26px;
    padding-top: 3px;
    @apply bg-gray-200;
  }

  h2::before{
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    z-index: -1;
    width: calc(100% - 2rem);
    @apply border-t-2 border-astronaut;
  }
</style>
