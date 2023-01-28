<template>
  <AppLayout>
    <main class="container">
      <h1 class="title">Employees</h1>
      <div>
        <ul class="list">
          <li v-for="employee in employees" :key="employee.employee_id" class="card">
            <v-icon name="fa-regular-address-card" color="darkgray" scale="2"/>
            <div class="content">
              <div class="element">
                <span class="label">Id </span>
                <span class="value">{{ employee.employee_id }}</span>
              </div>
              <div class="element">
                <span class="label">Salary </span>
                <span class="value">{{ employee.salary }}</span>
              </div>
              <div class="element">
                <span class="label">Position </span>
                <span class="value">{{ employee.position }}</span>
              </div>
              <div class="element">
                <span class="label">Hire </span>
                <span class="value">{{ new Date(employee.hire_date).toLocaleDateString()}}</span>
              </div>
              <div>
                <span class="label">Working hours </span>
                <span class="value">{{ employee.working_hours }}</span>
              </div>
            </div>
          </li>
          <li class="add">
            <router-link to="/app/employees/add">
              Add
            </router-link>
          </li>
        </ul>
      </div>
    </main>
  </AppLayout>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue';
import { mapState } from 'pinia';
import { useDataStore } from '@/stores/data';
import { OhVueIcon } from 'oh-vue-icons';

export default {
  name: 'Employees',
  components: { AppLayout, 'v-icon': OhVueIcon },
  computed: {
    ...mapState(useDataStore, ['employees', 'people'])
  }
};
</script>

<style lang="scss" scoped>
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: $s-9 $s-13;
  gap: $s-9;
}

.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: $s-9;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: $s-4;
  padding: $s-9;
  background-color: $white;
  border-radius: $s-3;
  box-shadow: $shadow-sm;
}

.element {
  display: flex;
  gap: $s-4;
}

.label {
  @include text('sm');
  color: $slate-800;
  font-weight: 700;
}

.value {
  @include text('sm');
  color: $slate-800;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $s-4;
  padding: $s-9;
  background-color: $white;
  border-radius: $s-3;
  box-shadow: $shadow-sm;

  a {
    @include text('lg');
    color: $slate-800;
    font-weight: 700;
  }
}
</style>
