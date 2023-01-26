<template>
  <AppLayout>
    Hello World!
    <button @click="$emit('data')">Fetch Data</button>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
  name: 'Home',
  components: { AppLayout }
};
</script>

<style scoped>

</style>
