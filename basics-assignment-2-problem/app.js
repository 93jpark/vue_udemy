const app = Vue.createApp({
    data(){
        return {
            output : 'OUTPUT',
            enteredOutput : 'OUTPUT'
        }
    },
    methods: {
        showAlert(){
            alert('clicked!');
        },
        showOutput(event){
            const userInput = event.target.value
            this.output = userInput;
        },
        showEntered(event){
            const userInput = event.target.value
            this.enteredOutput = userInput;
        },
    }
});

app.mount('#assignment');