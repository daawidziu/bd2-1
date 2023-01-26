<template>
  <div class="background">
    <router-view @data="fetchData"/>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia';
import { useDataStore } from '@/stores/data';
import { useConnectionStore } from '@/stores/connection';

const mysql = require('mysql2');

export default {
  name: 'App',
  computed: {
    ...mapWritableState(useDataStore, {
      rooms: 'rooms',
      people: 'people',
      reservations: 'reservations'
    }),
    ...mapState(useConnectionStore, ['getCredentials'])
  },
  methods: {
    fetchData () {
      console.log('fetching data');
      const connection = mysql.createConnection(this.getCredentials);
      connection.query('SELECT * FROM room', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          this.rooms = results;
        }
      });
      connection.query('SELECT * FROM people', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          this.people = results;
        }
      });
      connection.query('SELECT * FROM room_availability', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          this.reservations = results;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  @include text();
  background-color: $slate-200;
}
</style>
