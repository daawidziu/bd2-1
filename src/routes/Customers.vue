<template>
  <AppLayout>
    <main>
      <div class="head">
        <h2 class="title">Customers</h2>
        <router-link to="/app/customers/add" class="btn">+</router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>PESEL</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.people_id" @click="details(customer.people_id)">
            <td>{{ customer.people_id }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.surname }}</td>
            <td>{{ customer.PESEL }}</td>
            <td>{{ customer.phone_number }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import { mapWritableState } from 'pinia';
import { useDataStore } from '@/stores/data';

export default {
  name: 'Customers',
  components: { AppLayout },
  computed: {
    ...mapWritableState(useDataStore, {
      customers: 'people',
    }),
  },
  methods: {
    details(id) {
      this.$router.push(`/app/customers/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
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
.btn {
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
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid $slate-200;
  thead {
    tr {
      th {
        @include text('sm');
        color: $slate-500;
        font-weight: bold;
        padding: $s-9 $s-13;
        border-bottom: 1px solid $slate-200;
      }
    }
  }
  tbody {
    tr {
      cursor: pointer;
      &:nth-child(odd) {
        background-color: $slate-50;
      }
      &:nth-child(even) {
        background-color: $white;
      }

      &:hover {
        background-color: $slate-100;
      }

      td {
        @include text('sm');
        color: $slate-700;
        padding: $s-9 $s-13;
      }
    }
  }
}
</style>
