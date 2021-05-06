const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  methods: {
    outputFullname() {
      console.log('method execute');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Park';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  /* 
      'Computed'
      Vue will be aware of their dependecies and only execute
      them if one of dependencies changed.
   */
  computed: {
    // fullname() {
    //   console.log('computed')
    //   if (this.name === '') { // this.name <- is dependency for fullname() computed property.
    //     return ;
    //   }
    //   return this.name + ' ' + 'Park';
    // }
  },
  /*
    'watcher'
    using data or computed property as a name for watcher method
  */
 watch : {
  counter(value) {
    if(value > 50) {
      const that = this;
      setTimeout(function() {
        that.counter = 0;
      }, 2000);
    }
  },


  name(value) { // if var name change, watch'method name() will re-execute
    if (value === '') {
      this.fullname = '';
    }
    this.fullname = value + ' ' + this.lastName;
  },
  lastName(value) {
    if(value === '') {
      this.lastName = '';
    }
    this.fullname = this.name + ' ' + value;
  }
 }
});

app.mount('#events');


// 'watcher' is a function tell Vue to execute 
// when one of its dependencies changed
