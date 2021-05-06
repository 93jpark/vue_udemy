const app = Vue.createApp({
  data() {
    return {
        data: 0,
        name: "",
    };
  },
  methods: {
      add() {
        this.data++;
      },
    showName() {
      console.log("method executed");
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Kim";
    },
    resetInput() {
        this.name = '';
    }
  },
  computed: {
    fullname() {
      console.log("computed method executed");
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Kim";
    },
  },
});

app.mount('#example');