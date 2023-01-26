<template>
  <section class="container">
    <h1 class="title">Connect to database</h1>
    <form @submit.prevent="connect" class="form">
      <div class="form-element">
        <label for="host" class="label">Host</label>
        <input type="text" id="host" v-model="hostname" required class="input">
      </div>
      <div class="form-element">
        <label for="port" class="label">Port</label>
        <input type="number" id="port" v-model="port" required class="input">
      </div>
      <div class="form-element">
        <label for="database" class="label">Database</label>
        <input type="text" id="database" v-model="db" required class="input">
      </div>
      <div class="form-element">
        <label for="user" class="label">User</label>
        <input type="text" id="user" v-model="username" required class="input">
      </div>
      <div class="form-element">
        <label for="password" class="label">Password</label>
        <input type="password" id="password" v-model="password" required class="input">
      </div>
      <Transition>
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </Transition>
      <button type="submit" class="btn">Connect</button>
    </form>
  </section>
</template>

<script>
import { mapState, mapWritableState } from 'pinia';
import { useConnectionStore } from '@/stores/connection';
const mysql = require('mysql2');

export default {
  name: "Connect",
  data() {
    return {
      error: '',
      connection: null
    }
  },
  computed: {
    ...mapState(useConnectionStore, ['getCredentials']),
    ...mapWritableState(useConnectionStore, {
      hostname: 'hostname',
      port: 'port',
      db: 'db',
      username: 'username',
      password: 'password'
    }),
  },
  methods: {
    connect() {
      this.error = '';
      this.connection = mysql.createConnection(this.getCredentials);
      this.connection.connect((err) => {
        if (err) {
          console.log(this.getCredentials);
          console.log(err);
          this.error = err.message;
        } else {
          this.$emit('data');
          this.$router.push('/app');
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.container {
  margin: 0 auto;
  padding: $s-8;
  background-color: $white;
  border-radius: $s-3;
}
.form {
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: $s-5;
}
.form-element {
  display: flex;
  flex-direction: column;
  gap: $s-1;
}
.title {
  @include text('xl');
  color: $sky-900;
  font-weight: 700;
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
.btn {
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
  @include text('sm');
  color: $red-500;
}
</style>
