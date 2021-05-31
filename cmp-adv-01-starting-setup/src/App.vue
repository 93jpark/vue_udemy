<template>
  <the-header></the-header>
  <button v-on:click="setSelectedComponent('active-goals')">Active Goals</button>
  <button v-on:click="setSelectedComponent('manage-goals')">Manage Goals</button>
  
  <keep-alive>
    <component v-bind:is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList';
// import UserInfo from './components/UserInfo';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  // below components only valid inside this file.(local)
  components: {
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals':CourseGoals,
    'manage-goals':ManageGoals,
    'active-goals':ActiveGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>