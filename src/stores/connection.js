import { defineStore } from 'pinia';

export const useConnectionStore = defineStore('connection', {
  state: function () {
    return {
      hostname: 'database-1.css2be1jxazh.eu-central-1.rds.amazonaws.com',
      port: 3306,
      db: 'project',
      username: '',
      password: ''
    };
  },
  actions: {
    resetState: function () {
      this.hostname = 'database-1.css2be1jxazh.eu-central-1.rds.amazonaws.com';
      this.port = 3306;
      this.db = 'project';
      this.username = '';
      this.password = '';
    },
  },
  getters: {
    getCredentials: (state) => ({
      host: state.hostname,
      port: state.port,
      database: state.db,
      user: state.username,
      password: state.password
    })
  }
});
