import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import * as FaIcons from "oh-vue-icons/icons/fa";
import { addIcons } from 'oh-vue-icons';

import applyPrototypes from '@/helpers/applyPrototypes.js';

import App from '@/App.vue';

import '@/assets/base.css';
import '@/assets/normalize.css';


const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const routes = [
  { path: '/', component: () => import('./routes/Login.vue') },
  { path: '/app/rooms', component: () => import('./routes/Rooms.vue') },
  { path: '/app/customers', component: () => import('./routes/Customers.vue') },
  { path: '/app/customers/add', component: () => import('./routes/CustomersAdd.vue') },
  { path: '/app/customers/:id', component: () => import('./routes/CustomersDetails.vue') },
  { path: '/app/customers/:id/edit', component: () => import('./routes/CustomersDetailsEdit.vue')},
  { path: '/app/customers/:id/reservation', component: () => import('./routes/CustomersDetailsReservation.vue') },
  { path: '/app/employees', component: () => import('./routes/Employees.vue') },
  { path: '/app/employees/add', component: () => import('./routes/EmployeesAdd.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.use(createPinia());
app.use(router);
app.mount('#app');
