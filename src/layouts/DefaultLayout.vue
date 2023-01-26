<template>
  <div class="layout">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout'
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
