/*
  v-if really removes and adds elements from and to the DOM
  v-show just hides and show items with CSS.
*/


const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      if(!(this.enteredGoalValue === '')){
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = '';
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
