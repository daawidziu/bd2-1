import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    rooms: [],
    people: [],
    reservations: [],
    transactions: [],
    employees: [],
  })
});
