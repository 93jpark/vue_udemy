const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue : '',
            tasks : [],
            visibility : true        }
    },
    computed : {
        btnText() {
            return this.visibility ? 'Hide' : 'Show';
        }
    },
    methods : {
        addTask() {
            if(!(this.enteredTaskValue === '')){
                this.tasks.push(this.enteredTaskValue);
                this.enteredTaskValue = '';
            }
        },
        removeTask(idx){
            this.tasks.splice(idx, 1);
        },
        toggleBtn() {
            this.visibility = !this.visibility;
        }
    }
});

app.mount('#assignment');