<template>
  <AppLayout>
    <main class="container">
      <section class="head">
        <h2 class="title">{{ person.name }} {{ person.surname }}</h2>
        <div class="controls">
          <button @click="remove" class="remove">Remove</button>
          <router-link :to="`/app/customers/${$route.params.id}/edit`" class="edit">Edit</router-link>
        </div>
      </section>
      <section class="personal">
        <span class="section-header">Personal data</span>
        <div class="personal-item">
          <span class="label">PESEL</span>
          <span class="value">{{ person.PESEL }}</span>
        </div>
        <div class="personal-item">
          <span class="label">Phone</span>
          <span class="value">{{ person.phone_number }}</span>
        </div>
      </section>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import { mapState } from 'pinia';
import { useDataStore } from '@/stores/data';

export default {
  name: 'CustomersDetails',
  components: { AppLayout },
  computed: {
    ...mapState(useDataStore, {
      customers: 'people'
    }),
    person () {
      console.log(this.$route.params.id);
      return this.customers.find((customer) => customer.people_id == this.$route.params.id);
    }
  },
  methods: {
    remove () {
      console.log('remove');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: $s-9 $s-13;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $s-9 $s-13;
}
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
}
.edit {
  @include text('sm');
  padding: $s-6 $s-9;
  border-radius: $s-6;
  background-color: $slate-800;
  color: $white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $slate-700;
  }
}
.remove {
  @include text('sm');
  padding: $s-6 $s-9;
  border-radius: $s-6;
  border: 1px solid $slate-800;
  color: $slate-800;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $slate-300;
  }
}
.controls {
  display: flex;
  gap: $s-5;
}
.personal {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $s-5;
  padding: $s-9;
  border-radius: $s-6;
  background-color: $white;
}
.label {
  @include text('sm');
  color: $slate-800;
  font-weight: bold;
}
.value {
  @include text('sm');
  color: $slate-800;
}
.personal-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: $s-4;
}
.section-header {
  color: $slate-900;
  font-weight: bold;
}
</style>
