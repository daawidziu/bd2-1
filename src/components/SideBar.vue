<template>
  <aside class="container">
    <div class="head">
      <v-icon name="fa-hotel" color="white" scale="3"/>
      <h1 class="title">Hotel</h1>
    </div>
    <ul class="nav-bar">
      <li v-for="item in menu" :key="item.name">
        <router-link :to="item.link" class="name">
          <v-icon :name="item.icon" color="lightgray" scale="1.5"/>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <button class="logout" @click="logout">Logout</button>
  </aside>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
import { mapActions } from 'pinia';
import { useConnectionStore } from '@/stores/connection';
export default {
  name: 'SideBar',
  components: {
    "v-icon": OhVueIcon
  },
  data() {
    return {
      menu: [
        {
          name: 'Rooms',
          icon: 'fa-bed',
          link: '/app/rooms'
        },
        {
          name: 'Customers',
          icon: 'fa-user',
          link: '/app/customers'
        },
        {
          name: 'Employees',
          icon: 'fa-regular-address-book',
          link: '/app/employees'
        }
      ]
    };
  },
  methods: {
    ...mapActions(useConnectionStore, {
      resetState: 'resetState'
    }),
    logout() {
      this.resetState();
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $slate-800;
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $s-6;
  padding: $s-6;
}
.title {
  color: $slate-100;
  text-align: center;
}
.nav-bar {
  background-color: $slate-700;
}
.name {
  display: flex;
  align-items: center;
  gap: $s-6;
  padding: $s-8;
  color: $slate-100;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $slate-600;
  }
}
.logout {
  width: 100%;
  font-weight: bold;
  padding: $s-9;
  margin: $s-13 0;
  color: $slate-300;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $slate-700;
  }
}
</style>
