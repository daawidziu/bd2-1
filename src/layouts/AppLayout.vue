<template>
  <div class="layout">
    <SideBar class="side" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'AppLayout',
  components: { SideBar }
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.side {
  width: 200px;
}
.content {
  flex: 1;
}
</style>
