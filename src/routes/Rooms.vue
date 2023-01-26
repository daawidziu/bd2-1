<template>
  <AppLayout>
    <main>
      <h2 class="title">Rooms</h2>
      <ul class="list">
        <li v-for="room in rooms" :key="room.room_id" class="item">
          <v-icon name="fa-bed" color="darkgray" scale="1.5"/>
          <div class="element">
            <span class="label">Room Number: </span>
            <span class="value">{{ room.room_id }}</span>
          </div>
          <div class="element">
            <span class="label">Floor: </span>
            <span class="value">{{ room.floor }}</span>
          </div>
          <div class="element">
            <span class="label">Capacity: </span>
            <span class="value">{{ room.number_of_people }}</span>
          </div>
          <div class="element">
            <span class="label">Price: </span>
            <span class="value">{{ room.price }}$ / night</span>
          </div>
        </li>
      </ul>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import { mapState, mapWritableState } from 'pinia';
import { useDataStore } from '@/stores/data';
import { OhVueIcon } from 'oh-vue-icons';

export default {
  name: 'Rooms',
  components: { AppLayout, "v-icon": OhVueIcon },
  computed: {
    ...mapWritableState(useDataStore, {
      rooms: 'rooms',
    }),
  },
};
</script>

<style lang="scss" scoped>
.title {
  @include text('2xl');
  color: $slate-800;
  font-weight: bold;
  padding: $s-9 $s-13;
}
.list {
  display: flex;
  flex-direction: column;
  gap: $s-9;
  padding: $s-9 $s-13;
}
.item {
  display: flex;
  justify-content: space-around;
  gap: $s-13;
  padding: $s-6;
  border-radius: $s-6;
  background-color: $white;
  box-shadow: $shadow-sm;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $slate-100;
  }
}
.element {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $s-6;
}
.label {
  @include text('sm');
  color: $slate-500;
}
.value {
  color: $slate-700;
}
</style>
