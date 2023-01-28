<template>
  <AppLayout>
    <main class="container">
      <div class="form-container">
        <h2 class="title">Create reservation</h2>
        <form class="form" @submit.prevent="create">
          <div class="element">
            <label for="room" class="label">Room</label>
            <select required id="room" name="room" class="select" v-model="room">
              <option v-for="room in rooms" :key="room.room_id" :value="room.room_id">{{ room.room_id }}</option>
            </select>
          </div>
          <div class="element">
            <label for="arrival" class="label">Arrival Date</label>
            <input required type="date" id="arrival" name="arrival" class="input" v-model="arrival"/>
          </div>
          <div class="element">
            <label for="departure" class="label">Departure Date</label>
            <input required type="date" id="departure" name="departure" class="input" v-model="departure"/>
          </div>
          <div class="error">
            {{ error }}
          </div>
          <button class="btn" type="submit">Create</button>
        </form>
      </div>
    </main>
  </AppLayout>
</template>

<script>
import App from '@/App.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { useDataStore } from '@/stores/data';
import { useConnectionStore } from '@/stores/connection';
import { mapState } from 'pinia';
const mysql = require('mysql2');

export default {
  name: 'CustomersDetailsReservation',
  components: { AppLayout, App },
  computed: {
    ...mapState(useConnectionStore, ['getCredentials']),
    ...mapState(useDataStore, {
      rooms: 'rooms',
      people: 'people',
      reservations: 'reservations',
      transactions: 'transactions',
    })
  },
  data() {
    return {
      room: '',
      arrival: '',
      departure: '',
      error: '',
    };
  },
  methods: {
    create() {
      this.error = '';
      if (new Date(this.arrival) > new Date(this.departure)) {
        this.error = 'Arrival date must be before departure date';
        return;
      }
      const days = (new Date(this.departure) - new Date(this.arrival)) / (1000 * 60 * 60 * 24);
      const connection = mysql.createConnection(this.getCredentials);
      connection.query(
        `INSERT INTO transaction (guest_id, employee_id) VALUES (${this.$route.params.id}, 1)`,
        (err, results, fields) => {
          if (err) {
            this.error = err.message;
          } else {
            console.log(results);
            connection.query(
              `INSERT INTO room_availability (
                               room_id, transaction_id, arrival_date, departure_date, days) VALUES (${this.room}, ${results.insertId}, '${this.arrival}', '${this.departure}', ${days})`,
              (err, results, fields) => {
                if (err) {
                  this.error = err.message;
                  console.log(err);
                } else {
                  this.$emit('data');
                  this.$router.push(`/app/customers/${this.$route.params.id}`);
                }
              }
            );
          }
        }
      )
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container {
  padding: $s-9 $s-13;
  background-color: $white;
  border-radius: $s-3;
  display: flex;
  flex-direction: column;
  gap: $s-5;
}
.form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: $s-9;
}
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
}
.element {
  display: flex;
  flex-direction: column;
  gap: $s-6;
}
.label {
  @include text('sm');
  color: $slate-800;
  font-weight: 700;
}
.input {
  padding: $s-5;
  background-color: $slate-50;
  border: 1px solid $slate-200;
  border-radius: $s-2;
}
.select {
  padding: $s-5;
  background-color: $slate-50;
  border: 1px solid $slate-200;
  border-radius: $s-2;
}
.btn {
  @include text('sm');
  padding: $s-6 $s-9;
  border-radius: $s-3;
  background-color: $slate-800;
  color: $white;
  font-weight: 700;
}
.error {
  width: 100%;
  color: $red-500;
}
</style>
