<template>
  <AppLayout>
    <main class="container">
      <div class="form-container">
        <h2 class="title">Add new customer</h2>
        <form class="form" @submit.prevent="add">
          <div class="element">
            <label for="name" class="label">Name</label>
            <input type="text" id="name" name="name" class="input" v-model="name"/>
          </div>
          <div class="element">
            <label for="surname" class="label">Surname</label>
            <input type="text" id="surname" name="surname" class="input" v-model="surname"/>
          </div>
          <div class="element">
            <label for="pesel" class="label">PESEL</label>
            <input type="text" id="pesel" name="pesel" class="input" v-model="pesel" pattern="^\d{11}"/>
          </div>
          <div class="element">
            <label for="phone" class="label">Phone</label>
            <input type="text" id="phone" name="phone" class="input" v-model="phone" pattern="^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"/>
          </div>
          <div class="error">
            {{ error }}
          </div>
          <button class="btn" type="submit">Create Client</button>
        </form>
      </div>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import { mapState } from 'pinia';
import { useConnectionStore } from '@/stores/connection';
const mysql = require('mysql2');

export default {
  name: 'CustomersAdd',
  components: { AppLayout },
  computed: {
    ...mapState(useConnectionStore, ['getCredentials']),
  },
  data() {
    return {
      name: '',
      surname: '',
      pesel: '',
      phone: '',
      error: '',
    };
  },
  methods: {
    add() {
      console.log('add');
      mysql.createConnection(this.getCredentials).query(
        `INSERT INTO people (name, surname, pesel, phone_number) VALUES ('${this.name}', '${this.surname}', '${this.pesel}', '${this.phone}');`,
        (err) => {
          if (err) {
            this.error = err.message;
          } else {
            this.$emit('data');
            this.$router.push('/app/customers/');
          }
        }
      )
    },
  },
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
  padding: $s-9;
  background-color: $white;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $s-9;
}
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
  margin-bottom: $s-9;
}
.label {
  @include text('sm');
  color: $slate-800;
  font-weight: bold;
}
.input {
  padding: $s-5;
  background-color: $slate-50;
  border: 1px solid $slate-200;
  border-radius: $s-2;

  &:invalid {
    border: 1px solid $red-500;
  }
}
.element {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn {
  width: 100%;
  margin-top: $s-8;
  padding: $s-4;
  background-color: $stone-700;
  color: $white;
  border-radius: $s-2;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $stone-800;
  }
}
.error {
  color: $red-500;
}
</style>
