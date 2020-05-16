<template lang="html">
  <div class="bg-white p-1 rounded-full shadow-lg text-astronaut">
    <i class="gg-spinner"></i>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="css" scoped>
  .gg-spinner {
      transform: scale(var(--ggs,1))
  }
  .gg-spinner,
  .gg-spinner::after,
  .gg-spinner::before {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 20px;
      height: 20px
  }
  .gg-spinner::after,
  .gg-spinner::before {
      content: "";
      position: absolute;
      border-radius: 100px
  }
  .gg-spinner::before {
      animation: spinner 1s
      cubic-bezier(.6,0,.4,1) infinite;
      border: 3px solid transparent;
      border-top-color: currentColor
  }
  .gg-spinner::after {
      border: 3px solid;
      opacity: .2
  }
  @keyframes spinner {
      0% { transform: rotate(0deg) }
      to { transform: rotate(359deg) }
  }
</style>
