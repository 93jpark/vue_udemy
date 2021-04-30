const app = Vue.createApp({
    // data : ,  === data(){return {};} // property as function
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            if(this.enteredValue != '')
            {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
            
        }
    }
});

app.mount('#app'); // mount view through id selector


// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

