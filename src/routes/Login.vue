<template>
  <DefaultLayout>
    <Connect />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Connect from '@/components/Connect.vue';

export default {
  name: 'Login',
  components: { Connect, DefaultLayout }
};
</script>

<style scoped>

</style>
