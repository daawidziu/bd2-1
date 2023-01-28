<template>
  <AppLayout>
    <main class="container">
      <div class="form-container">
        <h2 class="title">Add Employee</h2>
        <form @submit.prevent="" class="form">
          <div class="element">
            <label for="salary" class="label">Salary</label>
            <input type="number" id="salary" name="salary" class="input"/>
          </div>
          <div class="element">
            <label for="hire-date" class="label">Hire Date</label>
            <input type="date" id="hire-date" name="hire-date" class="input"/>
          </div>
          <div class="element">
            <label for="position" class="label">Position</label>
            <input type="text" id="position" name="position" class="input"/>
          </div>
          <div class="element">
            <label for="working-hours" class="label">Working Hours</label>
            <input type="text" id="working-hours" name="working-hours" class="input"/>
          </div>
          <button class="btn">Create</button>
        </form>
      </div>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
  name: 'EmployeesAdd',
  components: { AppLayout }
};
</script>

<style lang="scss" scoped>
.title {
  @include text('xl');
  color: $sky-900;
  font-weight: 700;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-container {
  width: 100%;
  max-width: 500px;
  padding: $s-9 $s-13;
  border-radius: $s-6;
  background-color: $white;
  box-shadow: $shadow-sm;
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
.btn {
  width: 100%;
  padding: $s-4;
  background-color: $slate-800;
  color: $white;
  border-radius: $s-2;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $slate-700;
  }
}
.form {
  display: flex;
  flex-direction: column;
  gap: $s-8;
}
</style>
