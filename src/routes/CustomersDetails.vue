<template>
  <AppLayout>
    <main class="container">
      <section class="head">
        <h2 class="title">{{ person.name }} {{ person.surname }}</h2>
        <div class="controls">
          <button @click="remove" class="edit">Remove</button>
        </div>
      </section>
      <section class="section">
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
      <section class="section">
        <div class="actions">
          <span class="section-header">Reservations</span>
          <router-link :to="`/app/customers/${$route.params.id}/reservation`" class="add">+</router-link>
        </div>
         <ul v-if="ownedTransactions.length !== 0" class="list">
          <li v-for="reservation in ownedReservations" :key="reservation.availability_id" class="item">
            <div class="personal-item">
              <span class="label">Room</span>
              <span class="value">{{ reservation.room_id }}</span>
            </div>
            <div class="personal-item">
              <span class="label">Arrival Date</span>
              <span class="value">{{ new Date(reservation.arrival_date).toLocaleDateString() }}</span>
            </div>
            <div class="personal-item">
              <span class="label">Departure Date</span>
              <span class="value">{{ new Date(reservation.departure_date).toLocaleDateString() }}</span>
            </div>
          </li>
        </ul>
        <span v-else class="empty">
          No reservations
        </span>
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
      customers: 'people',
      reservations: 'reservations',
      transactions: 'transactions'
    }),
    person() {
      return this.customers.find((customer) => customer.people_id == this.$route.params.id);
    },
    ownedTransactions() {
      return this.transactions.filter((transactions) => transactions.guest_id == this.$route.params.id);
    },
    ownedReservations() {
      const ids = this.ownedTransactions.map((transaction) => transaction.transaction_id);
      return this.reservations.filter((reservation) => ids.includes(reservation.transaction_id));
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
  gap: $s-9;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  gap: $s-5;
}

.section {
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

.empty {
  @include text('sm');
  color: $slate-500;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $s-5;
}

.add {
  @include text('sm');
  padding: $s-4 $s-7;
  border-radius: $s-6;
  background-color: $slate-800;
  color: $white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $slate-700;
  }
}
.list {
  display: flex;
  flex-direction: column;
  gap: $s-5;
}
.item {
  @include text('sm');
  color: $slate-800;
  padding: $s-6 $s-9;
  border-radius: $s-6;
  background-color: $slate-100;
}
</style>
