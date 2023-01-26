<template>
  <AppLayout>
    <main>
      <h1 class="title">Employees</h1>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
  name: 'Employees',
  components: { AppLayout }
};
</script>

<style lang="scss" scoped>
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
  padding: $s-9 $s-13;
}
</style>
